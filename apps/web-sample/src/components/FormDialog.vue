<template>
  <t-dialog v-model:visible="currentVisible" :header="title" @closed="closed" @confirm="resolve">
    <t-form ref="refForm" :data="formData" :rules="formRules" colon>
      <t-form-item label="姓名" name="name">
        <t-input v-model="formData.name" placeholder="请输入内容" />
      </t-form-item>
      <t-form-item label="手机号码" name="tel">
        <t-input v-model="formData.tel" placeholder="请输入内容" />
      </t-form-item>
    </t-form>
  </t-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { modalProps, modalEmits, modalAddUpdateProps, useModal, useAddUpdateModal } from "@2kk/admin-vueuse";
import { useSubmitFormModal } from "@2kk/admin-vueuse-tdesign";
import { submitForm } from "@/apis";

const props = defineProps({ ...modalProps, ...modalAddUpdateProps })

const emits = defineEmits([...modalEmits])

const { currentVisible } = useModal(props, emits)

const { title } = useAddUpdateModal(props, emits, { title: '用户' })

const refForm = ref(null)
const formData = ref({
  name: '',
  tel: ''
})
const formRules = ref({ name: [{ required: true, message: '姓名必填' }] });
const { buttonLoading, submit, reset, closed } = useSubmitFormModal(props, emits, currentVisible, refForm, title)

const resolve = async () => {
  console.log(refForm.value);
  await submit(submitForm, formData.value)
}
</script>

<style scoped></style>