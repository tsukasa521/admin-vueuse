import { ElMessage } from "element-plus";

export function useMessage() {
  const showSuccessMessage = <T>(content: string = "操作成功", duration?: number, options?: T): void => {
    ElMessage.success(content);
  }

  const showWarningMessage = <T>(content: string, duration?: number, options?: T): void => {
    ElMessage.warning(content);
  }

  const showErrorMessage = <T>(content: string = "操作失败", duration?: number, options?: T): void => {
    ElMessage.error(content);
  }

  return { showSuccessMessage, showWarningMessage, showErrorMessage }
}
