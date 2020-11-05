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
  const processData = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(pass);
    if (!email.trim() || !pass.trim()) {
      console.log("Datos vacíos email y/o contraseña!");
      setError("Datos vacíos email y/o contraseña!");
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
    console.log("Correcto...");
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
  };
  return (
    <>
    <div className={styles.MainContainer}>
      <div className={styles.Main}>
        <section className={styles.ContainerLogin}>
          <form className={styles.Container} onSubmit={processData}>
            <h2 className={styles.Title}>
              Iniciar Sesi&oacute;n
            </h2>
            {error && error}
            <label className={styles.ContainerLoginLabel} for="email">Correo</label>
            <input
              id="email"
              type="email"
              placeholder="Ingrese su email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className={styles.ContainerLoginLabel} for="password">Contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="Ingrese su contrase&ntilde;a"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />

            <Button
              param={true}
              // className={styles.Button}
              style="--Brand"
              type="submit"
              onClick={() => login}
            >
              {" "}
              Empezar
            </Button>

            <Button
              // className={styles.Button}
              style="--Facebook"
              onClick={loginFacebook}
            >
              {" "}
              Continuar con Facebook
            </Button>
            
            <Button
              // className={styles.Button}
              style="--Google"
              onClick={loginGoogle}
            >
              Continuar con Google
            </Button>
            <label className={styles.RecoverPassword}>
              Recuperar contrase&ntilde;a
            </label>
          </form>
        </section>
        <section className={styles.ContainerSignup}>
          <label>
            ¿No tienes cuenta en Art-Hispano?
          </label>
          <Button
            style="--Registrate"            
            onClick={signup}
          >
            Reg&iacute;strate
          </Button>
        </section>
      </div>
    </div>
      
    </>
  );
};

export default Login;