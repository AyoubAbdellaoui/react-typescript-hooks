import * as React from "react"

import { User } from "../_types"

import useAuthenticationService from "../_utils/AuthenticationService"
import { DEFAULT_USER } from "../_utils/Consts"
import { getStoredUser } from "../_utils/Helpers"

interface AuthContextInterface {
    auth: User;
    login: (user: User) => void;
    logout: () => void;
}

export const loginContext = React.createContext<AuthContextInterface>({
    auth: DEFAULT_USER,
    login: () => { },
    logout: () => { }
})

const { Provider } = loginContext;

const LoginProvider: React.FC<{ children: React.ReactNode }> = ({
    children
}) => {
    const { auth, login, logout } = useAuthenticationService(
        getStoredUser()
    )

    return (
        <Provider value={{ auth, login, logout }}>
            {children}
        </Provider>
    )
}

export default LoginProvider
