import Layout from "@components/Layout";
import { auth } from "../firebase/firebase.config";
import { useEffect, useState } from "react";
import "@styles/globals.scss"

import { Provider } from "react-redux";
import { generateStore } from "./redux/store";

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
      <Provider store={store}>
        <Layout firebaseUser={firebaseUser}>
            <Component {...pageProps} />
        </Layout>
      </Provider>
  ) : (
    <div>Cargando;</div>
  );
};