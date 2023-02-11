import React from "react"
import {
  Routes,
  Route
} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import Account from "../Account/Account";
import GroupChats from "../GroupChat/GroupChat";

export function AuthenticatedApp() {

  return (
    <div>
      <Routes>  
        <Route path="/" element={<GroupChats />}/>
        <Route path="/chats/:id" element={<GroupChats />} />
        <Route path="/account" element={<Account/>}/>
      </Routes>
    </div>
  )
}
