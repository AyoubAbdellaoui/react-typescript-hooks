import React, { useContext } from "react"

import { loginContext } from "../_contexts/LoginContext"
import { Container } from "../_styles"

import Login from "../Login"
import Profile from "../Profile"

function Layout() {
    const { auth } = useContext(loginContext);
    return (
        <Container>
            {auth.id ? <Profile /> : null}
            {!auth.id && <Login />}
        </Container>
    );
}

export default Layout
