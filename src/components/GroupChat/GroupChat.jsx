import React, { useEffect, useState } from 'react'
import {AllChatMessages} from '../AllChatMessages/AllChatMessages'
import GroupChatsNav from "../GroupChatsNav/GroupChatsNav"
import {InputMessage} from "../InputMessage/InputMessage"
import { useParams } from "react-router-dom"
import { getGroupChatsFromFirebase } from "../../services/firebase";

import "./GroupChat.css"

function GroupChat() {

  const params = useParams();

  const [chatNames, setChatNames] = useState([])

  useEffect(() => {
    getGroupChatsFromFirebase(setChatNames)
  }, [])

  let chat = chatNames.find((x) => x.id === params.id);

  return (
    <>
      <div style={{ display: "flex", felxDirection: "column" }}>
        <GroupChatsNav chatNames={chatNames} chatId={chat.id} />

        { !chat ? <div>NO</div> : 
          <div className="MessagesContainer">
            <div className='IconAndName'>
              <div><img className='chatIcon' src={`${chat.ImageUrl}`} alt="GC" /></div>
              <span className="ChatTitle">{chat.title}</span>
            </div>

            <AllChatMessages chatId={chat.id} chatTitle={chat.title} />
            <InputMessage chatId={chat.id} chatTitle={chat.title} />
          </div>
        }
      </div>
    </>
  )
}

export default GroupChat