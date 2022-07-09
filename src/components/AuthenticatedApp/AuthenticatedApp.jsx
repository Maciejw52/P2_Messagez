import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Homepage from "../Homepage/Homepage";
import GroupChats from "../GroupChats/GroupChats";
import Account from "../Account/Account";
import Friends from "../Friends/Friends";

import 'bootstrap/dist/css/bootstrap.min.css';

export function AuthenticatedApp() {

  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/group_chats" element={<GroupChats />} />
      <Route path="" element={<></>} />
      <Route path="/friends" element={<Friends />} />
      <Route exact path="/account" element={<Account />} />
    </Routes>
  )
}
