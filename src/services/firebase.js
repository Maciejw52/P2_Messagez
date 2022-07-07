import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";


const firebaseConfig = {
  // My configs
}

const app = initializeApp(firebaseConfig);


export async function loginWithGoogleAccount() {
  // returns user data if sign in successful
  try {
    const provider = new GoogleAuthProvider();
    
    const { user } = await signInWithPopup(getAuth(), provider);

    console.log(user);

    return {
      uid: user.uid,
      displayName: user.displayName
    }

  } catch (err) {
    if(err.code !== "auth/cancelled-popul-request"){
      console.error(err);
    }
  }
}