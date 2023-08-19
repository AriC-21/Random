import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyC66XwpyVPLUhD01Wt5FjEklnCia49b4nY",
  authDomain: "random-a225c.firebaseapp.com",
  projectId: "random-a225c",
  storageBucket: "random-a225c.appspot.com",
  messagingSenderId: "923383479711",
  appId: "1:923383479711:web:a360484c1c1309537911aa"
};

let app;
if(!app){
  app=initializeApp(firebaseConfig);
  console.log("App initialized");
}
else{
  console.log("Firebase already initialized\n");
}
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
if (auth){
  console.log("Auth working");
}
export {auth, db, storage};