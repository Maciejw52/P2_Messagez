import React from "react"
import { useAuth } from "../../hooks/useAuth"

import 'bootstrap/dist/css/bootstrap.min.css';

export function UnauthenticatedApp() {

  const { login } = useAuth();

  return (
    <>
      <h2>Log in to join a chat room!</h2>
      <div>
        <button onClick={login} className="login">
          Login with Google
        </button>
      </div>
    </>
  )
}
