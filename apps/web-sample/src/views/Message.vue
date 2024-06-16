<template>
  <div class="page-container">
    <h1>
      useModal
    </h1>
    <SamplePanel title="基础用法" description="当子元素中包含时，全部子元素会水平排列，否则会垂直排列。">

      <t-space>
        <t-button @click="openSuccess">打开成功状态提示语句</t-button>

        <t-button theme="warning" @click="openWarning">打开警告状态提示语句</t-button>

        <t-button theme="danger" @click="openError">打开错误状态提示语句</t-button>
      </t-space>
    </SamplePanel>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useMessage } from "@2kk/admin-vueuse";
import SamplePanel from "@/components/SamplePanel.vue";

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

<style lang="scss" scoped></style>