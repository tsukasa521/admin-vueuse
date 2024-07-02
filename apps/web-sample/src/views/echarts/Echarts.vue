<template>
  <div class="page-container">
    <div>
      <h1>
        useChart
      </h1>
      <p class="text-sm text-secondary mt-4">
        xxx
      </p>
    </div>
    <SamplePanel title="柱状图" description="">
      <div id="chart1" style="height: 350px"></div>
    </SamplePanel>

    <SamplePanel title="折线图" description="">
      <div id="chart2" style="height: 350px"></div>
    </SamplePanel>

    <SamplePanel title="饼图" description="">
      <div id="chart3" style="height: 350px"></div>
    </SamplePanel>
  </div>
</template>

<script setup lang="ts">
import { useChart, useChartOptions } from "@2kk/admin-vueuse-echarts";

const { generateBarChartOptions, generateLineChartOptions, generatePieChartOptions } = useChartOptions();

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

useChart("chart2", generateLineChartOptions({
  title: "折线图",
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

useChart("chart3", generatePieChartOptions({
  title: "饼图",
  legend: true,
  series: [
    {
      data: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 1548, name: '搜索引擎' }
      ]
    }]
}))
</script>

<style lang="scss" scoped></style>