import { auth } from "../firebase/firebase.config";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Admin() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if(auth.currentUser)  {
      console.log("Existe un usuario")
      setUser(auth.currentUser); 
    }else {
      console.log("NO existe un usuario");
      router.push("/login");
    }
  }, []);

    const cerrarSesion = () =>  {
        auth.signOut()
        router.push("/login");
    }
  return (
    <div>
      <p>Esta es la pagina Ruta protegida</p>
      {
        user && 
          user.email
      }

      <button
        onClick={() => {
          cerrarSesion();
        }}
      >
        Cerrar Sesion
      </button>
    </div>
  );
}
