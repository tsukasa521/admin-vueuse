<template>
  <div class="page-container">
    <div>
      <h1>
        useTable
      </h1>
      <p class="text-sm text-secondary mt-4">
        useTable应用于常见的列表页场景，包括分页、搜索等。基础包中的useTable采用纯ts实现与控件库解耦，可灵活的应用于各种控件库。
      </p>
    </div>

    <TableSampleStandard />

    <TableSampleMiddleRelief />
    
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useTable, useMiddleReliefTable } from "@2kk/admin-vueuse";
import { TableSampleStandard, TableSampleMiddleRelief } from "./components";
import { searchTableByPage, searchTable, searchTable2, TABLE_MOCK_DATA } from '@/apis'

const emits = defineEmits()
const { handleCurrentPageChange, handlePageSizeChange } = useMiddleReliefTable(emits, { tableDataResolver: { list: TABLE_MOCK_DATA, total: TABLE_MOCK_DATA.length }, searchQuery: { pageNum: 1, pageSize: 10 } })
</script>

<style lang="scss" scoped></style>