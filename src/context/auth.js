import React from "react";
import { createContext, useState } from "react";
import { loginWithGoogleAccount, Logout, addUserData, userDataExists } from "../services/firebase";

export const AuthContext = createContext();

// Provider for authorisation of the application
export const AuthProvider = (params) => {

  // currentUser object which will contain all data stored by Google upon login
  const [currentUser, setCurrentUser] = useState(null);

  // login function
  const login = async () => {
    //
    const currentUser = await loginWithGoogleAccount();
    if (!currentUser) {
      console.log("User failed to login!");
    } else {
      // sets the currentUser
      setCurrentUser(currentUser);
      
      userDataExists(currentUser.uid).then((res) => {
        if(!res){
          addUserData(currentUser.uid, currentUser.displayName);
        }
      })

    }
  }

  // logout function
  const logout = async () => {
    Logout().then(setCurrentUser(null));
  }

  const value = { currentUser, login, logout };

  return <AuthContext.Provider value={value} {...params} />
}