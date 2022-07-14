import './App.css';
import { useAuth } from "./hooks/useAuth"
import { AuthenticatedApp } from "../src/components/AuthenticatedApp/AuthenticatedApp"
import { UnauthenticatedApp } from '../src/components/UnauthenticatedApp/Unauthenticated';

function App() {

  const { currentUser } = useAuth();

  return (
    <div className="App">
        {currentUser !== null ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
