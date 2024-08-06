<template>
  <div class="page-container">
    <div>
      <h1>
        useForm
      </h1>
      <p class="text-sm text-secondary mt-4">
        useTable应用于常见的列表页场景，包括分页、搜索等。基础包中的useTable采用纯ts实现与控件库解耦，可灵活的应用于各种控件库。
      </p>
    </div>

    <SamplePanel title="基础用法" description="当子元素中包含时，全部子元素会水平排列，否则会垂直排列。">
      <form class="flex flex-col gap-4" ref="refForm" :loading="buttonLoading">
        <div class="flex gap-2">
          <label>姓名</label>
          <input v-model="formValue.name" type="text" class="border border-solid px-2" />
        </div>
        <div class="flex gap-2">
          <label>年龄</label>
          <input v-model="formValue.age" type="text" class="border border-solid px-2" />
        </div>
      </form>
    </SamplePanel>
  </div>
</template>

<script setup>
import { useForm } from "@2kk/admin-vueuse";

const { formValue, formRules, refForm, buttonLoading } = useForm({ name: '', age: '' }, {
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
  ],
  age: [
    { required: true, message: '请输入年龄', trigger: 'blur' },
    { type: 'number', message: '年龄必须为数字值', trigger: 'blur' }
  ]
})

</script>

<style lang="scss" scoped></style>