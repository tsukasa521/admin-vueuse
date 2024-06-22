<template>
  <el-dialog v-model="currentVisible" :title="title">
    <div v-if="isAdd">这里显示的是新增时的内容</div>
    <div v-else-if="isUpdate">这里显示的是修改时的内容</div>
  </el-dialog>
</template>

<script setup lang="ts">
import { } from "vue";
import { modalProps, modalEmits, modalAddUpdateProps, useModal, useAddUpdateModal } from "@2kk/admin-vueuse";

const props = defineProps({ ...modalProps, ...modalAddUpdateProps })

const emits = defineEmits([...modalEmits])

const { currentVisible } = useModal(props, emits)

const { title, isAdd, isUpdate } = useAddUpdateModal(props, emits, { title: '用户' })
</script>

<style scoped></style>