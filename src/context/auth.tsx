import React from "react";
import { createContext, useState } from "react";
import { loginWithGoogleAccount, Logout } from "../services/firebase";
import { addUserData, userDataExists } from "../services/api/userApi";

export const AuthContext = createContext(undefined);

// Provider for authorisation of the application
export const AuthProvider = (params: JSX.IntrinsicAttributes & React.ProviderProps<any>) => {

  // currentUser object which will contain all data stored by Google upon login
  const [currentUser, setCurrentUser] = useState(null);

  // login function
  const login = async () => {
    //
    const currentUser = await loginWithGoogleAccount();
    if (!currentUser) {
      console.log("User failed to login!");
    } else {
      
      userDataExists(currentUser.uid).then((res) => {
        if(!res){
          addUserData(currentUser);
          currentUser["group_chats"] = ["BwEe7eSjlyw5QzopBKGc", "jYzIGfuUysdRhEQKeEWA", "JvWBnikFknTqwScKvbpa"];
          setCurrentUser(currentUser);
          console.log(currentUser)
        } else {
          //console.log(res.data())
          setCurrentUser(res.data());
          console.log(currentUser)
        }
      })

    }
  }

  // logout function
  const logout = async () => {
    Logout().then(() => setCurrentUser(null));
  }

  const value = { currentUser, login, logout };

  return <AuthContext.Provider value={value} {...params} />
}