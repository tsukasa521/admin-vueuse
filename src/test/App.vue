<template>
  <div>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { routes } from "./router";

const router = useRouter()

const navigate = (path: string) => {
  router.push({ path })
}
</script>

<style scoped></style>