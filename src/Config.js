import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth ,signInWithPopup } from "firebase/auth"
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB9nyBOlTB1SW-oQ5F8Bg3wRtDUU2c6kU0",
  authDomain: "react-project-f68f5.firebaseapp.com",
  projectId: "react-project-f68f5",
  storageBucket: "react-project-f68f5.appspot.com",
  messagingSenderId: "958340502366",
  appId: "1:958340502366:web:5fac570b5de84b8cc635cf",
  measurementId: "G-WVPBQRRSW3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// export const GoogleAuth = () => {
//   let provider = new GoogleAuthProvider();
//   return signInWithPopup(auth, provider);
// };
export const Emailsignup = (email, password) => {
  return createUserWithEmailAndPassword (auth, email, password);
};
// export const EmailLogin = (email, password) => {
//   return signInWithEmailAndPassword(auth, email, password);
// };

//database

// export const db=getFirestore(app)