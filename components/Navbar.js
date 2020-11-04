import Link from "next/link";
import { auth } from "../firebase/firebase.config";
import { useEffect, useState } from "react";
import styles from "../styles/components/Navbar.module.scss";
import Button from "components/Button"

export default function Navbar() {
  const [firebaseUser, setFirebaseUser] = useState(false);

    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        console.log(user);
        if (user) {
          setFirebaseUser(user);
        } else {
          setFirebaseUser(null);
        }
      });
    }, []);
  return firebaseUser !== false ? (
    <header>
      <nav className={styles.nav_container}>
        <section className={styles.nav_containerLogo}>
          <Link href="/">
            <img src="logo.svg" alt="logo" className={styles.nav_logo} />
          </Link>
        </section>

        <section className={styles.nav_mainContainerInputs}>
          <section className={styles.nav_containerInput}>
            <input type="text" />
            <button>
              <img src="search.svg" alt="" width="15" height="15" />
            </button>
          </section>
            
          <section className={styles.nav_containerTexts}>
            <p>Categor&iacute;a</p>
            <p>Ofertas de la semana</p>
            <p>Filtrar</p>
          </section>
        </section>

        <section className={styles.nav_containerButton}>
          <Link href= '/sell'>
            <Button children="Vender" style="Sell" />            
          </Link>
        </section>

        <section className={styles.nav_icons}>

          <Link href="/cart">
            <img className={styles.nav_iconsImgsCart} src="car.svg" alt="Carrito" />
          </Link>
          <img className={styles.nav_iconsImgs} src="favourite.svg" alt="Favorito" />
          <img
            className={styles.nav_iconsImgs}
            src="notificaciones.svg"
            alt="Notificaciones"
          />
          <Link href="/login">
            <img className={styles.nav_userImg} src="user.svg" alt="user" />
          </Link>
        </section>

      </nav>
    </header>

  ) : (
    <p className={styles.when_loading}>Cargando tus productos favoritos...</p>
  );
}