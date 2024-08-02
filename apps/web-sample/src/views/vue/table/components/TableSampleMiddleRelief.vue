<template>
  <SamplePanel title="使用中继" description="当子元素中包含时，全部子元素会水平排列，否则会垂直排列。">
    <table border="1" class="w-full">
      <tr class="w-1/2">
        <th class="text-left text-base">姓名</th>
        <th class="text-left text-base">年龄</th>
      </tr>
      <tr class="w-1/2" v-for="(item, index) in TABLE_MOCK_DATA">
        <td>{{ item.userName }}</td>
        <td>{{ item.age }}</td>
      </tr>
    </table>
  </SamplePanel>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useMiddleReliefTable } from "@2kk/admin-vueuse";
import { TABLE_MOCK_DATA } from '@/apis'

const emits = defineEmits()
const { handleCurrentPageChange, handlePageSizeChange } = useMiddleReliefTable(emits, { tableDataResolver: { list: TABLE_MOCK_DATA, total: TABLE_MOCK_DATA.length }, searchQuery: { pageNum: 1, pageSize: 10 } })
</script>

<style lang="scss" scoped></style>