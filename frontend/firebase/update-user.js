import { auth, db } from "../config/firebase";
import { storage } from "../config/firebase";
import { updateDoc,collection,doc,getDoc } from "firebase/firestore";

function updateUser({ email, name, surname, phoneNumber, photo, finalEvent }) {
  const currentUser = auth.currentUser.uid;

  if (photo) {
    return storage()
      .ref("images/" + currentUser + (photo?.name || "0"))
      .put(photo)
      .then((doc) => {
        doc.ref.getDownloadURL().then((url) => {
          // collection(db,"Users")
          //   .doc(currentUser)
          //   .update({
          //     name,
          //     surname,
          //     email,
          //     phoneNumber: phoneNumber || "",
          //     photoUrl: url,
          //   })
          updateDoc(doc(collection(db,"Users")),currentUser,{
                name,
                surname,
                email,
                phoneNumber: phoneNumber || "",
                photoUrl: url,
              }
          )
            .catch((e) => console.log(e))
            .finally(() => finalEvent());
        });
      })
      .catch((e) => console.log(e));
  }

  return db
    .collection("Users")
    .doc(currentUser)
    .update({
      name,
      surname,
      email,
      phoneNumber: phoneNumber || "",
    });
}

function updatePassword({ currentPassword, newPassword }) {
  const currentUser = auth.currentUser;

  const credential = firebase.auth.EmailAuthProvider.credential(
    firebase.auth().currentUser.email,
    currentPassword
  );

  const update = () => {
    return currentUser
      .updatePassword(newPassword)
      .then(function () {
        // Update successful.
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  const reauth = () => {
    return currentUser.reauthenticateWithCredential(credential);
  };

  return {
    reauth,
    update,
  };
}

export { updateUser, updatePassword };
