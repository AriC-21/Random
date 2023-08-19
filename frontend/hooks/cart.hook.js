import { db, auth } from "@/config/firebase";
import { useState, useEffect } from "react";
import { collection, doc} from "firebase/firestore";
const useCart = (id) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFromFirestore() {
      auth.currentUser &&
        collection(db,"Users").
          doc(db,auth.currentUser?.uid)
            .onSnapshot(function (doc) {
              setData(doc.data().cart);
            }
          );
    }

    fetchFromFirestore();
  }, [auth.currentUser]);

  return {
    data,
    loading,
    error,
  };
};

const useCartOnce = (id) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log("once");

  useEffect(() => {
    async function fetchFromFirestore() {
      console.log("once inner");

      collection(db,"Users")
        .doc(auth.currentUser?.uid)
        .get()
        .then(function (doc) {
          setData(doc.data().cart);
          setLoading(false);
        })
        .catch((e) => setError(e));
    }
    auth.currentUser?.uid && fetchFromFirestore();
  }, [auth.currentUser]);

  return {
    data,
    loading,
    error,
  };
};

export { useCart, useCartOnce };
