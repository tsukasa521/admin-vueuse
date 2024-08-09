<template>
  <SamplePanel title="动态切换列表查询接口" description="当子元素中包含时，全部子元素会水平排列，否则会垂直排列。">
    <div>
      <el-form :model="searchQuery" inline label-width="0">
        <el-form-item>
          <el-input v-model="searchQuery.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">搜索</el-button>
          <el-button theme="primary" @click="change">更改接口</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table :data="list" size="small" :loading="listLoading">
      <el-table-column prop="userName" label="姓名" />
      <el-table-column prop="age" label="年龄" />
    </el-table>
  </SamplePanel>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { TableDataResolver } from "@2kk/admin-vueuse";
import { useTable } from "@2kk/admin-vueuse-element-plus";
import { searchTable, searchTable2 } from '@/apis'


const tableDataResolver = reactive<TableDataResolver>({ func: searchTable })

const { getList, list, listLoading, searchQuery, pagination } = useTable(tableDataResolver, { name: '' }, false)

const search = () => { getList() }

const change = () => {
  console.log("change");
  tableDataResolver.func = searchTable2
}
</script>

<style lang="scss" scoped></style>