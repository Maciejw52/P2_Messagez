import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp, onSnapshot, query, orderBy } from 'firebase/firestore';
import { GoogleAuthProvider, signInWithPopup, getAuth, signOut } from "firebase/auth";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export async function loginWithGoogleAccount() {
  // returns user data if sign in successful
  try {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const { user } = await signInWithPopup(auth, provider);

    return {
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL
    }

  } catch (error) {
    if (error.code !== 'auth/cancelled-popup-request') {
        console.error(error);
    }
  }
}

export async function Logout() {
  const auth = getAuth();

  try {
    signOut(auth)
    console.log("Signed out");
    return true;
  } catch {
    console.log("Failed to sign-out");
    return false;
  }
}

export async function sendMessage(chatId, user, text){
  
  try {
    await addDoc(collection(db, "chats", chatId, "messages"), {
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        text: text.trim(),
        timestamp: serverTimestamp(),
    });
  } catch (error) {
      console.log(error);
  }
}

export async function postGroupChat(text, ImageUrl){
  
  try {
    await addDoc(collection(db, "chatData"), {
        title: text.trim(),
        ImageUrl: ImageUrl,
        created_at: serverTimestamp(),
        updated_at: serverTimestamp(),
    });
  } catch (error) {
      console.log(error);
  }
}

export async function getMessagesFromFirebase(chatId, callback) {
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


export async function getGroupChatsFromFirebase(callback) {
  return onSnapshot(
    query(
      collection(db, "chatData"),
      orderBy("updated_at", "desc")
    ),
    (query) => {
      const messages = query.docs.map((record) => ({
        id: record.id,
        ...record.data(),
      }));
      console.log(messages)
      callback(messages);
    }
  )
}


// get friends call

// send add friend

// send delete friend