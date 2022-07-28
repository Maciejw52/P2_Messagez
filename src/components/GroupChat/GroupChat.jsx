import React from 'react'
import {AllChatMessages} from '../AllChatMessages/AllChatMessages'
import GroupChatsNav from "../GroupChatsNav/GroupChatsNav"
import {InputMessage} from "../InputMessage/InputMessage"
import { useParams } from "react-router-dom"
import { Groups } from "../GroupChatsNav/TempGroupChats"

import "./GroupChat.css"

function GroupChat() {

  const params = useParams();

  let chatId = Groups.find((x) => x.id === params.id);
  
  if (!chatId) {

  }

  return (
    <>
      <div style={{ display: "flex", felxDirection: "column" }}>
        <GroupChatsNav />

        { !chatId ? <div>NO</div> : 
          <div className="MessagesContainer">
            <AllChatMessages chatId={chatId.id} />
            <InputMessage chatId={chatId.id} />
          </div>
        }
      </div>
    </>
  )
}

export default GroupChat