<template>
  <SamplePanel title="进入页面不马上搜索" description="当子元素中包含时，全部子元素会水平排列，否则会垂直排列。">
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
import { reactive, ref } from "vue";
import { useTable } from "@2kk/admin-vueuse-tdesign";
import SamplePanel from "@/components/SamplePanel.vue";
import { searchTableByPage } from '@/apis'

const { getList, list, listLoading, searchQuery, pagination, handlePageChange } = useTable({ func: searchTableByPage }, { pageSize: 10, name: '' }, true, false)

const columns = ref([
  { colKey: 'id', title: 'ID' },
  { colKey: 'userName', title: '姓名' },
  { colKey: 'age', title: '年龄' },
])

const search = () => {
  searchQuery.value.pageNum = 1
  getList()
}

</script>

<style lang="scss" scoped></style>