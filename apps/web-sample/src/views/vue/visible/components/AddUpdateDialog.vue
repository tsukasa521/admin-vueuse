<template>
  <div v-if="currentVisible" class="border border-solid rounded-xl p-5">
    <div>{{ title }}</div>
    <div>姓名：{{ props.dataSource.name }}</div>
    <div>年龄：{{ props.dataSource.age }}</div>
    <div>
      <p class="bg-base py-2 px-5 cursor-pointer" @click="closed">关闭</p>
      <p class="bg-base py-2 px-5 cursor-pointer" @click="resolve">确定</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { dataSourceVisibleProps, useAddUpdateVisible, useVisible, VisibleEmits, visibleProps, } from '@2kk/admin-vueuse';

const props = defineProps({
  ...visibleProps,
  ...dataSourceVisibleProps
});

const emits = defineEmits<VisibleEmits>()

const { currentVisible, closed } = useVisible(props, emits)
const { title, isAdd, isUpdate } = useAddUpdateVisible(props, emits, { title: '用户' })

const resolve = () => {
  emits('resolve')
}
</script>

<style lang="scss" scoped></style>