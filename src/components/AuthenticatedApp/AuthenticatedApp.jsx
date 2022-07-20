import React from "react"
import { useAuth } from "../../hooks/useAuth";
import {
  Routes,
  Route
} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import NewMessage from "../NewMessage/NewMessage";
import Friends from "../Friends/Friends";
import Account from "../Account/Account";
import GroupChats from "../GroupChats/GroupChats";
import Homepage from "../Homepage/Homepage";

export function AuthenticatedApp() {
 
  const { logout } = useAuth();

  return (
    <Routes>  
      <Route exact path="/" element={<Homepage/>}/>
      <Route exact path="/groupChats" element={<GroupChats/>}/>
      <Route exact path="/newMessage" element={<NewMessage/>}/>
      <Route exact path="/friends" element={<Friends/>}/>
      <Route exact path="/account" element={<Account/>}/>
    </Routes>
  )
}
