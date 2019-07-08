import * as validator from "validator"
import { User } from "../_types"
import { DEFAULT_USER } from "./Consts"

export const apiRequest = async (
  url: string,
  method: string,
  bodyParams?: { email: string; password: string }
): Promise<any> => {
  const response = await fetch(url, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: bodyParams ? JSON.stringify(bodyParams) : undefined
  })

  return await response.json()
}

export const getStoredUser = (): User => {
  const auth = window.localStorage.getItem("User")
  if (auth) {
    return JSON.parse(auth)
  }
  return DEFAULT_USER
}

export const validateLoginForm = (
  email: string,
  password: string,
  setError: (error: string | null) => void
): boolean => {
  if (!email || !password) {
    setError("Veuillez saisir un email et un mot de passe valides.")
    return false
  }

  if (!validator.isEmail(email)) {
    setError("SVP, mettez une adresse email valide.")
    return false
  }

  return true
}