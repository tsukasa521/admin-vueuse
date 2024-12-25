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
      <Dialog v-model:visible="visible" @resolve="resolve" />
    </SamplePanel>

    <SamplePanel title="新增/修改场景" description="当子元素中包含时，全部子元素会水平排列，否则会垂直排列。">
      <p class="bg-base py-2 px-5 cursor-pointer w-32" @click="openAddUpdateDialogWrapper">点击打开</p>
      <br />
      <br />
      <AddUpdateDialog v-model:visible="addUpdateDialogVisible" :dataSource="addUpdateDataSource" @resolve="resolve" />
    </SamplePanel>
  </div>
</template>

<script setup lang="ts">
import { useExternalVisible } from "@2kk/admin-vueuse";
import { Dialog, AddUpdateDialog } from "./components";

type User = {
  id: string,
  name: string,
  age: number
}

const { visible, open, close } = useExternalVisible();

const { visible: addUpdateDialogVisible, open: openAddUpdateDialog, dataSource: addUpdateDataSource } = useExternalVisible<User>();

const openAddUpdateDialogWrapper = () => {
  addUpdateDataSource.value = {
    id: '1',
    name: 'kk',
    age: 18
  }
  openAddUpdateDialog()
}

const resolve = () => {
  alert('点击了确定')
  close()
}
</script>

<style lang="scss" scoped></style>