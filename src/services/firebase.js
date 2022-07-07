import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth, signOut } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDVZuPg9iRcYT7c_rsrMExGa2FnyL09Sdw",
  authDomain: "messagingapp-d8178.firebaseapp.com",
  projectId: "messagingapp-d8178",
  storageBucket: "messagingapp-d8178.appspot.com",
  messagingSenderId: "28936920061",
  appId: "1:28936920061:web:81f1dfd69b8eded8fd1794"
}

const app = initializeApp(firebaseConfig);


export async function loginWithGoogleAccount() {
  // returns user data if sign in successful
  try {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const { user } = await signInWithPopup(auth, provider);

    return {
      uid: user.uid,
      displayName: user.displayName
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