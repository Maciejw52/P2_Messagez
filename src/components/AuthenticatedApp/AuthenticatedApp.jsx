import React from "react"
import { Button } from "react-bootstrap";
import { useAuth } from "../../hooks/useAuth";

import 'bootstrap/dist/css/bootstrap.min.css';

export function AuthenticatedApp() {
 
  const { logout } = useAuth();

  return (
    <>
    </>
  )
}
