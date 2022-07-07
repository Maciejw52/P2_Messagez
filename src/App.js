import './App.css';
import { useAuth } from "./hooks/useAuth"
import { AuthenticatedApp } from "../src/components/AuthenticatedApp/AuthenticatedApp"
import { UnauthenticatedApp } from '../src/components/UnauthenticatedApp/Unauthenticated';
import { useEffect } from 'react';


function App() {

  const { user } = useAuth();

  return (
    <div className="container">
      <h1>MessagingApp </h1>
        {user !== null ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
