<template>
  <t-menu theme="light" v-model="activeMenu" @change="navigate">
    <template #logo>
      <p>Admin Vueuse</p>
    </template>
    <t-menu-item v-for="l in list" :value="l.path">
      {{ l.title }}
    </t-menu-item>
  </t-menu>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { routes } from "../router";
import { MenuValue } from "tdesign-vue-next";

const activeMenu = ref('/table')

const router = useRouter()

const list = computed(() => {
  return routes.map(p => {
    return { title: p.meta?.title, path: p.path }
  })
})

const navigate = (value: MenuValue) => {
  router.push({ path: value.toString() })
}
</script>

<style scoped>
p {
  font-size: 20px;
  font-weight: 700;
  color: var(--td-brand-color-7);
}
</style>