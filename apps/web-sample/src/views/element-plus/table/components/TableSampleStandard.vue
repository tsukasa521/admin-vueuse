<template>
  <SamplePanel title="基础用法" description="">
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
      <el-pagination layout="prev, pager, next" :total="total" @change="handlePageChange" />
    </div>
  </SamplePanel>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { TableOptions } from "@2kk/admin-vueuse";
import { useTable } from "@2kk/admin-vueuse-element-plus";
import SamplePanel from "@/components/SamplePanel.vue";
import { searchTableByPage } from '@/apis'

const options = reactive<TableOptions>({
  tableDataResolver: searchTableByPage,
  searchQuery: { pageSize: 10, name: '' }
})

const { getList, list, listLoading, total, searchQuery, pagination, handlePageChange } = useTable(options)

const search = () => { getList() }
</script>

<style lang="scss" scoped></style>