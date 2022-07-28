import React, { useEffect, useState } from 'react'
import "./GroupChatsNav.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth"
import { getGrouChatsFromFirebase } from "../../services/firebase";

import { Groups }  from "./TempGroupChats";

function GroupChatsList() {

  const { currentUser } = useAuth();


  const [ chatNames, setChatNames] = useState([])

  useEffect(() => {
    getGrouChatsFromFirebase(setChatNames)
    console.log(chatNames)
  }, [])

  return (
    <div style={{
      display: "flex", felxDirection: "column", margin: 0, padding: 0}}>
      <section className="utilsComp">
        <div className='titleComp'>
          <div>
            <img className='profileImage' referrerPolicy='no-referrer' src={`${currentUser.photoURL}`} alt="Profile"></img>
          </div>
          <div className='chatsTitle'>Chats</div>
          <div className='newMessageButton'>button</div>
        </div>
        <div className='searchMessagez' style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
          <SearchBar/>
        </div>
        <div className='chatsAll'>
          <ul style={{listStyleType: "none"}}>
            {Groups.map((SingleGroupChat, key) => {
              return (
                <div key={key} className="tempName">
                <Link style={{ textDecoration: 'none' }} to={`../chats/${SingleGroupChat.id}`}>
                <li key={SingleGroupChat.id} className="singleGroupChatContainer">
                      <div><img className='chatIcon' src={`${currentUser.photoURL}`} alt="GC"/></div>
                    <span className="">{SingleGroupChat.id}</span>
                  </li>
                </Link>
              </div>
              );
            })}
          </ul>
        </div>
      </section>
    </div>

  )
}

export default GroupChatsList