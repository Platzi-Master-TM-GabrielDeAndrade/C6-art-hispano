import { useState } from "react";
import { auth, db} from "../firebase/firebase.config";


export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);
  const [esRegistro, setEsRegistro] = useState(true);

  const procesarDatos = (e) => {
    e.preventDefault();
    if (!email.trim() || !pass.trim()) {
      console.log("Datos vacíos email!");
      setError("Datos vacíos email!");
      return;
    }
    if (!pass.trim()) {
      console.log("Datos vacíos pass!");
      setError("Datos vacíos pass!");
      return;
    }
    if (pass.length < 6) {
      console.log("6 o más carácteres");
      setError("6 o más carácteres en pass");
      return;
    }
    console.log("correcto...");
    setError(null);

    if (esRegistro) {
      registrar();
    }
    // } else {
    //   login();
    // }
  };

    const registrar = async() => {
      try {        
        const res = await auth.createUserWithEmailAndPassword(email, pass)         
        console.log(res)
        await db.collection('users').doc(res.user.email).set({
          email:res.user.email,
          uid:res.user.uid
        })
        // Todo : user.sendEmailVerification() -clase 7 y 8 firebase
        setEmail('')
        setPass("");
        setError(null);
        
      } catch (error) {
        console.log(error)
        if(error.code === "auth/email-already-in-use"){
          setError("El email ya está registrado")          
        }
        if (error.code === "auth/invalid-email") {
          setError("El email no es valido")          
        }
      }      
    }
        
  return (
    <>
      <h3>{esRegistro ? "Registro" : "Login"}</h3>
      <form onSubmit={procesarDatos}>
        {error && error}
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
        <button
          type="submit">
          {esRegistro ? "Registrar" : "Acceder"}
        </button>
        <button type="button" onClick={() => setEsRegistro(!setEsRegistro)}>
          {esRegistro ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}
        </button>
      </form>
    </>
  );
};


