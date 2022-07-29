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

  let chatId = chatNames.find((x) => x.id === params.id);

  return (
    <>
      <div style={{ display: "flex", felxDirection: "column" }}>
        <GroupChatsNav chatNames={chatNames} />

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