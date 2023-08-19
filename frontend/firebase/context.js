import React, { useState, useEffect, useContext, createContext } from "react";
import { auth, db } from "../config/firebase";
import { collection } from "firebase/firestore";
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
    auth.currentUser?.uid
      ? 
        collection(db,"Users")
          .doc(auth.currentUser.uid)
          .get()
          .then((doc) => {
            setUser(doc.data());
            setLoading(false);
          })
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
