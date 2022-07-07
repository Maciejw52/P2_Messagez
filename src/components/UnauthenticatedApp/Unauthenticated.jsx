import React from "react"
import { useAuth } from "../../hooks/useAuth"

import 'bootstrap/dist/css/bootstrap.min.css';
import "./UnauthenticatedStyles.css";


export function UnauthenticatedApp() {

  return (
    <section className="flex-container unauthWelcomeScreen ">
      <div className="mainTemplate">Please Login</div>
    </section>
  )
}
