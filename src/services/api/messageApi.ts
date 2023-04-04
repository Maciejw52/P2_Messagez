import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
  query,
  onSnapshot,
  deleteDoc,
  orderBy
} from 'firebase/firestore';
import {db} from "../firebase";

export interface MessagePropsInterface {
  chatId?: string, 
  user?: { uid: any; displayName: any; photoURL: any; }, 
  text?: string
}

export interface GetMessagesProps {
  chatId: any
  setMessages: React.Dispatch<React.SetStateAction<any[]>>; 
}

export async function sendMessage({chatId, user, text}: MessagePropsInterface){
  
  try {
    await addDoc(collection(db, "chats", chatId, "messages"), {
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        text: text.trim(),
        timestamp: serverTimestamp(),
    });

    updateDoc(doc(db, "chatData", chatId), {
      updated_at: serverTimestamp(),
      latest_message_sender: user.displayName,
      latest_message_uid: user.uid,
      latest_message: text.trim()
    }).catch(err => console.log(err))


  } catch (error) {
      console.log(error);
  }
}

export async function getMessagesFromFirebase({chatId, callback}: GetMessagesProps) {
  return onSnapshot(
    query(
      collection(db, "chats", chatId, "messages"),
      orderBy("timestamp", "asc")
    ),
    (querySnapshot) => {
      const messages = querySnapshot.docs.map((x) => ({
        id: x.id,
        ...x.data(),
      }));
      callback(messages);
    }
  )
}

export async function deleteAllMessagesInGroupChat(chatId: string) {
  try {
    await deleteDoc(doc(db, "chats", chatId)).then(() => {
      console.log(`Deleted all group chat messages for chat ${chatId}`);
    })
    
  } catch {
    console.log("Could not deleted Group Chat Data");
  }
}