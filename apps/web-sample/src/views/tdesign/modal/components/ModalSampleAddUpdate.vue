<template>
  <SamplePanel title="新增、修改弹出框" description="当子元素中包含时，全部子元素会水平排列，否则会垂直排列。">
    <t-space>
      <t-button @click="openModal(null)">打开新增Dialog</t-button>
      <t-button @click="openModal({ id: 1, name: '张三', age: 18 })">打开修改Dialog</t-button>
    </t-space>
    <AddUpdateDialog v-model:visible="modalVisible" :source="modalSource"/>
  </SamplePanel>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useExternalModal } from "@2kk/admin-vueuse";
import SamplePanel from "@/components/SamplePanel.vue";
import AddUpdateDialog from "@/components/AddUpdateDialog.vue";

const { modalVisible, modalSource, openModal } = useExternalModal()

</script>

<style lang="scss" scoped></style>