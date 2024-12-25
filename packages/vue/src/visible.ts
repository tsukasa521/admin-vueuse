import { computed, ref, unref } from 'vue'

export interface VisibleEmits {
  (event: 'update:visible', value: any): void
  (event: 'open', ...args: any[]): void
  (event: 'closed', ...args: any[]): void
  (event: 'cancel', ...args: any[]): void
  (event: 'confirm', ...args: any[]): void
  (event: 'resolve', ...args: any[]): void
}

export interface VisibleOptions {
  title?: string,
  idPropName?: string,
  dataSourcePropName?: string,
}

export const visibleProps = {
  visible: {
    type: Boolean,
    default: false,
    required: true
  }
}

export const visibleEmits = [
  'update:visible',
  'open',
  'closed',
  'cancel',
  'confirm',
  'resolve'
]

export const dataSourceVisibleProps = {
  dataSource: {
    type: Object as any
  }
}

export interface VisibleOptions {
  title?: string,
  idPropName?: string,
  dataSourcePropName?: string
}

export function useVisible(props: any, emits: VisibleEmits & unknown) {
  const currentVisible = computed({
    get() {
      return props.visible
    },
    set(val) {
      emits('update:visible', val)
    }
  })

  const closed = () => {
    emits('closed')
    currentVisible.value = false
  }

  return { currentVisible, closed }
}

export function useExternalVisible<TDataSource = any>() {
  const visible = ref(false)
  const dataSource = ref<TDataSource>()

  const open = () => {
    visible.value = true
  }

  const close = () => {
    visible.value = false
  }

  return { visible, dataSource, open, close }
}

export function useAddUpdateVisible(props: any, emits: VisibleEmits & unknown, options: VisibleOptions) {
  const idPropName = ref(options.idPropName || 'id')
  const dataSourcePropName = ref(options.dataSourcePropName || 'dataSource')

  const isAdd = computed(() => !dataSourcePropName.value || !props[dataSourcePropName.value]?.[idPropName.value])

  const isUpdate = computed(() => {
    return Boolean(
      props[dataSourcePropName.value] && props[dataSourcePropName.value][idPropName.value]
    )
  })

  const title = computed(() =>
    unref(isAdd) ? `新建${unref(options.title)}` : `修改${unref(options.title)}`
  )

  return { title, isAdd, isUpdate }
}
