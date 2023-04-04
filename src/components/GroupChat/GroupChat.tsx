import React, { useEffect, useState } from 'react'
import { AllChatMessages} from '../AllChatMessages/AllChatMessages'
import GroupChatsNav from "../GroupChatsNav/GroupChatsNav"
import { InputMessage} from "../InputMessage/InputMessage"
import { useParams } from "react-router-dom"
import GroupChatInfo from "../GroupChatInfo/GroupChatInfo"
import { useAuth } from '../../hooks/useAuth'
import { getGruopChatsForUser } from '../../services/firebase'

import "./GroupChat.css"

function GroupChat() {

  const params = useParams();
  const { currentUser } = useAuth();

  const [chatNames, setChatNames] = useState([])

  useEffect(() => {
    console.log(currentUser)
    //getGroupChatsFromFirebase(setChatNames)
    getGruopChatsForUser(currentUser, setChatNames);
  }, [])

  let chat = chatNames.find((x) => x.id === params.id);

  return (
    <>
      <div style={{ display: "flex", felxDirection: "column" }}>
        <GroupChatsNav chatNames={chatNames} />

        { !chat ? <div>NO</div> : 
          <div className="MessagesContainer">
            <div className='IconAndName'>
              <div><img className='chatIcon' src={`${chat.ImageUrl}`} alt="GC" />
                <span className="ChatTitle noselect">{chat.title}</span></div>
              <div className='MoreHorizontal'><GroupChatInfo/></div>
            </div>
            <AllChatMessages chatId={chat.id} />
            <InputMessage chatId={chat.id} />
          </div>
        }
      </div>
    </>
  )
}

export default GroupChat