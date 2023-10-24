import { onMounted, reactive, ref, toRefs, unref } from 'vue'
import { defu } from "defu"

export type SearchQuery = {
  page?: number,
  limit?: number,
  [key: string]: any
}

export type SearchInnerQuery = {
  page: number,
  limit: number,
  [key: string]: any
}


export type SearchResponseProps = {
  resultData: string,
  total: string
}

export type Pagination = {
  defaultCurrent: number,
  defaultPageSize: number,
  total: number
}

export type TableOptions = {
  tableDataResolver: (...p: any[]) => Promise<any>,
  searchQuery?: SearchQuery,
  isPagination?: boolean,
  hasMounted?: boolean,
  launder?: <T>(list: T[]) => any[],
  searchResponseProps?: SearchResponseProps,
}

type TableInnerOptions = {
  tableDataResolver: (...p: any[]) => Promise<any>,
  searchQuery: SearchInnerQuery,
  isPagination: boolean,
  hasMounted: boolean,
  launder: <T>(list: T[]) => any[],
  searchResponseProps: SearchResponseProps
}

export type MiddleReliefTableOptions = {
  tableDataResolver: { list: any[], total: number },
  searchQuery?: SearchQuery
}

/**
 * 表格 hook
 */
export function useTable(options: TableOptions) {
  // todo 验证
  const optionsCore = reactive<TableInnerOptions>({
    tableDataResolver: options.tableDataResolver,
    searchQuery: defu(options.searchQuery, { page: 1, limit: 20 }),
    isPagination: options.isPagination == undefined ? true : options.isPagination,
    hasMounted: options.hasMounted == undefined ? true : options.hasMounted,
    launder: options.launder || ((list) => list),
    searchResponseProps: defu(options.searchResponseProps, { resultData: 'list', total: 'count' })
  })

  const pagination = ref<Pagination | undefined>({
    defaultCurrent: optionsCore.searchQuery.page,
    defaultPageSize: optionsCore.searchQuery.limit,
    total: 0
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

    const args = [unref(optionsCore.searchQuery)]

    optionsCore.tableDataResolver(...args)
      .then((res) => {
        const { data } = res
        if (optionsCore.isPagination) {
          const {
            [optionsCore.searchResponseProps.resultData]: list,
            [optionsCore.searchResponseProps.total]: count
          } = data
          o.list = optionsCore.launder(list)
          o.total = count
          pagination.value && (pagination.value.total = count)
        } else {
          o.list = optionsCore.launder(data)
          o.total = o.list.length
          pagination.value = undefined
        }
        resolve(data)
      }).catch((error) => {
        reject(error)
      })
      .finally(() => {
        o.listLoading = false
      })
  })

  const handlePageSizeChange = (val: number) => {
    optionsCore.searchQuery.limit = val
    getList()
  }

  const handleCurrentPageChange = (val: number) => {
    optionsCore.searchQuery.page = val
    getList()
  }

  if (optionsCore.hasMounted) {
    onMounted(() => {
      getList()
    })
  }

  const { list, total, listLoading } = toRefs(o)
  const { searchQuery } = toRefs(optionsCore)
  return {
    list,
    total,
    listLoading,
    getList,
    handleCurrentPageChange,
    handlePageSizeChange,
    searchQuery,
    pagination
  }
}

export function useMiddleReliefTable(
  emits: any,
  options: MiddleReliefTableOptions
) {
  const optionsCore = reactive({
    tableDataResolver: options.tableDataResolver,
    searchQuery: options.searchQuery || {}
  })

  const handlePageSizeChange = (val: number) => {
    unref(optionsCore.searchQuery).limit = val
    emits('get-list')
  }

  const handleCurrentPageChange = (val: number) => {
    unref(optionsCore.searchQuery).page = val
    emits('get-list')
  }

  return {
    handleCurrentPageChange,
    handlePageSizeChange
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
  const getDropdownItems = (row: any) => {
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
