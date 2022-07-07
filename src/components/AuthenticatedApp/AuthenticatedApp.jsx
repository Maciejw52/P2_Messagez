import React from "react"
import { Button } from "react-bootstrap";
import { useAuth } from "../../hooks/useAuth";

import 'bootstrap/dist/css/bootstrap.min.css';

export function AuthenticatedApp() {
 
  const { logout } = useAuth();

  return (
    <>
      <h2>Authenticated! You can logout if you want</h2>
      <div>
        <Button className="btn btn-success logout" onClick={logout}>
          Logout
        </Button>
      </div>
    </>
  )
}
