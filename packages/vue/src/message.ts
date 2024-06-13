export function useMessage() {
  const showSuccessMessage = <T>(content: string = "操作成功", duration?: number, options?: T): void => {
    return console.log(content)
  }

  const showWarningMessage = <T>(content: string, duration?: number, options?: T): void => {
    return console.warn(content)
  }

  const showErrorMessage = <T>(content: string = "操作失败", duration?: number, options?: T): void => {
    return console.error(content)
  }

  return { showSuccessMessage, showWarningMessage, showErrorMessage }
}
