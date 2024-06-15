<template>
  <section>
    <header>
      <h3>基础用法</h3>
      <p>当子元素中包含时，全部子元素会水平排列，否则会垂直排列。</p>
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

main {}

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