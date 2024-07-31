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
    <SamplePanel title="基础用法" description="当子元素中包含时，全部子元素会水平排列，否则会垂直排列。">
      <div>
        <input class="border border-solid" type="text" v-model="searchQuery.name">
        <button class="bg-primary text-white" @click="search">搜索</button>
      </div>
      <table border="1" class="w-full">
        <tr class="w-1/2">
          <th class="text-left text-base">姓名</th>
          <th class="text-left text-base">年龄</th>
        </tr>
        <tr class="w-1/2" v-for="(item, index) in list">
          <td>{{ item.userName }}</td>
          <td>{{ item.age }}</td>
        </tr>
      </table>
    </SamplePanel>

    <SamplePanel title="不需要分页" description="当子元素中包含时，全部子元素会水平排列，否则会垂直排列。">
      待完善
    </SamplePanel>

  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { TableOptions, useTable } from "@2kk/admin-vueuse";
import SamplePanel from "@/components/SamplePanel.vue";
import { searchTableByPage, searchTable, searchTable2 } from '@/apis'

const options = reactive<TableOptions>({
  tableDataResolver: searchTableByPage
})

const { getList, list, listLoading, searchQuery, pagination } = useTable(searchTableByPage)

const search = () => {
  searchQuery.value.pageNum = 1
  getList()
}

const change = () => {
  options.tableDataResolver = searchTable2
}
</script>

<style lang="scss" scoped></style>