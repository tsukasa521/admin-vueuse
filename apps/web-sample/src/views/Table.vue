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
      <div class="flex gap-3">
        <input class="border border-solid px-2" type="text" v-model="searchQuery.name">
        <button class="bg-primary text-white px-3 py-1" @click="search">搜索</button>
      </div>
      <table border="1" class="w-full">
        <tr class="w-1/2">
          <th class="text-left text-base">姓名</th>
          <th class="text-left text-base">年龄</th>
        </tr>
        <tr class="w-1/2" v-for="(item, index) in list">
          <td>{{ item.name }}</td>
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
import { useTable } from "@2kk/admin-vueuse";
import SamplePanel from "@/components/SamplePanel.vue";
import { searchTableByPage, searchTable, searchTable2 } from '@/apis'

const { getList, list, listLoading, searchQuery, pagination } = useTable(searchTableByPage, { name: '' }, true, true, (list: any[]) => list.map(p => ({ name: p.userName, age: p.age })))

const search = () => {
  searchQuery.value.pageNum = 1
  getList()
}
</script>

<style lang="scss" scoped></style>