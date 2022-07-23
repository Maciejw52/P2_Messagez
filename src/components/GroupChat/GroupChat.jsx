import React from 'react'
import GroupChatsNav from "../GroupChatsNav/GroupChatsNav"
import InputMessage from "../InputMessage/InputMessage"

function GroupChat() {
  return (
    <>
      <div style={{ display: "flex", felxDirection: "column" }}>
        <GroupChatsNav />
        
        <InputMessage chatId={"Groupchat1"} />
      </div>
    </>
  )
}

export default GroupChat