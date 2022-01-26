// Non-specific error handling for any relevant forms submitting auth data. Uses firebase known errors.
export const useErrorHandling = () => {
  const handleSettingsError = (errorCode, alertSetFunc) => {
    switch (errorCode) {
      case 'auth/wrong-password':
        alertSetFunc({
          message: "That's an incorrect password. Try again.",
          type: 'error',
        });
        break;
      case 'auth/missing-email':
        alertSetFunc({
          message: "Please enter an email address.",
          type: 'error',
        });
        break;
      case 'auth/weak-password':
        alertSetFunc({
          message: "Please create a password at least six characters in length. ",
          type: 'error',
        });
        break;
      case 'auth/user-not-found':
        alertSetFunc({
          message: "We couldn't find an account with that email address. Check for typos and try again.",
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

  const handleLoginSignupError = (errorCode, setError) => {
    switch (errorCode) {
      case 'auth/invalid-email':
        setError('Please enter a valid email address.')
        break;
      case 'auth/wrong-password':
        setError("That's an incorrect password. Try again.")
        break;
      case 'auth/user-not-found':
        setError("We couldn't find an account with that email address. Check for typos and try again.")
        break;
      case 'auth/too-many-requests':
        setError('Failed to login too many times. Please wait a few minutes before trying again.')
        break;
      case 'auth/network-request-failed':
        setError("We couldn't connect to the network. Please check your internet connection and try again.")
        break;
      case 'auth/email-already-in-use':
        setError('This email is already in use. Try another.')
        break;
      case 'auth/weak-password':
        setError('Please create a password at least six characters in length.')
        break;
      default:
        setError('An unknown server error occured. Please try again.')
        break;
    }
  }

  return { handleSettingsError, handleLoginSignupError };
};