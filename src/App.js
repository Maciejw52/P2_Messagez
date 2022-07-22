import './App.css';
import { useAuth } from "./hooks/useAuth"
import { AuthenticatedApp } from "../src/components/AuthenticatedApp/AuthenticatedApp"
import { UnauthenticatedApp } from '../src/components/UnauthenticatedApp/Unauthenticated';
import GlobalNavigation from "./components/GlobalNavigation/GlobalNavigation"
import {
  BrowserRouter as Router,
} from "react-router-dom"

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
