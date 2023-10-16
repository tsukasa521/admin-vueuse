<template>
  <div>
    <p>useTable</p>
    <t-table rowKey="keyNo" :data="list" :columns="columns" size="small" :loading="listLoading" :pagination="pagination"
      cell-empty-content="--"></t-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTable } from "../../table";

const searchApi = () => {
  return new Promise((resolve, reject) => {
    const l: any[] = []
    resolve({ data: { list: l, count: l.length } })
  })
}

const { getList, list, listLoading, searchQuery, pagination } = useTable({ tableDataResolver: searchApi })

const columns = ref([])
</script>

<style lang="scss" scoped>
p {
  color: var(--td-brand-color-7);
}
</style>