import Link from "next/link";
import styles from "../styles/components/Navbar.module.scss";

export default function Navbar() {
  return (
    <header>
      <nav className = {styles.nav_container}>

        <div className = {styles.nav_containerLogo}>
          <Link href="/">
          <img src="logo.svg" alt="logo" className = {styles.nav_logo}/>
          </Link>     
        </div>

        <div className = {styles.nav_inputs}>  
          <input type="text" />
          <button><img src="search.svg" alt="" width="15" height="15" /></button>
          <p>Categotira</p>
          <p>Ofertas de la semana</p>
          <p>Filtrar</p>
        </div>
        
       <div className = {styles.nav_icons}>
          <button type = "text" value="hola" > Vender</button>
          <img src="carrito.svg" alt="Carrito" width="30" height="30"/>
          <img src="favorito.svg" alt="Favorito" width="30" height="30"/>
          <img src="notificaciones.svg" alt="Notificaciones" width="30" height="30"/>
          <img src="user.svg" alt="user" width="70" height="80"/>
        </div>
            
        </nav>
      </header>
    );
  }
import { auth } from "../firebase/firebase.config";
import { useEffect, useState } from "react";

const Navbar = () => {
  
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
    <div>
      <nav>
        <menu>
          <Link href="/">
            <a>Home</a>
          </Link>

          <Link href="/admin">
            <a>Admin</a>
          </Link>

          <Link href="/signup">
            <a>Registrar</a>
          </Link>

          <Link href="/login">
            <a>Ingresar</a>
          </Link>

          {/* <Link href="/about">
            <a>About</a>
          </Link> */}

          <Link href="/users">
            <a>Users</a>
          </Link>

          {/* <Link href="/login2">
            <a>Login2</a>
          </Link> */}
          <Link href="/categorias">
            <a>Categorias</a>
          </Link>
        </menu>
      </nav>
    </div>
  ) : (
    <p>Loading ..</p>
  );
}

export default Navbar;
