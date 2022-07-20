import React from 'react'
import "./GroupChats.css";
import SearchBar from "../SearchBar/SearchBar";

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
        <div className='chatsAll'></div>
    </section>
  )
}

export default GroupChats