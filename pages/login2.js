import { useState } from "react";
import { auth, google } from "../firebase/firebase.config";

const Login = () => {  
  const [user, setUser] = useState(null);

  const loginGoogle = () => {
    auth
      .signInWithPopup(google)
      .then((respuesta) => {
        console.log(respuesta.user);
        setUser(respuesta.user);
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
      </div>
    );
};

export default Login;
