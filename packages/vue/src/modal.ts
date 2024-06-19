import { computed, ref, unref, toRaw, reactive, Ref } from 'vue'
import { useMessage as useVueMessage } from './message'

export const modalEmits = [
  'update:visible',
  'cancel',
  'resolve',
  'open',
  'closed'
]

export const modalProps = {
  visible: {
    type: Boolean,
    default: false,
    required: true
  }
}

export const modalAddUpdateProps = {
  source: Object
}

export interface ModalOptions {
  title?: string,
  idPropName?: string,
  dataSourcePropName?: string,
  isPreview?: boolean
}

export function useModal(props: any, emits: any) {
  const currentVisible = computed({
    get() {
      return props.visible
    },
    set(val) {
      emits('update:visible', val)
    }
  })

  const buttonLoading = ref(false)



  return { currentVisible, buttonLoading }
}

export function useExternalModal() {
  const modalVisible = ref(false)
  const modalSource = ref<any>(null)

  const openModal = (source: any) => {
    modalVisible.value = true
    modalSource.value = source
  }

  return { modalVisible, modalSource, openModal }
}

export function useAddUpdateModal(props: any, emits: any, options: ModalOptions) {

  const dataSourcePropName = ref(options.dataSourcePropName || 'source')
  const idPropName = ref(options.idPropName || 'id')

  const isAdd = computed(() => !dataSourcePropName.value || !props[dataSourcePropName.value]?.[idPropName.value])

  const isUpdate = computed(() => {
    return Boolean(
      props[dataSourcePropName.value] && props[dataSourcePropName.value][idPropName.value]
    )
  })

  const title = computed(() =>
    unref(isAdd) ? `新建${unref(options.title)}` : `修改${unref(options.title)}`
  )

  return { title, isAdd, isUpdate, isPreview: options.isPreview }
}

/**
 * todo 这个方法和控件库耦合严重，要移动控件库对应的包中
 * @param props 
 * @param emits 
 * @param currentVisible 
 * @param refForm 
 * @param title 
 * @param useMessage 
 * @returns 
 */
export function useSubmitFormModal(props: any, emits: any, currentVisible: Ref<boolean>, refForm: Ref<any>, title: Ref<string>, useMessage?: Function) {

  const { showSuccessMessage } = useMessage ? useMessage() : useVueMessage()
  const buttonLoading = ref(false)

  const submit = async (apiFn: (...p: any[]) => Promise<any>, ...args: any[]) => new Promise((resolve, reject) => {
    refForm.value?.validate((valid: boolean) => {
      if (!valid) {
        reject(valid)
        return
      }

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
