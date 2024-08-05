<template>
  <SamplePanel title="自定义接受接口返回数据" description="当子元素中包含时，全部子元素会水平排列，否则会垂直排列。">
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
    <t-table rowKey="id" :data="list" :columns="columns" size="small" :loading="listLoading" :pagination="pagination"
      @page-change="handlePageChange"></t-table>
  </SamplePanel>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTable } from "@2kk/admin-vueuse-tdesign";
import { searchTableByPage } from '@/apis'

const { getList, list, listLoading, searchQuery, pagination, handlePageChange }
  = useTable(searchTableByPage, { pageSize: 10, name: '' }, true, true, (list: any[]) => list.map(p => ({ id: p.id, name: p.userName, age: p.age })))

const columns = ref([
  { colKey: 'id', title: 'ID' },
  { colKey: 'name', title: '姓名' },
  { colKey: 'age', title: '年龄' },
])

const search = () => {
  searchQuery.value.pageNum = 1
  getList()
}
</script>

<style lang="scss" scoped></style>