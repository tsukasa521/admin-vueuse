<template>
  <SamplePanel title="不分页" description="当子元素中包含时，全部子元素会水平排列，否则会垂直排列。">
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
  </SamplePanel>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { TableOptions } from "@2kk/admin-vueuse";
import { useTable } from "@2kk/admin-vueuse-element-plus";
import SamplePanel from "@/components/SamplePanel.vue";
import { searchTable } from '@/apis'

const options = reactive<TableOptions>({
  tableDataResolver: searchTable,
  searchQuery: { name: '' },
  isPagination: false
})

const { getList, list, listLoading, searchQuery } = useTable(options)

const search = () => { getList() }
</script>

<style lang="scss" scoped></style>