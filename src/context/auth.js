import React from "react";
import { createContext, useState } from "react";
import { loginWithGoogleAccount, Logout } from "../services/firebase"

export const AuthContext = createContext();

export const AuthProvider = (params) => {

  const [currentUser, setCurrentUser] = useState(null);

  // login
  const login = async () => {
    const currentUser = await loginWithGoogleAccount();
    if (!currentUser) {
      console.log("User failed to login!");
    }
    setCurrentUser(currentUser);
  }

  //logout
  const logout = async () => {
    setCurrentUser(null);
    Logout();
  }

  const value = { currentUser, login, logout };

  return <AuthContext.Provider value={value} {...params} />
}