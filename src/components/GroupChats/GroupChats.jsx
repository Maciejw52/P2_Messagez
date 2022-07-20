import React from 'react'
import "./GroupChats.css";
import SearchBar from "../SearchBar/SearchBar";

import { Groups }  from "./TempGroupChats";

function GroupChats() {



  return (
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
        {Groups.map((SingleGroupChat, key) => {
            return (
              <div key={key}>
                <li key={SingleGroupChat.title} className={"NavObjectHeader"}>
                  <div className="NavComponentIcon" ><img src={SingleGroupChat.icon}></img></div>
                  <span className="NavComponentTitle">{SingleGroupChat.title}</span>
                </li>
              </div>
            );
          })}
        </div>
    </section>
  )
}

export default GroupChats