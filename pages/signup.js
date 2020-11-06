import { useState } from "react";
import { auth, db } from "../firebase/firebase.config";
import { useRouter } from "next/router";
import styles from "@styles/pages/Signup.module.scss";
import Input from "components/Input";
import Button from "components/Button";
import Title from "components/Title";
import Label from "components/Label";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);
  // const [esRegistro, setEsRegistro] = useState(false);
  const router = useRouter();

  const procesarDatos = (e) => {
    e.preventDefault();
    if (!email.trim() || !pass.trim()) {
      console.log("Datos vacíos email!");
      setError("Por favor, ingrese un correo");
      return;
    }
    if (!pass.trim()) {
      console.log("Datos vacíos pass!");
      setError("Datos vacíos pass!");
      return;
    }
    if (pass.length < 6) {
      console.log("6 o más carácteres");
      setError("Su contraseña debe tener 6 o más carácteres.");
      return;
    }
    console.log("correcto...");
    setError(null);

    registrar();
  };

  const Login =  () => {    
      router.push("/admin");    
  };
  const registrar = async () => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, pass);
      console.log(res);
      await db.collection("users").doc(res.user.email).set({
        email: res.user.email,
        uid: res.user.uid,
      });
      // Todo : user.sendEmailVerification() -clase 7 y 8 firebase
      setEmail("");
      setPass("");
      setError(null);
      router.push("/admin");
    } catch (error) {
      console.log(error);
      if (error.code === "auth/email-already-in-use") {
        setError("El email ya está registrado");
      }
      if (error.code === "auth/invalid-email") {
        setError("El email no es válido");
      }
    }
  };

  return (
    <>
      <div className={styles.MainContainer}>
        <div className={styles.Main}>
          <form className={styles.FormContainer} onSubmit={procesarDatos}>
            <h2 className={styles.Title}>
              Registro
            </h2>

            {error && error}

            <label className={styles.FormContainerLabel} for="email">Correo</label>
            <input
              id="email"
              type="email"
              placeholder="Ingrese su correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className={styles.FormContainerLabel} for="password">Contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="Ingrese su contrase&ntilde;a"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />

            <Button 
              style="--Brand" 
              type="submit"
              title="Crea tu cuenta"
            >
              Registrar
            </Button>

            {/* <Button
              style="--Account"
              type="button"
              // onClick={() => setEsRegistro(!setEsRegistro)}
              onClick={Login}
              // router.push("/admin");
            >
              ¿Ya tienes cuenta?
            </Button> */}

            <label className={styles.AlreadyAnAccount} onClick={Login} title="Inicia sesi&oacute;n">
              ¿Ya tienes cuenta?
            </label>
          </form>
        </div>
      </div>
    </>
  );
}
