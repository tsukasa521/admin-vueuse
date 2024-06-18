<template>
  <t-dialog v-model:visible="currentVisible" :header="title" :on-confirm="() => (currentVisible = false)">
    <div>我是内容</div>
    <div>我是内容</div>
  </t-dialog>
</template>

<script setup lang="ts">
import { } from "vue";
import { modalProps, modalEmits, modalAddUpdateProps, useModal, useAddUpdateModal } from "@2kk/admin-vueuse";

const props = defineProps({ ...modalProps, ...modalAddUpdateProps })

const emits = defineEmits([...modalEmits])

const { currentVisible } = useModal(props, emits)

const { title } = useAddUpdateModal(props, emits, { title: '用户' })
</script>

<style scoped></style>