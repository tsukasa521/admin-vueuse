import { MessageInfoOptions, MessagePlugin } from 'tdesign-vue-next'

export function useNotification() {
  const showSuccessMessage = (message: string | MessageInfoOptions, duration?: number) => {
    const msg = message || '操作成功'
    return MessagePlugin.success(msg, duration)
  }

  return { showSuccessMessage }
}
