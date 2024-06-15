<template>
  <section>
    <header>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </header>
    <main>
      <div class="aaa">
        <div class="bbb">
          <slot />
        </div>
        <div style="display: flex;justify-content: end;align-items: center; padding: 8px;">
          <t-icon name="code" size="16" />
        </div>
      </div>
      <!-- <pre>
        <code>
          <p>code</p>
        </code>
      </pre> -->
    </main>
    <footer></footer>
  </section>
</template>

<script setup lang="ts">

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
h3 {
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  margin: 48px 0 8px;
  display: flex;
  align-items: center;
}

p {
  font-size: 14px;
  line-height: 22px;
  color: #333333;
}

main {
  margin: 24px 0px 48px;
}

.aaa {
  border: 1px solid #e6e6e6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: auto;
}

.bbb {
  min-height: 204px;
  padding: 40px;
}

pre {
  margin: 0px;
  padding: 20px 24px 36px;
  max-height: 560px;
  box-sizing: border-box;
  overflow: auto;
  background: #f3f3f3
}
</style>