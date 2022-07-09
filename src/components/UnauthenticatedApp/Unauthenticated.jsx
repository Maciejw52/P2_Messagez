import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import "./UnauthenticatedStyles.css";


export function UnauthenticatedApp() {

  return (
    <section className="flex-container unauthWelcomeScreen ">
      <div className="mainPageTemplate">
        <div className="">Please Login</div>
      </div>
    </section>
  )
}
