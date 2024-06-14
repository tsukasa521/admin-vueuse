<template>
  <section>
    <t-space>
      <t-button @click="openSuccess">打开成功状态提示语句</t-button>

      <t-button theme="warning" @click="openWarning">打开警告状态提示语句</t-button>

      <t-button theme="danger" @click="openError">打开错误状态提示语句</t-button>
    </t-space>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useMessage } from "@2kk/admin-vueuse-tdesign";

const { showSuccessMessage, showWarningMessage, showErrorMessage } = useMessage()

const openSuccess = () => {
  showSuccessMessage("提交成功")
}

const openWarning = () => {
  showWarningMessage("提示警告")
}

const openError = () => {
  showErrorMessage()
}
</script>

<style scoped>
section {
  margin: 20px;
  padding: 20px;
  background: white;
  min-height: calc(100vh - 80px - 20px);
}
</style>