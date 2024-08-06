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

<script setup>
import { TableSampleStandard, TableSampleMiddleRelief } from "./components";
</script>

<style lang="scss" scoped></style>