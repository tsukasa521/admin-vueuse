<template>
  <SamplePanel title="基础用法" description="当子元素中包含时，全部子元素会水平排列，否则会垂直排列。">
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
      @page-change="handlePageChange"></t-table>
  </SamplePanel>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { TableOptions } from "@2kk/admin-vueuse";
import { useTable } from "@2kk/admin-vueuse-tdesign";
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

<style lang="scss" scoped></style>