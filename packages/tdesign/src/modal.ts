import { computed, ref, unref, toRaw, reactive, Ref } from 'vue'
import { useMessage as useTdesignMessage } from './message'

export function useSubmitFormModal(props: any, emits: any, currentVisible: Ref<boolean>, refForm: Ref<any>, title: Ref<string>, useMessage?: Function) {

  const { showSuccessMessage } = useMessage ? useMessage() : useTdesignMessage()
  const buttonLoading = ref(false)

  const submit = async (apiFn: (...p: any[]) => Promise<any>, ...args: any[]) => new Promise(async (resolve, reject) => {
    const validateResult = await refForm.value?.validate()

    if (validateResult !== true) return

    buttonLoading.value = true
    const argumentList = args.map(p => toRaw(unref(p)))

    unref(apiFn)(...argumentList)
      .then((res) => {
        showSuccessMessage(`${title.value}成功`)
        currentVisible.value = false
        emits('resolve')
        resolve(res)
      })
      .catch((error) => {
        reject(error)
      })
      .finally(() => {
        buttonLoading.value = false
      })
  })

  const reset = () => {
    refForm.value?.reset()
  }

  const closed = () => {
    reset()
    currentVisible.value = false
  }

  return { closed, submit, reset, buttonLoading }
}
