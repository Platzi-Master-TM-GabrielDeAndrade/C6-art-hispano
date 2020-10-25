import { useState } from "react";
import { auth } from "../firebase/firebase.config";
import { useRouter } from "next/router";
import styles from "@styles/pages/SignInRegister.module.scss";
import Input from "components/Input";
import Button from "components/Button";
import Title from "components/Title";
import Label from "components/Label";

export default function Login() {  
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);

  const router = useRouter();

  const procesarDatos = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(pass);
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

    login();
  };

  const login = async () => {
    try {
      const res = await auth.signInWithEmailAndPassword(email, pass);
      console.log(res);
      setEmail("");
      setPass("");
      setError(null);
      router.push("/admin");
    } catch (error) {
      console.log(error);
      if (error.code === "auth/user-not-found") {
        setError("Usuario no encontrado");
      }
      if (error.code === "auth/invalid-email") {
        setError("Email no corresponde");
      }
      if (error.code === "auth/wrong-password") {
        setError("Contraseña incorrecta");
      }
    }
  };

  return (
    <>
      <h3>
        <Title text="Login" />
      </h3>
      <div className={styles.loginContainer}>
        <form onSubmit={procesarDatos}>
          {error && error}
          <Label text="Email" />
          <Input
            type="email"
            placeholder="Ingrese su email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}            
          />
          <Label text="Contraseña" />
          <Input
            type="password"
            placeholder="Ingrese un password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}            
          />
          <Button className={styles.Button} 
            type="submit">
            Ingresar
          </Button>

          {/* <Button className={styles.Button} type="submit" onClick={() => login}>
          {" "}
          ¿No tienes cuenta?
        </Button> */}
        </form>
      </div>
    </>
  );
}