import './App.css';
import { useAuth } from "./hooks/useAuth"
import { AuthenticatedApp } from "../src/components/AuthenticatedApp/AuthenticatedApp"
import { UnauthenticatedApp } from '../src/components/UnauthenticatedApp/Unauthenticated';



function App() {
  const { user } = useAuth();

  return (
    user ? <AuthenticatedApp /> : <UnauthenticatedApp/>
  );
}

export default App;
