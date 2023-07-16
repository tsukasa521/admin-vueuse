import { onMounted, reactive, ref, toRefs, unref } from 'vue'

export type TableOptions = {
  tableDataResolver: (...p: any[]) => Promise<any>,
  searchQuery: any,
  searchPayload: any[],
  isPagination: boolean,
  hasMounted: boolean,
  wash: (list: any[]) => any[],
  searchResponseProps: { resultData: string, total: string }
}

/**
 * 表格 hook
 */
export function useTable(options: TableOptions) {
  // todo 验证

  const optionsCore = reactive<TableOptions>({
    tableDataResolver: options.tableDataResolver,
    searchQuery: options.searchQuery || {},
    searchPayload: options.searchPayload || null,
    isPagination: options.isPagination || true,
    hasMounted: options.hasMounted || true,
    wash: options.wash || ((list) => list),
    searchResponseProps: options.searchResponseProps || { resultData: 'list', total: 'count' }
  })

  const searchQueryCore = reactive({
    ...unref(optionsCore.searchQuery),
    page: 1,
    limit: 20
  })

  const o = reactive<{
    listLoading: boolean,
    list: any[],
    total: number
  }>({
    listLoading: false,
    list: [],
    total: 0
  })

  const getList = () => new Promise((resolve, reject) => {
    o.listLoading = true

    const args = optionsCore.searchPayload && optionsCore.searchPayload.length ? [unref(searchQueryCore), ...unref(optionsCore.searchPayload)] : [unref(searchQueryCore)]

    optionsCore.tableDataResolver(...args)
      .then((res) => {
        const { data } = res
        if (optionsCore.isPagination) {
          const {
            [optionsCore.searchResponseProps.resultData]: list,
            [optionsCore.searchResponseProps.total]: count
          } = data
          o.list = optionsCore.wash(list)
          o.total = count
        } else {
          o.list = data
          o.total = o.list.length
        }
        resolve(data)
      }).catch((error) => {
        reject(error)
      })
      .finally(() => {
        o.listLoading = false
      })
  })

  const handlePageSizeChange = (val) => {
    unref(searchQueryCore).limit = val
    getList()
  }

  const handleCurrentPageChange = (val) => {
    unref(searchQueryCore).page = val
    getList()
  }

  if (optionsCore.hasMounted) {
    onMounted(() => {
      getList()
    })
  }

  const { list, total, listLoading } = toRefs(o)
  return {
    list,
    total,
    listLoading,
    getList,
    handleCurrentPageChange,
    handlePageSizeChange,
    searchQuery: searchQueryCore,
  }
}

export type DropdownItems = {
  label: string,
  show: (row: any) => boolean,
  action: (row: any) => void,
  component: any
}

/**
 * 操作列
 */
export function useDropdownItems(...items: DropdownItems[]) {
  /**
   * 根据表格中每行的数据来过滤哪些选项在操作列中不可见
   * @param row 表格行的数据
   * @returns
   */
  const getDropdownItems = (row) => {
    return unref(items).reduce((prev: DropdownItems[], cur) => {
      const config = unref(cur)
      if (config.show == null || config.show === undefined) {
        prev.push(config)
      } else if (config.show(row)) {
        prev.push(config)
      }
      return prev
    }, [])
  }

  return { getDropdownItems }
}
