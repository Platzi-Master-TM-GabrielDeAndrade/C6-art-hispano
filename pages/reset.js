import { useState } from "react";
import { auth } from "../firebase/firebase.config";
import { useRouter } from "next/router";
import styles from "@styles/pages/Login.module.scss";
import Input from "components/Input";
import Button from "components/Button";
import Label from "components/Label";

const Reset = () => {
  const [email, setEmail] = useState("");
    const [error, setError] = useState(null);
    const router = useRouter();

    const processData = (e) => {
      e.preventDefault();
      if (!email.trim()) {
        setError("Completa este campo!");
        return;
      }

      setError(null);     
      
      recover();
    };

    const recover = async () => {
      try {
        const res = await auth.sendPasswordResetEmail(email);
        console.log(res);
        setEmail("");        
        setError(null);
        router.push("/login");
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

  return (
    <>
      <div className={styles.MainContainer}>
        {error && <div className={styles.ContainerError}>{error}</div>}
        <div className={styles.Main}>
          <section className={styles.ContainerLogin}>
            <form className={styles.Container} onSubmit={processData}>
              <h2 className={styles.Title}>Reiniciar contraseña</h2>
              <Label>
                Correo
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Ingrese su correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              
              <Button
                param={true}               
                style="--Brand"
                type="submit"
                // onClick={() => login}
                title="Iniciar sesi&oacute;n"
              >
                Reiniciar contraseña
              </Button>

            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default Reset;
