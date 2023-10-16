<template>
  <t-layout>
    <t-aside>
      <t-menu theme="light" v-model="activeMenu" @change="navigate">
        <template #logo>
          <img width="136" class="logo" src="https://www.tencent.com/img/index/menu_logo_hover.png" alt="logo" />
        </template>
        <t-menu-item value="table">
          useTable示例
        </t-menu-item>
        <t-menu-item value="dialog">
          useDialog示例
        </t-menu-item>
        <t-menu-item value="notification">
          useNotification示例
        </t-menu-item>
      </t-menu>
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
import { useRouter } from "vue-router";
import { routes } from "./router";
import { MenuValue } from "tdesign-vue-next";

const activeMenu = ref('table')

const router = useRouter()

const navigate = (value: MenuValue) => {
  router.push({ path: value.toString() })
}
</script>

<style scoped></style>