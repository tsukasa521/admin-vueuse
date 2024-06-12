<template>
  <section>
    <t-button @click="openModal">打开Dialog</t-button>

    <InnerDialog v-model:visible="modalVisible" />
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useExternalModal } from "@2kk/admin-vueuse";
import InnerDialog from "@/components/InnerDialog.vue";

const { modalVisible, openModal } = useExternalModal()

</script>

<style lang="scss" scoped>
section {
  margin: 20px;
  padding: 20px;
  background: white;
  min-height: calc(100vh - 80px - 20px);
}

p {
  color: var(--td-brand-color-7);
}
</style>