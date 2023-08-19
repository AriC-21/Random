import {auth,db } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection,setDoc,doc } from "firebase/firestore";

function emailRegister({ email, password }) {
  console.log(email);
  console.log(password);
  return createUserWithEmailAndPassword(auth,email,password);
}
function registerDatabase({ id, email, name, surname }) {
  try {
    // return collection(db,"Users").doc(id).set({
    //   name,
    //   surname,
    //   email,
    //   addresses: [],
    //   cart: {},
    //   favorites: [],
    //   orders: [],
    //   phoneNumber: "",
    //   photoUrl: null,
    // });
    return setDoc(doc(collection(db,"Users")),{
        name,
        surname,
        email,
        addresses: [],
        cart: {},
        favorites: [],
        orders: [],
        phoneNumber: "",
        photoUrl: null,
      });
  } catch (e) {
    console.error(e);
    return null;
  }
}
export { emailRegister, registerDatabase};
