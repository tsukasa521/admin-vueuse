<template>
  <t-layout>
    <t-aside>
      <Menu />
    </t-aside>
    <t-layout>
      <t-content style="background: white;">
        <RouterView />
      </t-content>
    </t-layout>
  </t-layout>
</template>

<script setup>
import Menu from "./components/Menu.vue";
</script>

<style lang="scss" scoped>
</style>