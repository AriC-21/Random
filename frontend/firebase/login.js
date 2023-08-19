import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
export default function emailLogin({ email, password }) {
  return signInWithEmailAndPassword(auth,email, password);
}
