<template>
  <div class="page-container">
    <div>
      <h1>
        useTable
      </h1>
      <p class="text-sm text-secondary mt-4">
        useTable应用于常见的列表页场景，包括分页、搜索等。tdesign包中的useTable与tdesign控件库耦合，可直接使用全部功能。
      </p>
    </div>

    <TableSampleStandard />

    <TableSampleNoPagination />

    <TableSampleNoMounted />

    <TableSampleCustomerResponse />

    <TableSampleDynamicDataResolver />

  </div>
</template>

<script setup lang="ts">
import {
  TableSampleStandard,
  TableSampleNoPagination,
  TableSampleNoMounted,
  TableSampleCustomerResponse,
  TableSampleDynamicDataResolver
} from './components'
</script>

<style lang="scss" scoped></style>