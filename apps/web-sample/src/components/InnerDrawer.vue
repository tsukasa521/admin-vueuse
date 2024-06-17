<template>
  <t-drawer v-model:visible="currentVisible" header="普通抽屉" :on-confirm="() => (currentVisible = false)"
    :close-btn="true">
    <div>我是内容</div>
    <div>我是内容</div>
  </t-drawer>
</template>

<script setup lang="ts">
import { modalProps, modalEmits, modalAddUpdateProps, useModal } from "@2kk/admin-vueuse";

const props = defineProps({ ...modalProps, ...modalAddUpdateProps })

const emits = defineEmits([...modalEmits])

const { currentVisible } = useModal(props, emits)
</script>

<style scoped></style>