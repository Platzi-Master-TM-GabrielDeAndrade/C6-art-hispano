import { auth } from "../firebase/firebase.config";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Button from "components/Button";
import styles from "styles/pages/Admin.module.scss";
import Input from "components/Input";



export default function Admin() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (auth.currentUser) {
      // console.log("Existe un usuario");
      setUser(auth.currentUser);
    } else {
      // console.log("No existe un usuario");
      router.push("/login");
    }
  }, [router]);

    const cerrarSesion = () =>  {
        auth.signOut()
        router.push("/login"); 
    }
  return (
    <div className={styles.Main}>
      {/* <h3>Usuario: {user && user.email}</h3> */}

      <section className={styles.MainContainer}>
        <section className={styles.PicContainer}>
          <p>Foto</p>
          <img src="user.svg" alt="Profile Picture" />
          <Button style="UploadPhoto">Subir foto</Button>
        </section>
        <section className={styles.DataContainer}>
          <h3>Informaci&oacute;n personal</h3>
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="contact">Contacto</label>
          <input type="tel" name="contact" id="contact" />
          <label htmlFor="email">Correo</label>
          <input type="email" name="email" id="email" defaultValue={user && user.email} disabled />
        </section>
        <section className={styles.BiographyContainer}>
          <label htmlFor="biography">Biograf&iacute;a</label>
          <input type="text" name="biography" id="biography" />
        </section>
        <section className={styles.HistoryContainer}>
          <h3>Compras realizadas</h3>
          <p>20 Compras</p>
          <h3>Beneficios</h3>
          <p>Env&iacute;os Gratis a partir de $100.000</p>
        </section>
        <section className={styles.ButtonsContainer}>
          <Button
            style="Logout"
            onClick={() => {
              cerrarSesion();
            }}
          >
            Cerrar Sesi&oacute;n
          </Button>
          <Button style="Continue">Guardar Cambios</Button>
        </section>
      </section>
      
    </div>
  );
}
