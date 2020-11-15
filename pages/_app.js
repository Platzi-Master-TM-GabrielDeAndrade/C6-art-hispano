import Layout from "@components/Layout";
import { auth } from "../firebase/firebase.config";
import { useEffect, useState } from "react";
import "@styles/globals.scss"

import { Provider } from "react-redux";
import { generateStore } from "../components/store";

export default function MyApp({ Component, pageProps }) {
  const [firebaseUser, setFirebaseUser] = useState(false);
  const store = generateStore();

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
   
  return firebaseUser !== false ? (
    <Layout firebaseUser={firebaseUser}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  ) : (
    <div>Cargando;</div>
  );
};