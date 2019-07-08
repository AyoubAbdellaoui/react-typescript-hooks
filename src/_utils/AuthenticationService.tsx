import React from "react"
import { User } from "../_types"
import { DEFAULT_USER } from "./Consts"

const useAuthenticationService = (initialState: User) => {
  const [auth, setAuth] = React.useState(initialState)

  const login = (user: User) => {
    window.localStorage.setItem("User", JSON.stringify(user))
    setAuth(user)
  };

  const logout = () => {
    window.localStorage.clear()
    setAuth(DEFAULT_USER)
  };

  return {
    auth,
    login,
    logout
  };
};

export default useAuthenticationService
