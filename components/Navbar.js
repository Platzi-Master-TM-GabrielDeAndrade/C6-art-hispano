import Link from "next/link";
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

          <Link href="/Register">
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