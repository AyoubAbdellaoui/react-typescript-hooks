import * as React from "react"
import "bootstrap/dist/css/bootstrap.css"

import Layout from "../Layout/Layout"
import LoginContextProvider from "../_contexts/LoginContext"

function App() {
  return (
    <LoginContextProvider>
      <Layout />
    </LoginContextProvider>
  );
}

export default App