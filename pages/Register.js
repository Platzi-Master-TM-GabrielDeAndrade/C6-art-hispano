import { useState } from "react";
import { auth, db} from "../firebase/firebase.config";
import { useRouter } from "next/router";
import styles from "@styles/pages/SignInRegister.module.scss";
import Input from "components/Input";
import Button from "components/Button";
import Title from "components/Title";
import Label from "components/Label";

export default function Register() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);
  // const [esRegistro, setEsRegistro] = useState(false);
  const router = useRouter();

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

    registrar();
    
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
        router.push("/admin");
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
      <h3>
        <Title text="Registro" />
      </h3>

      <form className={styles.registerContainer} onSubmit={procesarDatos}>
        {error && error}
        <Label text="Email" />
        <Input
          type="email"
          placeholder="Ingrese Email"
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
        <Button className={styles.Button} type="submit">
          Registrar
        </Button>

        <Button
          className={styles.Button}
          type="button"
          // onClick={() => setEsRegistro(!setEsRegistro)}
          onClick={registrar}
        >
          ¿Ya tienes cuenta?
        </Button>
      </form>
    </>
  );
};