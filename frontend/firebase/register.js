import {auth,db } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection } from "firebase/firestore";

function emailRegister({ email, password }) {
  console.log(email);
  console.log(password);
  return createUserWithEmailAndPassword(auth,email,password);
}
function registerDatabase({ id, email, name, surname }) {
  try {
    return collection(db,"Users").doc(id).set({
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

function registerSellerDatabase({id, email, name}) {
  return collection(db,"Users").doc(id).set({
    name,
    email,
    products: [],
    addresses: [],
    cart: {},
    favorites: [],
    orders: [],
    phoneNumber: "",
    photoUrl: null,
  });
}

export { emailRegister, registerDatabase,registerSellerDatabase };
