import { useContext } from "react";
import jwtDecode from 'jwt-decode'

import authStorage from '../auth/storage'
import AuthContext from "../auth/context";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken) => {
    const user = jwtDecode(authToken)
    setUser(user)
    authStorage.storeToken(authToken)
  }

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  }

  return { user, logOut, logIn };
};
