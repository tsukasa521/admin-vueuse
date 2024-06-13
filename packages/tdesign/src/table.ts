import { PageInfo } from "tdesign-vue-next";
import { TableOptions, useTable as useVueTable } from "@2kk/admin-vueuse";

export function useTable(options: TableOptions) {
  const { getList, searchQuery } = useVueTable(options);

  const handlePageChange = (pageInfo: PageInfo) => {
    searchQuery.value.pageSize = pageInfo.pageSize
    searchQuery.value.pageNum = pageInfo.current
    getList()
  }
}