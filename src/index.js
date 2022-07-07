import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/auth';
import GlobalNavigation from "./components/GlobalNavigation/GlobalNavigation"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <GlobalNavigation />
    <App />
  </AuthProvider>
);
