import { firestore  } from "../firebase/firebase.config";

export const authMethods = {
  signup: (email, password) => {
    firestore
      .auth().createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  signin: (email, password) => {},
  signout: (email, password) => {},
};