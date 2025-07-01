import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,  GoogleAuthProvider,
  signInWithPopup, updateProfile, sendPasswordResetEmail
 } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD-MtfSz3El4WEBPQAC17QyFoFiw5hq2lQ",
  authDomain: "resumpire.firebaseapp.com",
  projectId: "resumpire",
  storageBucket: "resumpire.firebasestorage.app",
  messagingSenderId: "499656920258",
  appId: "1:499656920258:web:9a70ee6b2ff6cbb141bf5b",
  measurementId: "G-X0TSP3F7LM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

export const signUpUser = async (email, password, displayName) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(userCredential.user, { displayName });
  return userCredential;
};

export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const resetPassword = (email) => {
  return sendPasswordResetEmail(auth, email);
};

export { app, auth };
