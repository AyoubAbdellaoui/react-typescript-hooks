import React, { useState } from "react"
import { Button, Form, FormGroup, Input } from "reactstrap"

import SMSForm from "../SMSForm"
import ErrorMessage from "../_components/ErrorContainer"
import useErrorHandler from "../_utils/ErrorHandler"
import { apiRequest, validateLoginForm } from "../_utils/Helpers"
import { Header } from "../_styles"

function Login() {
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [userID, setuserID] = useState(0)
  const [showSMSForm, setSMSForm] = useState(false)
  const [loading, setLoading] = useState(false)
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
      setuserID(id)
      setUserEmail(email)
      setSMSForm(true)
    } catch (err) {
      setLoading(false)
      showError(err.message)
    }
  };

  return (
    <>
      {showSMSForm ? <SMSForm id={userID} email={userEmail} />
        :
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
        </Form>}
    </>
  );
}

export default Login
