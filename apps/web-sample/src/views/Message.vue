<template>
  <div class="page-container">
    <div>
      <h1>
        useMessage
      </h1>
      <p class="text-sm text-secondary mt-4">
        useMessage主要用于提示场景。基础包中的useMessage与控件库解耦，所以不会有具体的UI体现，仅会在浏览器控制台里看到。
      </p>
    </div>

    <SamplePanel title="基础用法">
      <t-space>
        <p class="bg-base py-2 px-5 cursor-pointer" @click="openSuccess">打开成功状态提示语句</p>

        <p class="bg-base py-2 px-5 cursor-pointer" @click="openWarning">打开警告状态提示语句</p>

        <p class="bg-base py-2 px-5 cursor-pointer" @click="openError">打开错误状态提示语句</p>
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