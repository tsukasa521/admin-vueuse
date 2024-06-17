<template>
  <SamplePanel title="自定义传入参数" description="当子元素中包含时，全部子元素会水平排列，否则会垂直排列。">
    <t-button @click="openModal">打开Dialog</t-button>
    <InnerDialog v-model:visible="modalVisible" />
  </SamplePanel>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useExternalModal } from "@2kk/admin-vueuse";
import SamplePanel from "@/components/SamplePanel.vue";
import InnerDialog from "@/components/InnerDialog.vue";

const { modalVisible, openModal } = useExternalModal()

</script>

<style lang="scss" scoped></style>