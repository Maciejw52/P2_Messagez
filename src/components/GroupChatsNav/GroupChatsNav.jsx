import React from 'react'
import "./GroupChatsNav.css";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import AddGroupChat from "../AddGroupChat/AddGroupChat"
import SearchBar from "../SearchBar/SearchBar";

function GroupChatsList({chatNames}) {

  const { currentUser } = useAuth();

  let chatId = useParams();

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
        <div className='searchMessagez' style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
          <SearchBar/>
        </div>
        <div className='chatsAll'>
          <ul style={{listStyleType: "none"}}>
            {chatNames.map((SingleGroupChat, key) => {
              return (
                <div key={key} className="tempName">
                <Link style={{ textDecoration: 'none', color: "white" }} to={`../chats/${SingleGroupChat.id}`}>
                    <li
                      key={SingleGroupChat.id}
                      className={SingleGroupChat.id === chatId.id? "currentSingleGroupChatContainer" : "singleGroupChatContainer"}>
                      <div><img className='chatIcon' src={`${SingleGroupChat.ImageUrl}`} alt="GC"/></div>
                      <span className='TitleAndLastMessage'>
                        <div className="GroupChatTitle">{SingleGroupChat.title}</div>
                        <div className="GroupChatLastMessage">
                          {currentUser.uid === SingleGroupChat.latest_message_uid ?
                            `You: ` : `${SingleGroupChat.latest_message_sender.split(" ", 1)[0]}: `}
                            {SingleGroupChat.latest_message}
                        </div>
                      </span>
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