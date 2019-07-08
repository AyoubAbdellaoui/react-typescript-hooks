import React, { useState, useContext } from "react"
import { Button, Form, FormGroup, Input } from "reactstrap"

import ErrorMessage from "../_components/ErrorContainer"
import useErrorHandler from "../_utils/ErrorHandler"
import { loginContext } from "../_contexts/LoginContext"
import { apiRequest, validateLoginForm } from "../_utils/Helpers"
import { Header } from "../_styles"

function Login() {
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const auth = useContext(loginContext)
  const { error, showError } = useErrorHandler(null)

  const authHandler = async () => {
    try {
      setLoading(true);
      const userData = await apiRequest(
        "https://jsonplaceholder.typicode.com/users",
        "post",
        { email: userEmail, password: userPassword }
      )
      const { id, email } = userData
      auth.login({ id, email })
    } catch (err) {
      setLoading(false)
      showError(err.message)
    }
  };

  return (
    <Form
      onSubmit={e => {
        e.preventDefault()
        if (validateLoginForm(userEmail, userPassword, showError)) {
          authHandler()
        }
      }}
    >
      <Header> Connecter-vous à votre compte</Header>
      <br />
      <FormGroup>
        <Input
          type="email"
          name="email"
          value={userEmail}
          placeholder="john@mail.com"
          onChange={e => setUserEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="password"
          name="password"
          value={userPassword}
          placeholder="Password"
          onChange={e => setUserPassword(e.target.value)}
        />
      </FormGroup>
      <Button type="submit" disabled={loading} block={true}>
        {loading ? "Loading..." : "S’inscrire"}
      </Button>
      <br />
      {error && <ErrorMessage errorMessage={error} />}
    </Form>
  );
}

export default Login
