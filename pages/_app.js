import Layout from "@components/Layout";
import { auth } from "../firebase/firebase.config";
import { useEffect, useState } from "react";
import "@styles/globals.scss"

export default function MyApp({ Component, pageProps }) {
  const [firebaseUser, setFirebaseUser] = useState(false);

   useEffect(() => {
     auth.onAuthStateChanged((user) => {
       console.log(user);
       if (user) {
         setFirebaseUser(user);
       } else {
         setFirebaseUser(null);
       }
     });
   }, []);
  return (
    <Layout firebaseUser={firebaseUser}>
      <Component {...pageProps} />
    </Layout>
  )
};
