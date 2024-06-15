<template>
  <div class="page-container">
    <h1>
      useTable
    </h1>
    <SamplePanel>
      <div>
        <t-form :data="searchQuery" layout="inline" label-width="0" @submit="search">
          <t-form-item>
            <t-input v-model="searchQuery.name" placeholder="请输入姓名"></t-input>
          </t-form-item>
          <t-form-item>
            <t-button theme="primary" type="submit">搜索</t-button>
            <t-button theme="primary" @click="change">更改</t-button>
          </t-form-item>
        </t-form>
      </div>
      <t-table rowKey="id" :data="list" :columns="columns" size="small" :loading="listLoading" :pagination="pagination"
        @page-change="handlePageChange" cell-empty-content="--"></t-table>
    </SamplePanel>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { TableOptions, useTable } from "@2kk/admin-vueuse";
import SamplePanel from "@/components/SamplePanel.vue";
import { searchTableByPage, searchTable, searchTable2 } from '@/apis'

const options = reactive<TableOptions>({
  tableDataResolver: searchTableByPage,
  searchQuery: { pageSize: 10, name: '' },
  shim: (list: any[]) => {
    return list.map(p => ({ id: p.id, name: p.name, age: p.userAge }))
  }
})

const { getList, list, listLoading, searchQuery, pagination, handlePageChange } = useTable(options)

const columns = ref([
  { colKey: 'id', title: 'ID' },
  { colKey: 'name', title: '姓名' },
  { colKey: 'age', title: '年龄' },
])

const search = () => { getList() }

const change = () => {
  options.tableDataResolver = searchTable2
}
</script>

<style lang="scss" scoped>
.page-container {
  padding: 20px;
  margin: 0 auto;
  width: 100%;
  min-width: 320px;
  max-width: 960px;
}

h1 {
  margin: 0;
  font-size: 48px;
  line-height: 56px;
  font-weight: 700;
}
</style>