import { ref } from 'vue'
export function useForm<TForm extends { [key: string]: any }, TFormRules extends { [key: string]: any }>(initFormValue: TForm, initFormRules: TFormRules) {
  const buttonLoading = ref(false)
  const refForm = ref(null)
  const formValue = ref<TForm>({ ...initFormValue })
  const formRules = ref<TFormRules>({ ...initFormRules })

  return { buttonLoading, formValue, formRules, refForm }
}