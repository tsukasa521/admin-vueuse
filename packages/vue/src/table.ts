import { onMounted, reactive, ref, toRefs, unref, computed } from 'vue'
import { defu } from "defu"

export interface SearchQuery {
  pageNum?: number
  pageSize?: number
}

export type ResponseProps = {
  resultData: string,
  total: string
}

export type Pagination = {
  defaultCurrent: number,
  defaultPageSize: number,
  total: number
}

export interface TableOptions<TSearchQuery extends SearchQuery = SearchQuery> {
  tableDataResolver: (...p: any[]) => Promise<any>
  searchQuery?: TSearchQuery
  isPagination?: boolean
  hasMounted?: boolean
  shim?: <T>(list: T[]) => any[]
  responseProps?: ResponseProps
}

export type MiddleReliefTableOptions = {
  tableDataResolver: { list: any[], total: number },
  searchQuery?: SearchQuery
}

/**
 * table hook
 */
export function useTable<TSearchQuery extends SearchQuery>(
  tableDataResolver: (...p: any[]) => Promise<any>,
  searchQuery: TSearchQuery | undefined = { pageNum: 1, pageSize: 20 } as TSearchQuery,
  isPagination?: boolean,
  hasMounted?: boolean,
  responseProps: ResponseProps | undefined = { resultData: 'list', total: 'count' }
) {
  const shim = <T>(list: T[]) => list

  if (!searchQuery.pageNum)
    searchQuery.pageNum = 1

  if (!searchQuery.pageSize)
    searchQuery.pageSize = 10


  const requiredSearchQuery = computed<Required<TSearchQuery>>(() => ({ pageNum: searchQuery.pageNum, pageSize: searchQuery.pageSize, ...searchQuery } as Required<TSearchQuery>))

  const pagination = computed<Pagination | undefined>(() => {
    if (isPagination) {
      return {
        defaultCurrent: requiredSearchQuery.value.pageNum,
        defaultPageSize: requiredSearchQuery.value.pageSize,
        total: 0
      } as Pagination
    } else {
      return undefined
    }
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
        if (isPagination) {
          const {
            [responseProps.resultData]: list,
            [responseProps.total]: count
          } = data
          o.list = shim(list)
          o.total = count
          pagination.value && (pagination.value.total = count)
        } else {
          o.list = shim(data)
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

  const handlePageSizeChange = (val: number) => {
    requiredSearchQuery.value.pageSize = val
    getList()
  }

  const handleCurrentPageChange = (val: number) => {
    requiredSearchQuery.value.pageNum = val
    getList()
  }

  if (hasMounted) {
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
    searchQuery: requiredSearchQuery,
    pagination
  }
}

export function useMiddleReliefTable(
  emits: any,
  options: MiddleReliefTableOptions
) {
  if (!options.tableDataResolver) {
    throw new Error("TableDataResolver is required.")
  }

  const searchQuery = ref(options.searchQuery || { pageNum: 1, pageSize: 20 })

  const handlePageSizeChange = (val: number) => {
    searchQuery.value.pageSize = val
    emits('page-size-change')
  }

  const handleCurrentPageChange = (val: number) => {
    searchQuery.value.pageNum = val
    emits('current-page-change')
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
