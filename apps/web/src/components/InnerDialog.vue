<template>
  <t-dialog v-model:visible="currentVisible" header="普通对话框" :on-confirm="() => (currentVisible = false)">
    <div>我是内容</div>
    <div>我是内容</div>
  </t-dialog>
</template>

<script setup lang="ts">
import { } from "vue";
import { dialogProps, dialogEmit, dialogAddUpdateProps, useDialog } from "@2kk/admin-vueuse";

const props = defineProps({ ...dialogProps, ...dialogAddUpdateProps })

const emits = defineEmits([...dialogEmit])

const { currentVisible } = useDialog(props, emits)
</script>

<style scoped></style>