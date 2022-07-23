import React from 'react'
import "./GroupChats.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

import { Groups }  from "./TempGroupChats";

function GroupChatsList() {

  

  return (
    <div style={{display: "flex", felxDirection: "column"}}>
      <section className="utilsComp">
        <div className='titleComp'>
          <div className='profileImage'>Image
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
                <div key={key}>
                <Link style={{ textDecoration: 'none' }} to={`/${SingleGroupChat.title}`}>
                <li key={SingleGroupChat.title} className="singleGroupChatContainer">
                    <div className="chatIcon" ><img style={{height: "48px", width: "48px"}} src={SingleGroupChat.icon}></img></div>
                    <span className="">{SingleGroupChat.title}</span>
                  </li>
                </Link>
              </div>
              );
            })}
          </ul>
        </div>
      </section>
      <section className="GroupChatContainer">
        Hello
      </section>
    </div>

  )
}

export default GroupChatsList