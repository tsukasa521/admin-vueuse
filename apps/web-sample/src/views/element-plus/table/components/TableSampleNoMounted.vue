<template>
  <SamplePanel title="进入页面不马上搜索" description="当子元素中包含时，全部子元素会水平排列，否则会垂直排列。">
    <div>
      <el-form :model="searchQuery" inline label-width="0">
        <el-form-item>
          <el-input v-model="searchQuery.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table :data="list" size="small" :loading="listLoading">
      <el-table-column prop="userName" label="姓名" />
      <el-table-column prop="age" label="年龄" />
    </el-table>
    <div class="mt-5 flex justify-end">
      <el-pagination layout="prev, pager, next" :total="pagination.total" @change="handlePageChange" />
    </div>
  </SamplePanel>
</template>

<script setup lang="ts">
import { useTable } from "@2kk/admin-vueuse-element-plus";
import { searchTableByPage } from '@/apis'

const { getList, list, listLoading, searchQuery, pagination, handlePageChange } = useTable({ func: searchTableByPage }, { pageSize: 10, name: '' }, true, false)

const search = () => {
  searchQuery.value.pageNum = 1
  getList()
}

</script>

<style lang="scss" scoped></style>