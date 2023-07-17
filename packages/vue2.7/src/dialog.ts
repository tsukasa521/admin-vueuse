import { computed, ref, unref, toRaw, reactive } from 'vue'
import { Message } from 'element-ui'

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

export const dialogMoProps = {
  source: Object
}

type DialogOptions = {
  title: string,
  refForm: any,
  idPropName: string,
  dataSourcePropName: string
}

export function useDialog(props: any, emits: any, options: DialogOptions) {
  const optionsCore = reactive({
    title: options.title || '',
    idPropName: options.idPropName || 'id',
    dataSourcePropName: options.dataSourcePropName || 'source'
  })

  const currentVisible = computed({
    get() {
      return props.visible
    },
    set(val) {
      emits('update:visible', val)
    }
  })

  const buttonLoading = ref(false)

  const closed = () => {
    reset()
    currentVisible.value = false
  }

  const isAdd = computed(() => !props[optionsCore.dataSourcePropName] || !props[optionsCore.dataSourcePropName]?.[optionsCore.idPropName])

  const isUpdate = computed(() => {
    return Boolean(
      props[optionsCore.dataSourcePropName] && props[optionsCore.dataSourcePropName][optionsCore.idPropName]
    )
  })

  const titleText = computed(() =>
    unref(isAdd) ? `新建${unref(optionsCore.title)}` : `修改${unref(optionsCore.title)}`
  )

  const submit = async (apiFn: (...p: any[]) => Promise<any>, ...args: any[]) => new Promise((resolve, reject) => {
    options.refForm?.validate((valid: boolean) => {
      if (!valid) {
        reject(valid)
        return
      }

      buttonLoading.value = true
      const argumentList = args.map(p => toRaw(unref(p)))
      unref(apiFn)(...argumentList)
        .then((res) => {
          Message.success(`${titleText.value}成功`)
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
    options.refForm?.value?.resetFields()
  }

  return { currentVisible, closed, titleText, isAdd, isUpdate, buttonLoading, submit, reset }
}

/**
 * 不在dialog使用的hooks,主要用于打开dialog
 * @returns
 */
export function useDialogOutside() {
  const dialogVisible = ref(false)
  const dialogSource = ref(null)
  return { dialogVisible, dialogSource }
}
