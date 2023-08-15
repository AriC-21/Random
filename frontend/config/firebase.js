import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDEvviy-C6QWN2-hW9VuAnuovc7HO1v2BA",
  authDomain: "random-23ae1.firebaseapp.com",
  projectId: "random-23ae1",
  storageBucket: "random-23ae1.appspot.com",
  messagingSenderId: "485321894019",
  appId: "1:485321894019:web:398b2b4debe747a1bfd3b6"
};

let app;
if(!app){
  app=initializeApp(firebaseConfig);
}
else{
  console.log("Firebase already initialized\n");
}
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {app, auth, db, storage};