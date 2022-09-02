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
    console.log("User Exists");
    return docSnap;
  }
  console.log("User does not exist");
  return false;
}

export async function addUserData(user) {
  // GUpon first login user is assigned the

  try {
    await setDoc(doc(db, "userData", user.uid), {
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      group_chats: ["BwEe7eSjlyw5QzopBKGc", "jYzIGfuUysdRhEQKeEWA", "JvWBnikFknTqwScKvbpa"],
      created_at: serverTimestamp()
    })
  } catch (error) {
    console.log(error);
  }
}

export async function getUserData(UserUid) {
  try {
    return await getDoc(doc(db, "userData", UserUid))
  } catch {

  }
}