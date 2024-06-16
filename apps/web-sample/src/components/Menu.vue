<template>
  <t-menu theme="light" v-model="activeMenu" @change="navigate">
    <template #logo>
      <p>Admin Vueuse</p>
    </template>

    <template v-for="menu in list">
      <t-menu-group v-if="menu.isModule" :title="menu.name">
        <t-menu-item v-for="m in menu.children" :value="m.path">
          {{ m.title }}
        </t-menu-item>
      </t-menu-group>
      <t-menu-item v-else v-for="l in list" :value="l.path">
        {{ l.title }}
      </t-menu-item>
    </template>

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
  const initValue: any = {}
  const a = routes.reduce((pre, cur) => {

    const module: string = cur.meta?.module as string
    if (module) {
      if (!pre[module]) {
        pre[module] = { name: module, isModule: true, children: [] };
      }
      pre[module].children.push({ title: cur.meta?.title, path: cur.path })
    } else {
      if (!cur.meta?.hidden) {
        pre.push({ title: cur.meta?.title, path: cur.path })
      }
    }
    return pre
  }, initValue)

  console.log(a);

  return a;
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