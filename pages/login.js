import { useState } from "react";
import { auth } from "../firebase/firebase.config";


export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);

  const registrarUsuario = (e) => {
    e.preventDefault();
     if (email.trim() || pass.trim()) {
       //  registrar();
       auth.createUserWithEmailAndPassword(email, pass).then(
         (res) => alert("Usuario Registrado")

         // Todo : user.sendEmailVerification() -clase 7 y 8 firebase
       );
     }
    if (!email.trim()) {
      alert("escriba un email");
      return
    }
  
    if (!pass.trim()) {
      alert("escriba un password");      
    }   
  };


  // if (esRegistro) {
  //   registrar();
  // } else {
  //   login();
  // }

  // const login = React.useCallback(async () => {
  //   try {
  //     const res = await auth.signInWithEmailAndPassword(email, pass);
  //     console.log(res.user);
  //     setEmail("");
  //     setPass("");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [email, pass]);

  // const registrar = React.useCallback(async () => {
  //   try {
  //     const res = await auth.createUserWithEmailAndPassword(email, pass);
  //     console.log(res.user);
  //     await firestore.collection("users").doc(res.user.email).set({
  //       email: res.user.email,
  //       uid: res.user.uid,
  //     });
  //     await firestore.collection(res.user.uid).add({
  //       name: "Tarea de ejemplo",
  //       fecha: Date.now(),
  //     });
  //     setEmail("");
  //     setPass("");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [email, pass]);

  return (
    <>
      <h3>Acceso o registro de usuarios</h3>
      <form onSubmit={registrarUsuario}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Ingrese Email"
          value={email}
        />
        <input
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="Ingrese un password"
          value={pass}
        />
        {/* <button type="submit">Registrarse</button> */}
        <input type="submit" value="Registrarse" /> 
        <input type="submit" value="¿Ya tienes cuenta?" />
      </form>
    </>
  );
};


