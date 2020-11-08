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
// import Title from "components/Title";
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
        setUser(result.user);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
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
        setError(err);
      });
  };

  const processData = (e) => {
    e.preventDefault();
    
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
  return (
    <>
      <div className={styles.MainContainer}>
        {error && error}
        <div className={styles.Main}>
          <section className={styles.ContainerLogin}>
            <form className={styles.Container} onSubmit={processData}>
              <h2 className={styles.Title}>Iniciar Sesi&oacute;n</h2>
              {/* {error && error} */}
              <Label className={styles.ContainerLoginLabel} for="email">
                Correo
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Ingrese su correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Label className={styles.ContainerLoginLabel} for="password">
                Contraseña
              </Label>
              <Input
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
                // className={styles.Button}
                style="--Google"
                onClick={loginGoogle}
                title="Iniciar sesi&oacute;n con Google"
              >
                Continuar con Google
              </Button>
              <Label
                className={styles.RecoverPassword}
                title="Recuperar contrase&ntilde;a"
              >
                Recuperar contrase&ntilde;a
              </Label>
            </form>
          </section>
          <section className={styles.ContainerSignup}>
            <Label>¿No tienes cuenta en Art-Hispano?</Label>
            <Button
              style="--Registrate"
              onClick={signup}
              title="Crea tu cuenta"
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