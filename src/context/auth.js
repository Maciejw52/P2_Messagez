import React from "react";
import { createContext, useState } from "react";
import { loginWithGoogleAccount } from "../services/firebase"

export const AuthContext = createContext();

export const AuthProvider = (params) => {

  const [currentUser, setCurrentUser] = useState(null);

  const login = async () => {
  
    const user = await loginWithGoogleAccount();

    if (!user) {
      console.log("User failed to login!");
    }
    setCurrentUser(user);
  }

  const logout = async () => {
    setCurrentUser(null);
  }

  const value = { user, login };

  return <AuthContext.Provider value={value} {...params} />
} 