import { useEffect, useState } from 'react';
import { getMessagesFromFirebase } from '../services/firebase';

export function useMessages(chatId) {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessagesFromFirebase(chatId, setMessages);
  }, [chatId]);
  
  return messages;
}