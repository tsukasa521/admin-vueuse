<template>
  <section>
    <t-button @click="handleClick">打开成功状态提示语句</t-button>

  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useNotification } from "@2kk/admin-vueuse";

const { showSuccessMessage } = useNotification()

const handleClick = () => {
  showSuccessMessage("提交成功")
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