<template>
  <div class="page-container">
    <div>
      <h1>
        useVisible
      </h1>
      <p class="text-sm text-secondary mt-4">
        XXX
      </p>
    </div>

    <SamplePanel title="基础用法" description="当子元素中包含时，全部子元素会水平排列，否则会垂直排列。">
      <p class="bg-base py-2 px-5 cursor-pointer w-32" @click="open">点击打开</p>
      <br />
      <br />
      <Dialog v-model:visible="visible" />
    </SamplePanel>
  </div>
</template>

<script setup lang="ts">
import { useExternalVisible } from "@2kk/admin-vueuse";
import { Dialog } from "./components";

const { visible, open, close } = useExternalVisible();

</script>

<style lang="scss" scoped></style>