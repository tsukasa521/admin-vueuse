<template>
  <SamplePanel title="基础用法" description="当子元素中包含时，全部子元素会水平排列，否则会垂直排列。">
    <el-button type="primary" @click="openModal">打开Dialog</el-button>
    <InnerDialog v-model:visible="modalVisible" />
  </SamplePanel>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useExternalModal } from "@2kk/admin-vueuse";
import { InnerDialog } from "@/components/element-plus";

const { modalVisible, openModal } = useExternalModal()

</script>

<style lang="scss" scoped></style>