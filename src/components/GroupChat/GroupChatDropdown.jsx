import React from 'react'
import { deleteAllMessagesInGroupChat } from "../../services/firebase";

import "./GroupChat.css"

export default function GroupChatDropdown({chatId, chatTitle}) {

  const handleDeleteChatMessages = () => {
    deleteAllMessagesInGroupChat(chatId);
  };
  
  return (
    <div  >
      <span onClick={handleDeleteChatMessages} className="material-icons MoreHorizontal">more_horiz</span>
    </div>
  )
}
