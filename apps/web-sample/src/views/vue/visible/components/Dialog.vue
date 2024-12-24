<template>
  <div v-if="currentVisible" class="border border-solid rounded-xl p-5">
    <div>这是一段内容</div>
    <div>
      <p class="bg-base py-2 px-5 cursor-pointer" @click="closed">关闭</p>
      <p class="bg-base py-2 px-5 cursor-pointer">确定</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useVisible, VisibleEmits, visibleProps } from '@2kk/admin-vueuse';

const props = defineProps({
  ...visibleProps
});

const emits = defineEmits<VisibleEmits>()

const { currentVisible, closed } = useVisible(props, emits);
</script>

<style lang="scss" scoped></style>