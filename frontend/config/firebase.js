// *****   export { firebase, auth, db, storage }; ********

// Import the functions you need from the SDKs you need

import firebase from "firebase";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEvviy-C6QWN2-hW9VuAnuovc7HO1v2BA",
  authDomain: "random-23ae1.firebaseapp.com",
  projectId: "random-23ae1",
  storageBucket: "random-23ae1.appspot.com",
  messagingSenderId: "485321894019",
  appId: "1:485321894019:web:398b2b4debe747a1bfd3b6"
};

// Initialize Firebase
let app;
if(!app){
  app=firebase.initializeApp(firebaseConfig);
}
else{
  console.log("Firebase already initialized\n");
}

const auth=firebase.auth(app);
const db=firebase.database(app);
const storage=firebase.storage(app);

export { firebase, auth, db, storage };