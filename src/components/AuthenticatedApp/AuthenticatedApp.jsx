import React from "react"
import {
  Routes,
  Route
} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import NewMessage from "../NewMessage/NewMessage";
import Account from "../Account/Account";
import GroupChats from "../GroupChat/GroupChat";
import Homepage from "../Homepage/Homepage";

export function AuthenticatedApp() {

  return (
    <div>
      <Routes>  
        <Route exact path="/" element={<Homepage/>}/>
        <Route path="/chats" element={<GroupChats />} />
        <Route path="/chats/:id" element={<GroupChats />} />
        <Route exact path="/newMessage" element={<NewMessage/>}/>
        <Route exact path="/account" element={<Account/>}/>
      </Routes>
    </div>
  )
}
