import React from 'react'
import "./GroupChatsNav.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import AddGroupChat from "../AddGroupChat/AddGroupChat"

function GroupChatsList({chatNames, chatId }) {

  const { currentUser } = useAuth();

  return (
    <div style={{
      display: "flex", felxDirection: "column", margin: 0, padding: 0}}>
      <section className="utilsComp">
        <div className='titleComp'>
          <div>
            <Link style={{ textDecoration: 'none' }} to={`../account`}>
              <img className='profileImage' referrerPolicy='no-referrer' src={`${currentUser.photoURL}`} alt="Profile"></img>
              </Link>
          </div>
          <div className='chatsTitle'>Chats</div>
          <div className='newMessageButton'><AddGroupChat/></div>
        </div>
        {/* <div className='searchMessagez' style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
          <SearchBar/>
        </div> */}
        <div className='chatsAll'>
          <ul style={{listStyleType: "none"}}>
            {chatNames.map((SingleGroupChat, key) => {
              return (
                <div key={key} className="tempName">
                <Link style={{ textDecoration: 'none', color: "white" }} to={`../chats/${SingleGroupChat.id}`}>
                    <li
                      key={SingleGroupChat.id}
                      className={SingleGroupChat.id === chatId ? "currentSingleGroupChatContainer" : "singleGroupChatContainer"}>
                      <div><img className='chatIcon' src={`${SingleGroupChat.ImageUrl}`} alt="GC"/></div>
                      <span className="GCTitle">{SingleGroupChat.title}</span>
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