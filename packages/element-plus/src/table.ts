import { PartialSearchQuery, ResponseProps, TableDataResolver, useTable as useVueTable } from "@2kk/admin-vueuse";

export function useTable<TSearchQuery extends PartialSearchQuery, TTarget = any>(
  tableDataResolver: TableDataResolver,
  searchQuery: TSearchQuery | undefined = { pageNum: 1, pageSize: 20 } as TSearchQuery,
  isPagination: boolean | undefined = true,
  hasMounted: boolean | undefined = true,
  shim: <TSource>(list: TSource[]) => TTarget[] = (list: any[]) => list,
  responseProps: ResponseProps | undefined = { resultData: 'list', total: 'count' }
) {
  const { getList, list, listLoading, pagination, searchQuery: searchQueryInner, handleCurrentPageChange, handlePageSizeChange }
    = useVueTable(tableDataResolver, searchQuery, isPagination, hasMounted, shim, responseProps);

  const handlePageChange = (currentPage: number, pageSize: number) => {
    searchQueryInner.value.pageSize = pageSize
    searchQueryInner.value.pageNum = currentPage
    getList()
  }

  return {
    list,
    listLoading,
    getList,
    handleCurrentPageChange,
    handlePageSizeChange,
    searchQuery: searchQueryInner,
    pagination,
    handlePageChange
  }
}