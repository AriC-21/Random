// import firebase from "firebase";

// export const firebaseConfig = {
//   apiKey: "AIzaSyBarIH7SMVQLlOF9-6kY4tMDWJk15i9K9g",
//   authDomain: "random-b7478.firebaseapp.com",
//   projectId: "random-b7478",
//   storageBucket: "random-b7478.appspot.com",
//   messagingSenderId: "5873795293",
//   appId: "1:5873795293:web:180a93e37f995284789b34"
// };
// const app=firebase.initializeApp(firebaseConfig);
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }else {
//   firebase.app(); // if already initialized, use that one
// }
// // const app=firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
// const db = firebase.firestore();
// const storage = firebase.storage()

// export { firebase, auth, db, storage };
// console.log(app.name ? "Firebase Mode Activated!" : "Firebase not working :(");

// Import the functions you need from the SDKs you need


// Import the functions you need from the SDKs you need
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
  appId: "1:485321894019:web:7670750477692f19bfd3b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);