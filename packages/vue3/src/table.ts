import { onMounted, reactive, ref, toRef, toRefs, unref } from 'vue'
import { defu } from "defu"

export type SearchQueryParam = {
  [key: string]: any
}

const SearchQueryDefaultParam = {
  pageNum: 1,
  pageSize: 20
}

export type ResponseProps = {
  resultData: string,
  total: string
}

const ResponseDefaultProps = {
  resultData: 'list',
  total: 'count'
}

export type Pagination = {
  defaultCurrent: number,
  defaultPageSize: number,
  total: number
}

export interface TableOptions {
  tableDataResolver: (...p: any[]) => Promise<any>
  searchQuery?: SearchQueryParam
  isPagination?: boolean
  hasMounted?: boolean
  shim?: <T>(list: T[]) => any[]
  responseProps?: ResponseProps
}

// export type MiddleReliefTableOptions = {
//   tableDataResolver: { list: any[], total: number },
//   searchQuery?: SearchQuery
// }

// type MiddleReliefTableInnerOptions = {
//   tableDataResolver: { list: any[], total: number },
//   searchQuery: SearchInnerQuery
// }

/**
 * table hook
 */
export function useTable(options: TableOptions) {
  // todo 验证
  if (!options.tableDataResolver) {
    throw new Error("TableDataResolver is required.")
  }

  const { tableDataResolver } = toRefs(options);

  const searchQuery = ref(defu(options.searchQuery, SearchQueryDefaultParam))
  const isPagination = ref(options.isPagination == undefined ? true : options.isPagination)
  const hasMounted = ref(options.hasMounted == undefined ? true : options.hasMounted)
  const shim = ref(options.shim || ((list: any[]) => list))
  const responseProps = ref(defu(options.responseProps, ResponseDefaultProps))

  const pagination = ref<Pagination | undefined>({
    defaultCurrent: searchQuery.value.pageNum,
    defaultPageSize: searchQuery.value.pageSize,
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

    const args = [unref(searchQuery)]

    unref(tableDataResolver)(...args)
      .then((res) => {
        const { data } = res
        if (isPagination.value) {
          const {
            [responseProps.value.resultData]: list,
            [responseProps.value.total]: count
          } = data
          o.list = shim.value(list)
          o.total = count
          pagination.value && (pagination.value.total = count)
        } else {
          o.list = shim.value(data)
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
    searchQuery.value.pageSize = val
    getList()
  }

  const handleCurrentPageChange = (val: number) => {
    searchQuery.value.pageNum = val
    getList()
  }

  if (hasMounted.value) {
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
    searchQuery,
    pagination
  }
}

// export function useMiddleReliefTable(
//   emits: any,
//   options: MiddleReliefTableOptions
// ) {
//   const optionsCore = reactive<MiddleReliefTableInnerOptions>({
//     tableDataResolver: options.tableDataResolver,
//     searchQuery: defu(options.searchQuery, { page: 1, limit: 20 })
//   })

//   const handlePageSizeChange = (val: number) => {
//     unref(optionsCore.searchQuery).limit = val
//     emits('page-size-change')
//   }

//   const handleCurrentPageChange = (val: number) => {
//     unref(optionsCore.searchQuery).page = val
//     emits('current-page-change')
//   }

//   return {
//     handleCurrentPageChange,
//     handlePageSizeChange
//   }
// }

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
