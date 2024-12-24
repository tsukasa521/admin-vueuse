import { computed, ref } from 'vue'

export interface VisibleEmits {
  (event: 'update:visible', value: any): void
  (event: 'open', ...args: any[]): void
  (event: 'closed', ...args: any[]): void
  (event: 'confirm', ...args: any[]): void
  (event: 'cancel', ...args: any[]): void
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
  'confirm',
  'cancel'
]

export const addUpdateVisibleProps = {
  dataSource: Object
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

export function useExternalVisible<TDataSource extends any>() {
  const visible = ref(false)
  const dataSource = ref<TDataSource>()

  const open = () => {
    visible.value = true
  }

  const openWithDataSource = (source: TDataSource) => {
    visible.value = true
    dataSource.value = source
  }

  const close = () => {
    visible.value = false
  }

  return { visible, dataSource, open, openWithDataSource, close }
}
