// Non-specific error handling for any relevant forms submitting auth data. Uses firebase known errors.
export const useErrorHandling = () => {
  const handleErrorCode = (errorCode, alertSetFunc) => {
    switch (errorCode) {
      case 'auth/wrong-password':
        alertSetFunc({
          message: "That's an incorrect password. Try again.",
          type: 'error',
        });
        break;
      case 'auth/weak-password':
        alertSetFunc({
          message: "Please create a password at least six characters in length. ",
          type: 'error',
        });
        break;
      case 'auth/invalid-email':
        alertSetFunc({
          message: "Please enter a valid email address.",
          type: 'error',
        });
        break;
      case 'auth/too-many-requests':
        alertSetFunc({
          message: 'Failed to authorise too many times. Please wait a few minutes before trying again.',
          type: 'error',
        });
        break;
      case 'auth/network-request-failed':
        alertSetFunc({
          message: "We couldn't connect to the network. Please check your internet connection and try again.",
          type: 'error',
        });
        break;
      default:
        alertSetFunc({
          message: 'An unknown server error occured. Please try again.',
          type: 'error',
        });
        break;
    }
  }

  return { handleErrorCode };
};