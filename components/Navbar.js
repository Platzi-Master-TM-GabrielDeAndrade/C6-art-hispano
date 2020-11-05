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
            <img src="logo.svg" alt="logo" className={styles.nav_logo} title="Inicio" />
          </Link>
        </section>

        <section className={styles.nav_mainContainerInputs}>
          <section className={styles.nav_containerInput}>
            <input type="text" placeholder="Busca tu producto ideal..." />
            <button title="Buscar">
              <img src="search.svg" alt="search" />
            </button>
          </section>
            
          <section className={styles.nav_containerTexts}>
            <p title="Categor&iacute;as">Categor&iacute;as</p>
            <p title="Ofertas">Ofertas de la semana</p>
            <p title="Filtrar">Filtrar</p>
          </section>
        </section>

        <section className={styles.nav_containerButton}>
          <Link href= '/sell'>
            <Button title="Vender" style="Sell">Vender</Button>
          </Link>
        </section>

        <section className={styles.nav_icons}>

          <Link href="/cart">
            <img className={styles.nav_iconsImgsCart} src="car.svg" alt="Carrito" title="Carrito" />
          </Link>
          <img className={styles.nav_iconsImgs} src="favourite.svg" alt="Favoritos" title="Favoritos" />
          <img
            className={styles.nav_iconsImgs}
            src="notificaciones.svg"
            alt="Notificaciones"
            title="Notificaciones"
          />
          <Link href="/login">
            <img className={styles.nav_userImg} src="user.svg" alt="user" title="Perfil" />
          </Link>
        </section>

      </nav>
    </header>

  ) : (
    <p className={styles.when_loading}>Cargando tus productos favoritos...</p>
  );
}