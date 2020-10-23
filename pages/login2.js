import { useState } from "react";
import {
  auth,
  googleProvider,
  facebookProvider,
} from "../firebase/firebase.config";

const Login = () => {  
  const [setUser] = useState(null);

  const loginGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

    const loginFacebook = () => {
      auth
        .signInWithPopup(facebookProvider)
        .then((result) => {
          console.log(result.user);
          setUser(result.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return (
      <div>
        <h1>Login con Google</h1>
        <button onClick={loginGoogle}>Login with GOOGLE</button>
        {/* <h2>{user}</h2> */}
      
        <h1>Login con Facebook</h1>
        <button onClick={loginFacebook}>Login with FACEBOOK</button>
        {/* <h2>{user}</h2> */}
      </div>
    );
};

export default Login;
