import React from "react";
import { createContext, useState } from "react";
import { loginWithGoogleAccount, Logout } from "../services/firebase"

export const AuthContext = createContext();

export const AuthProvider = (params) => {

  const [currentUser, setCurrentUser] = useState(null);

  const login = async () => {
  
    const currentUser = await loginWithGoogleAccount();

    if (!currentUser) {
      console.log("User failed to login!");
    }
    setCurrentUser(currentUser);
  }

  const logout = async () => {
    console.log("HADWE")
    setCurrentUser(null);
    Logout();
    window.location.reload();
  }

  const value = { currentUser, login, logout };

  return <AuthContext.Provider value={value} {...params} />
}