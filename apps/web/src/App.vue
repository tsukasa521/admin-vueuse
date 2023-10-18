<template>
  <t-layout>
    <t-aside>
      <Menu />
    </t-aside>
    <t-layout>
      <t-content>
        <RouterView />
      </t-content>
    </t-layout>
  </t-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Menu from "./components/Menu.vue";
</script>

<style lang="scss" scoped>
</style>
