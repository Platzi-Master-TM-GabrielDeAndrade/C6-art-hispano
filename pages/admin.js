import { auth } from "../firebase/firebase.config";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Button from "components/Button";
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
    <div>
      <h3>Usuario: {user && user.email}</h3>
      
      <Button
        onClick={() => {
          cerrarSesion();
        }}
      >
        Cerrar Sesión
      </Button>
    </div>
  );
}
