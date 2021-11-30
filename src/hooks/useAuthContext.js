import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

// A simple 'container' type hook that returns the same context object as calling useContext directly, but also provides an error check in case this contextis adjusted to surround certain comoponent trees only
export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error('useAuthContext must be inside and AuthContextProvider');
  }

  return context;
}