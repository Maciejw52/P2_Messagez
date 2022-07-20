import React from "react"
import { useAuth } from "../../hooks/useAuth"

import 'bootstrap/dist/css/bootstrap.min.css';
import "./UnauthenticatedStyles.css";


export function UnauthenticatedApp() {

  return (
    <section className="flex-container unauthWelcomeScreen ">
      <div className="mainTemplate">
        <div className="messagezMain">
          Messagez makes it easy and fun to stay close to your favourite people.
        </div>
        <br/>
        <div className="loginPrompt">
          Please Login to use Messagez
        </div>
      </div>
    </section>
  )
}
