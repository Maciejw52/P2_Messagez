import { useEffect, useState } from 'react';
import { getMessagesFromFirebase } from '../services/api/messageApi';

export function useMessages(chatId) {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessagesFromFirebase({chatId, setMessages});
  }, [chatId]);
  
  return messages;
}