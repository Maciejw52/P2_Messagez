import React, { useLayoutEffect, useRef } from 'react';
import { useAuth } from "../../hooks/useAuth";
import { useMessages } from "../../hooks/useMessages";
 
import "./AllChatMessages.css";

export interface MessageProps {
  chatId: string,
}

export function AllChatMessages({ chatId }: MessageProps) {
  const containerRef = useRef(null);
  const { currentUser } = useAuth(); 
  const messages = useMessages(chatId)

  useLayoutEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  });

  return (
    <div className="AllMessagesContainer" ref={containerRef}>
      <ul className="MessageList">
        {messages.map((x) => {
          return (
            <Message
              key={x.id}
              message={x}
              isOwnMessage={x.uid === currentUser.uid}
            />
          )
        }
        )}
      </ul>
    </div>
  );
}


function Message({ message, isOwnMessage }) {
  const { displayName, text, photoURL } = message;

  
  
  // const [currentTimestamp, setCurrentTimestamp] = useState("");

  // useEffect(() => {
  //   const date = new Date(timestamp.seconds * 1000)
  //   setCurrentTimestamp(date.toLocaleTimeString());
  // }, [message])

  return (
    <li className={isOwnMessage ? "SingleMessage own-message" : "SingleMessage"}>
      {isOwnMessage ? null :
        <img className='profileImage' referrerPolicy='no-referrer' src={`${photoURL}`} alt="Profile"></img>
      }
      <div>
        <div className="sender">{isOwnMessage ? 'You' : displayName}</div>
        {/* <div className=''>{currentTimestamp}</div> */}
      </div>
      <div className=''>{text}</div>
    </li>
  );
}