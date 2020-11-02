import Link from "next/link";
import { auth } from "../firebase/firebase.config";
import { useEffect, useState } from "react";
import styles from "../styles/components/Navbar.module.scss";

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
        <div className={styles.nav_containerLogo}>
          <Link href="/">
            <img src="logo.svg" alt="logo" className={styles.nav_logo} />
          </Link>
        </div>

        <div className={styles.nav_inputs}>
          <input type="text" />
          <button>
            <img src="search.svg" alt="" width="15" height="15" />
          </button>
          <p>Categor&iacute;a</p>
          <p>Ofertas de la semana</p>
          <p>Filtrar</p>
        </div>

        <div className={styles.nav_icons}>
          <button type="text" value="">
            {" "}
            <Link href= '/sell'>
            Vender
            
        </Link>
          </button>
          <img src="car.svg" alt="Carrito" width="30" height="30" />
          <img src="favourite.svg" alt="Favorito" width="30" height="30" />
          <img
            src="notificaciones.svg"
            alt="Notificaciones"
            width="30"
            height="30"
          />
        <Link href="/login">
            <img src="user.svg" alt="user" width="70" height="80" />
          </Link>
        </div>
      </nav>
    </header>
  ) : (
    <p>Cargando tus productos favoritos...</p>
  );
}