import './App.css';
import { useAuth } from "./hooks/useAuth"
import { AuthenticatedApp } from "./components/AuthenticatedApp/AuthenticatedApp"
import { UnauthenticatedApp } from './components/UnauthenticatedApp/Unauthenticated';
import GlobalNavigation from "./components/GlobalNavigation/GlobalNavigation"
import {
  BrowserRouter as Router,
} from "react-router-dom"
import React from 'react';

function App() {

  const { currentUser } = useAuth();

  return (
    <Router>
    <GlobalNavigation />
      <div className="App">
        {currentUser !== null ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </div>
    </Router>
  );
}

export default App;
