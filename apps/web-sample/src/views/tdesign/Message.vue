<template>
  <div class="page-container">
    <div>
      <h1>
        useMessage
      </h1>
      <p class="text-sm text-secondary mt-4">
        useMessage主要用于提示场景。tdesign包中的useMessage与tdesign控件库解耦，会直接使用message组件来提示消息。
      </p>
    </div>
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

<style lang="scss" scoped>
</style>