import { auth } from '../firebase/config'
import { signOut } from 'firebase/auth';
import { useAuthContext } from '../hooks/useAuthContext';

// A custom hook to sign the user out, and update the global context. Also provides errors than can be displayed to the UI via another component, or perhaps toast notification
export const useLogout = () => {
  // Desstrucure the dispatch function from the context object, to allow us to call certain useReducer methods, in this case LOGOUT
  const { dispatch } = useAuthContext();

  // A function that is returned from the hook so that it may be called directly by destructuring from the hook in other comopnents
  const logout = () => {
    // Firebase function is called first, then on resolution of the promise, update the user/context state
    signOut(auth)
      .then(() => {
        dispatch({ type: 'LOGOUT' });
      })
      .catch((err) => {
        console.log(err.message);
      })
  }
  return { logout }
}
