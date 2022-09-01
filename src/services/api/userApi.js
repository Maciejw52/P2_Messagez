import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp
} from 'firebase/firestore';
import { db } from "../firebase"

export async function userDataExists(userUid) {

  const docSnap = await getDoc(doc(db, "userData", userUid));

  if (docSnap.exists()) {
    console.log(true);
    return docSnap;
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

export async function getUserData(UserUid) {

  try {
    await getDoc(doc(db, "userData", UserUid))
  } catch {

  }
}