import { useState } from "react";
import {
  auth,
  googleProvider,
  facebookProvider,
} from "../firebase/firebase.config";
import { useRouter } from "next/router";
import styles from "@styles/pages/Login.module.scss";
import Input from "components/Input";
import Button from "components/Button";
import Title from "components/Title";
import Label from "components/Label";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [setUser] = useState(null);
  const [error, setError] = useState(null);

  const router = useRouter();

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

  const signup = () => {
    router.push("/signup");
  } 
  return (
    <>
      <div className={styles.Main}>
        <div className={styles.ContainerBody}>
          <form className={styles.Container} onSubmit={procesarDatos}>
            <h3>
              <Title text="Iniciar Sesión" />
            </h3>
            {error && error}
            <Label text="Correo" />
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
            {/* <Button className={styles} type="submit">
              Empezar
            </Button> */}

            <Button
              param={true}
              className={styles.Button}
              type="submit"
              onClick={() => login}
            >
              {" "}
              Empezar
            </Button>

            <Button className={styles.ButtonFacebook} onClick={loginFacebook}>
              Facebook
            </Button>

            <Button
              param={false}
              className={styles.ButtonGoogle}
              onClick={loginGoogle}
            >
              Google
            </Button>
            <Label text="Recuperar contraseña" />
          </form>
        </div>
        <div className={styles.ContainerFooter}>
          <Label text="¿No tienes cuenta en Art-Hispano" />
          <Button onClick={signup}>Registrate</Button>
        </div>
      </div>
    </>
  );
};

export default Login;