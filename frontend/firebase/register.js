import { auth, db } from "../config/firebase";

function emailRegister({ email, password }) {
    return auth.createUserWithEmailAndPassword(email, password);
}
function registerDatabase({ id, email, name, surname }) {
  try {
    return db.collection("Users").doc(id).set({
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
  return db.collection("Users").doc(id).set({
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
