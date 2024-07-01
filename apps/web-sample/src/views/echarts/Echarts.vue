<template>
  <div>
    <div id="chart1" style="height: 350px"></div>
  </div>
</template>

<script setup lang="ts">
import { useChart, useChartOptions } from "@2kk/admin-vueuse-echarts";

const { generateBarChartOptions } = useChartOptions();

useChart("chart1", generateBarChartOptions({
  title: "柱状图",
  legend: true,
  categories: ['24年4月', '24年5月', '24年6月', '24年7月', '24年8月', '24年9月'],
  series: [
    {
      name: '服装',
      data: [35, 23, 45, 18, 56, 36]
    },
    {
      name: '材料',
      data: [5, 20, 36, 10, 10, 20]
    },
  ]
}))
</script>

<style lang="scss" scoped></style>