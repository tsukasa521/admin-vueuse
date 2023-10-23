<template>
  <section>
    <div>
      <t-form :data="searchQuery" layout="inline" label-width="0" @submit="search">
        <t-form-item>
          <t-input v-model="searchQuery.name" placeholder="请输入姓名"></t-input>
        </t-form-item>
        <t-form-item>
          <t-button theme="primary" type="submit">搜索</t-button>
        </t-form-item>
      </t-form>
    </div>
    <t-table rowKey="keyNo" :data="list" :columns="columns" size="small" :loading="listLoading" :pagination="pagination"
      cell-empty-content="--"></t-table>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { searchTable } from '../apis'
import { useTable } from "../../table";

const { getList, list, listLoading, searchQuery, pagination } = useTable(reactive({
  tableDataResolver: searchTable,
  searchQuery: { name: '' },
  wash: (list: any[]) => {
    return list.map(p => ({ id: p.id, name: p.name, age: p.userAge }))
  }
}))

const columns = ref([
  { colKey: 'id', title: 'ID' },
  { colKey: 'name', title: '姓名' },
  { colKey: 'age', title: '年龄' },
])

const search = () => { getList() }
</script>

<style lang="scss" scoped>
section {
  margin: 20px;
  padding: 20px;
  background: white;
  min-height: calc(100vh - 80px - 20px);
}
</style>