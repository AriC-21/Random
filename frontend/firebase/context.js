import React, { useState, useEffect, useContext, createContext } from "react";
import { auth, db } from "../config/firebase";
import { collection, query, where, getDoc,doc} from "firebase/firestore";
import { set } from "date-fns";

const authContext = createContext();
export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
export const useAuth = () => {
  console.log("useAuth");
  return useContext(authContext);
};
function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 

  const getCurrentUser = () => {
    const docRef = doc(db,"Users",currentUser.uid);
    const docSnap = getDoc(docRef);
    console.log(docSnap)

    auth.currentUser?.uid
      ? 
      //   collection(db,"Users")
      //     .doc(db,auth.currentUser.uid)
      //     .get()
      //     .then((doc) => {
      //       setUser(doc.data());
      //       setLoading(false);
      //     })
      // : setLoading(false);
      getDoc(doc(db,"Users",currentUser.uid))
        .then((doc)=>{
          setUser(doc.data());
          setLoading(false);
        }
        )
      : setLoading(false);
  };

  useEffect(() => {
    const unsubscribe = auth
      .onAuthStateChanged(() => getCurrentUser());
    return () => unsubscribe();
  }, []);

  return {
    user,
    loading,
    setUser,
  };
}
