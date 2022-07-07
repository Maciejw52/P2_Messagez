import './App.css';
import { useAuth } from "./hooks/useAuth"


function App() {
  const { user } = useAuth();

  return (
    user ? <AuthenticatedApp /> : <UnauthenticatedApp/>
  );
}

export default App;
