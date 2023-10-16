import { computed, ref, unref, toRaw, reactive, Ref } from 'vue'
import { useNotification } from './notification'

export const dialogEmit = [
  'update:visible',
  'cancel',
  'resolve',
  'open',
  'closed'
]

export const dialogProps = {
  visible: {
    type: Boolean,
    default: false,
    required: true
  }
}

export const dialogAddUpdateProps = {
  source: Object
}

type DialogOptions = {
  title: string,
  refForm: any,
  idPropName: string,
  dataSourcePropName: string
}

export function useDialog(props: any, emits: any) {
  const currentVisible = computed({
    get() {
      return props.visible
    },
    set(val) {
      emits('update:visible', val)
    }
  })

  return { currentVisible }
}

export function useAddUpdateDialog(props: any, emits: any, options: DialogOptions) {
  const optionsCore = reactive({
    title: options.title || '',
    idPropName: options.idPropName || 'id',
    dataSourcePropName: options.dataSourcePropName || 'source'
  })

  const isAdd = computed(() => !props[optionsCore.dataSourcePropName] || !props[optionsCore.dataSourcePropName]?.[optionsCore.idPropName])

  const isUpdate = computed(() => {
    return Boolean(
      props[optionsCore.dataSourcePropName] && props[optionsCore.dataSourcePropName][optionsCore.idPropName]
    )
  })

  const title = computed(() =>
    unref(isAdd) ? `新建${unref(optionsCore.title)}` : `修改${unref(optionsCore.title)}`
  )

  return { title, isAdd, isUpdate }
}

export function useSubmitDialog(props: any, emits: any, currentVisible: Ref<boolean>, title: Ref<string>, refForm: Ref<any>) {

  const { showSuccessMessage } = useNotification()
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

export function useDialogOutside() {
  const dialogVisible = ref(false)
  const dialogSource = ref(null)

  const openDialog = function <T extends null>(row: T) {
    dialogVisible.value = true
    dialogSource.value = row
  }

  return { dialogVisible, dialogSource, openDialog }
}
