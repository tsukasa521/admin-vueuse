import { PageInfo } from "tdesign-vue-next";
import { TableOptions, useTable as useVueTable } from "@2kk/admin-vueuse";

export function useTable(options: TableOptions) {
  const { getList, list, listLoading, total, pagination, searchQuery, handleCurrentPageChange, handlePageSizeChange } = useVueTable(options);

  const handlePageChange = (currentPage: number, pageSize: number) => {
    searchQuery.value.pageSize = pageSize
    searchQuery.value.pageNum = currentPage
    getList()
  }

  return {
    list,
    total,
    listLoading,
    getList,
    handleCurrentPageChange,
    handlePageSizeChange,
    searchQuery,
    pagination,
    handlePageChange
  }
}