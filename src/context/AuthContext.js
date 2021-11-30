import { createContext, useEffect, useReducer } from "react";
import { auth } from '../firebase/config';
import { onAuthStateChanged } from "firebase/auth";

// Exports the context object itself
export const AuthContext = createContext();

// A reducer function for handling different modifications to the same state
export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload }

    case 'LOGOUT':
      return { ...state, user: null }

    // Ran only once on initial render. Allows the auth status to be determined prior to rendering certain routes
    case 'AUTH_IS_READY':
      return { ...state, user: action.payload, authIsReady: true }

    default:
      return state;
  }
}

// ContextProvider component that wraps the application and affords access to global auth state and functions
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });

  useEffect(() => {
    // Unsub function used to ensure listeners are cancelled after initial run
    const unsub = onAuthStateChanged(auth, (user) => {
      dispatch({ type: 'AUTH_IS_READY', payload: user });
      unsub();
    })
  }, [])

  console.log('AuthContext state:', state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContext.Provider>
  );
}