<template>
  <SamplePanel title="提交表单弹出框" description="当子元素中包含时，全部子元素会水平排列，否则会垂直排列。">
    <t-button @click="openModal">打开Dialog</t-button>
    <FormDialog v-model:visible="modalVisible" />
  </SamplePanel>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useExternalModal } from "@2kk/admin-vueuse";
import SamplePanel from "@/components/SamplePanel.vue";
import FormDialog from "@/components/FormDialog.vue"

const { modalVisible, openModal } = useExternalModal()

</script>

<style lang="scss" scoped></style>