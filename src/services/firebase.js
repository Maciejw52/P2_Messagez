import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth, signOut } from "firebase/auth";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
}

initializeApp(firebaseConfig);


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