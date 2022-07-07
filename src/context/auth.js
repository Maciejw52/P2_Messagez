import React from "react";
import { createContext, useState } from "react";
import { loginWithGoogleAccount } from "../services/firebase"

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
    setCurrentUser(null);
  }

  const value = { currentUser, login };

  return <AuthContext.Provider value={value} {...params} />
} 