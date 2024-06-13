import { MessagePlugin } from "tdesign-vue-next";

export function useMessage() {
  const showSuccessMessage = <T>(content: string = "操作成功", duration?: number, options?: T): void => {
    MessagePlugin.success(content, duration);
  }

  const showWarningMessage = <T>(content: string, duration?: number, options?: T): void => {
    MessagePlugin.warning(content, duration);
  }

  const showErrorMessage = <T>(content: string = "操作失败", duration?: number, options?: T): void => {
    MessagePlugin.error(content, duration);
  }

  return { showSuccessMessage, showWarningMessage, showErrorMessage }
}
