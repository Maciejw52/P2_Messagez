import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  serverTimestamp, 
  onSnapshot, 
  query, 
  orderBy, 
  updateDoc, 
  doc, 
  deleteDoc, 
  arrayUnion, 
  getDoc,
  setDoc } from 'firebase/firestore';
import { GoogleAuthProvider, signInWithPopup, getAuth, signOut } from "firebase/auth";
import { getStorage } from "firebase/storage"

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
export const storage = getStorage(app);

export async function loginWithGoogleAccount() {
  // returns user data if sign in successful
  try {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const { user } = await signInWithPopup(auth, provider);

    return {
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      email: user.email
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

export async function postGroupChat(user, text, ImageUrl){
  
  try {
    await addDoc(collection(db, "chatData"), {
      title: text.trim(),
      ImageUrl: ImageUrl,
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
      latest_message_sender: user.displayName,
      latest_message_uid: user.uid,
      latest_message: "Created Chat"
    }).then((DocumentReference) => {
      // User that has added the group chat will have its group_chats field updated with the new group chat
      updateDoc(doc(db, "userData", user.uid), {
        group_chats: arrayUnion(...[DocumentReference.id])
      }).catch( err => console.log(`Could not update group_chats for user. Error: ${err}`) );
    })
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
      callback(messages);
    }
  )
}

export async function deleteAllMessagesInGroupChat(chatId) {
  try {
    await deleteDoc(doc(db, "chats", chatId)).then(() => {
      console.log(`Deleted all group chat messages for chat ${chatId}`);
    })
    
  } catch {
    console.log("Could not deleted Group Chat Data");
  }
}

export async function deleteGroupChat(chatId) {
  try {
    await deleteDoc(doc(db, "chatData", chatId));
  } catch {
    console.log("Deleted Group Chat");
  }
}

export async function userDataExists(userUid) {

  const docSnap = await getDoc(doc(db, "userData", userUid));

  if (docSnap.exists()) {
    console.log(true);
    return true;
  }
  console.log(false)
  return false;
}

export async function addUserData(userUid, userName) {
  // GUpon first login user is assigned the

  try {
    await setDoc(doc(db, "userData", userUid), {
      uid: userName,  
      group_chats: ["BwEe7eSjlyw5QzopBKGc", "jYzIGfuUysdRhEQKeEWA", "JvWBnikFknTqwScKvbpa"],
      created_at: serverTimestamp()
    })
  } catch (error) {
    console.log(error);
  }
}