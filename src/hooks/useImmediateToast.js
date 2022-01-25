// Simple abstraction of code snippets that show success or error toasts when called

export const useImmediateToast = (setToastFunc, type, message) => {
  const showSuccessToast = (setToastFunc, message) => {
    setToastFunc((prevData) => ({
      ...prevData,
      visible: true,
      type: 'success',
      message: message,
    }));
  };

  const showErrorToast = (setToastFunc, message) => {
    setToastFunc((prevData) => ({
      ...prevData,
      visible: true,
      type: 'error',
      message: message,
    }));
  }

  return { showSuccessToast, showErrorToast }
}
