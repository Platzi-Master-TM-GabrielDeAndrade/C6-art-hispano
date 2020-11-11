import { useState } from "react";
import {
  auth,
  googleProvider, 
  facebookProvider,
} from "../firebase/firebase.config";
import { useRouter } from "next/router";
import styles from "@styles/pages/Login.module.scss";
import Link from "next/link";
import Input from "components/Input";
import Button from "components/Button";
import Label from "components/Label";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [setUser] = useState(null);
  const [error, setError] = useState(null);

  const router = useRouter();

  // const loginGoogle = () => {
  //   auth
  //     .signInWithPopup(googleProvider)
  //     .then((result) => {        
  //       setUser(result.user);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setError(err);
  //     });
  // };


  const loginGoogle = async () => {
    try {
      const res = await auth.signInWithPopup(googleProvider);
      console.log(res.user);
      setUser(res.user);
      router.push("/admin");
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };
  const loginFacebook = async  () => {
    try {
      const res = await auth.signInWithPopup(facebookProvider);
      console.log(res.user);
      setUser(res.user);
      // router.push("/admin");
    } catch (error) {
     console.log(error);
     setError(error);
    }   
  };

  const processData = (e) => {
    e.preventDefault();
    
    setError(null);

    if (!email.trim()) {      
      setError("Completa este campo!");
      return;
    }

    if (!pass.trim()) {
      setError("Introduce una contraseña!");
      return;
    }

    if (pass.length < 6) {      
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }
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
 
  // const reset = () => {
  //   router.push("/reset");
  // };

  return (
    <>
      <div className={styles.MainContainer}>
        {error && <div className={styles.ContainerError}>{error}</div>}
        <div className={styles.Main}>
          <section className={styles.ContainerLogin}>
            <form className={styles.Container} onSubmit={processData}>
              <h2 className={styles.Title}>Iniciar sesi&oacute;n</h2>
              <Label>Correo</Label>
              <Input
                id="email"
                type="email"
                placeholder="Ingrese su correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Label>Contraseña</Label>
              <Input
                id="password"
                type="password"
                placeholder="Ingrese su contrase&ntilde;a"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />

              <Button
                param={true}
                style="--Brand"
                type="submit"
                onClick={() => login}
                title="Iniciar sesi&oacute;n"
              >
                {" "}
                Empezar
              </Button>

              <Button
                // className={styles.Button}
                style="--Facebook"
                onClick={loginFacebook}
                title="Iniciar sesi&oacute;n con Facebook"
              >
                {" "}
                Continuar con Facebook
              </Button>

              <Button
                style="--Google"
                onClick={loginGoogle}
                title="Iniciar sesi&oacute;n con Google"
              >
                Continuar con Google
              </Button>
              
              <Link href="/reset">
                <a 
                // style="--RecoverPassword"
                >
                  Recuperar contrase&ntilde;a
                </a>
              </Link>
            </form>
          </section>
          <section className={styles.ContainerSignup}>
            <Button
              style="--Registrate"
              onClick={signup}
              title="Crea tu cuenta"
            >
              ¿No tienes cuenta en Art-Hispano?
            </Button>
          </section>
        </div>
      </div>
    </>
  );
};

export default Login;