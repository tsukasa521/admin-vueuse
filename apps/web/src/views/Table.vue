<template>
  <section>
    <t-table rowKey="keyNo" :data="list" :columns="columns" size="small" :loading="listLoading" :pagination="pagination"
      cell-empty-content="--"></t-table>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTable } from "@2kk/admin-vueuse";

const searchApi = () => {
  return new Promise((resolve, reject) => {
    const l: any[] = [{ id: '1', name: '张三', age: 25 }, { id: '2', name: '李四', age: 25 }, { id: '3', name: '王五', age: 25 }]
    resolve({ data: { list: l, count: l.length } })
  })
}

const { getList, list, listLoading, searchQuery, pagination } = useTable({ tableDataResolver: searchApi })

const columns = ref([
  { colKey: 'id', title: 'ID' },
  { colKey: 'name', title: '姓名' },
  { colKey: 'age', title: '年龄' },
])
</script>

<style lang="scss" scoped>
section {
  margin: 20px;
  padding: 20px;
  background: white;
  min-height: calc(100vh - 80px - 20px);
}
</style>