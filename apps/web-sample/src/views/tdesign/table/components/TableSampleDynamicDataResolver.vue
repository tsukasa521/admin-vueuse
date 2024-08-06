<template>
  <SamplePanel title="动态切换列表查询接口" description="当子元素中包含时，全部子元素会水平排列，否则会垂直排列。">
    <div>
      <t-form :data="searchQuery" layout="inline" label-width="0" @submit="search">
        <t-form-item>
          <t-input v-model="searchQuery.name" placeholder="请输入姓名"></t-input>
        </t-form-item>
        <t-form-item>
          <t-space>
            <t-button theme="primary" type="submit">搜索</t-button>
            <t-button theme="primary" @click="change">更改接口</t-button>
          </t-space>
        </t-form-item>
      </t-form>
    </div>
    <t-table rowKey="id" :data="list" :columns="columns" size="small" :loading="listLoading" :pagination="pagination"
      @page-change="handlePageChange"></t-table>
  </SamplePanel>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { TableDataResolver } from "@2kk/admin-vueuse";
import { useTable } from "@2kk/admin-vueuse-tdesign";
import { searchTable, searchTable2 } from '@/apis'

const tableDataResolver = reactive<TableDataResolver>({ func: searchTable })
const { getList, list, listLoading, searchQuery, pagination, handlePageChange } = useTable(tableDataResolver, { name: '' }, false, true)

const columns = ref([
  { colKey: 'id', title: 'ID' },
  { colKey: 'userName', title: '姓名' },
  { colKey: 'age', title: '年龄' },
])

const search = () => {
  searchQuery.value.pageNum = 1
  getList()
}

const change = () => {
  console.log("change");
  tableDataResolver.func = searchTable2
}
</script>

<style lang="scss" scoped></style>