import React from "react"
import { useAuth } from "../../hooks/useAuth"
import {Button} from "react-bootstrap";


import 'bootstrap/dist/css/bootstrap.min.css';
import "./UnauthenticatedStyles.css";


export function UnauthenticatedApp() {

  const { login } = useAuth();

  return (
    <section className="flex-container unauthWelcomeScreen">
      <div className="mainTemplate flex-container">
        <div className="messagezMain">
          Messagez makes it easy and fun to stay close to your favourite people.
        </div>
        <br/>
        <div className="loginPrompt">
          Please Login to explore our app.
        </div>
        <div>
          <Button className="btn loginButtonUnauth" onClick={login}>
            login with Google
          </Button>
        </div>
      </div>
    </section>
  )
}
