import { onMounted, reactive, ref, toRefs, unref } from 'vue'
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
  searchQueryParam: SearchQueryParam
  isPagination: boolean
  hasMounted: boolean
  shim: <T>(list: T[]) => any[]
  responseProps: ResponseProps
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
export function useTable(options: Partial<TableOptions> = { searchQueryParam: SearchQueryDefaultParam, isPagination: false, hasMounted: false, shim: (list) => list, responseProps: ResponseDefaultProps }) {
  // todo 验证
  if (!options.tableDataResolver) {
    throw new Error("TableDataResolver is required.")
  }

  const optionsCore = reactive<TableOptions>({
    tableDataResolver: options.tableDataResolver,
    searchQueryParam: defu(options.searchQueryParam, SearchQueryDefaultParam),
    isPagination: options.isPagination == undefined ? true : options.isPagination,
    hasMounted: options.hasMounted == undefined ? true : options.hasMounted,
    shim: options.shim || ((list) => list),
    responseProps: defu(options.responseProps, ResponseDefaultProps)
  })

  const pagination = ref<Pagination | undefined>({
    defaultCurrent: optionsCore.searchQueryParam['pageNum'],
    defaultPageSize: optionsCore.searchQueryParam['pageSize'],
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

    const args = [unref(optionsCore.searchQueryParam)]

    optionsCore.tableDataResolver(...args)
      .then((res) => {
        const { data } = res
        if (optionsCore.isPagination) {
          const {
            [optionsCore.responseProps.resultData]: list,
            [optionsCore.responseProps.total]: count
          } = data
          o.list = optionsCore.shim(list)
          o.total = count
          pagination.value && (pagination.value.total = count)
        } else {
          o.list = optionsCore.shim(data)
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
    optionsCore.searchQueryParam.pageSize = val
    getList()
  }

  const handleCurrentPageChange = (val: number) => {
    optionsCore.searchQueryParam.pageNum = val
    getList()
  }

  if (optionsCore.hasMounted) {
    onMounted(() => {
      getList()
    })
  }

  const { list, total, listLoading } = toRefs(o)
  const { searchQueryParam } = toRefs(optionsCore)
  return {
    list,
    total,
    listLoading,
    getList,
    handleCurrentPageChange,
    handlePageSizeChange,
    searchQueryParam,
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
