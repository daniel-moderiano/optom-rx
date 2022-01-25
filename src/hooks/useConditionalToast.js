// Replacing useEffect hooks that exist to show error toasts
import { useEffect } from "react";

export const useConditionalToast = (error, setToastFunc, message) => {
  // 'Listen' for an error, and respond with toast
  useEffect(() => {
    if (error) {
      setToastFunc((prevData) => ({
        ...prevData,
        visible: true,
        type: 'error',
        message: message,
      }));
    }
  }, [error, setToastFunc, message]);
}
