<template>
  <el-dialog v-model="currentVisible" title="普通对话框">
    <div>我是内容</div>
    <div>我是内容</div>
  </el-dialog>
</template>

<script setup lang="ts">
import { } from "vue";
import { modalProps, modalEmits, modalAddUpdateProps, useModal } from "@2kk/admin-vueuse";

const props = defineProps({ ...modalProps, ...modalAddUpdateProps })

const emits = defineEmits([...modalEmits])

const { currentVisible } = useModal(props, emits)
</script>

<style scoped></style>