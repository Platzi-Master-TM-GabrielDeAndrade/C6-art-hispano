import { useState, useEffect} from "react";
import { db } from "../firebase/firebase.config";
import styles from "@styles/pages/Users.module.scss";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  const [modoEdicion, setModoEdicion] = useState(false);
  const [id, setId] = useState('');

  const getUsers = async () => {
    try {
      const query = await db.collection("users").get();
      const users = query.docs.map((user) => {
        return {
          id: user.id,
          ...user.data(),
        };
      });

      setUsers(users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const agregar = async (e) => {
    e.preventDefault(); 

    if (!user.trim()) {
      console.log("escriba un email");
      return;
    }

    try {
      const newUser = {
        email: user        
      };

      console.log(newUser); 

      const data = await db.collection("users").add(newUser);

      setUsers([
        ...users,
        { ...newUser, id: data.id }
      ]);

      setUser('');      
    } catch (error) {
      console.log(error);
    }
  };
  
  // NO borrar
  // const eliminar = async (id) => {
  //   try {      
  //     await db.collection('users').doc(id).delete()
  //     const arrayFiltrado = users.filter(item => item.id !== id)
  //     setUsers(arrayFiltrado);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const activarEdicion = (item) => {
    setModoEdicion(true)
    setUser(item.email)
    setId(item.id);
  }

  const editar = async(e) => {
    e.preventDefault()    
    if (!user.trim()) {
      console.log('vacio')      
    }
    try {
      await db.collection("users").doc(id).update({
        email: user.email
      }); 
      const arrayFiltrado = users.map(item => (
        item.id !== id ? {id: item.id, email: user} : item
      ))
      setUsers(arrayFiltrado);
      setModoEdicion(false);
      setUser('');
      setId();
    } catch (error) {
       console.log(error);
    }
  }
  return (
    <>
      <p>Bienvenidos a Usuarios</p>
      {users.map((item) => (
        <p key={item.id}>
          {item.email} {item.password}
        </p>
      ))}
      <h3>{modoEdicion ? "Editar Usuario" : "Agregar Usuario"}</h3>
      <form onSubmit={ modoEdicion ? editar : agregar }>
        <input
          type="text"
          id="email"
          placeholder="Ingrese email"
          onChange={(e) => setUser(e.target.value)}
          value={user}
        />
        <input
          type="text"
          id="password"
          placeholder="Ingrese contraseña"
          onChange={(e) => setUser(e.target.value)}
          value={user}
        />
        <button className={styles.btn} type="submit ">
          {modoEdicion ? "Editar" : "Agregar"}
        </button>
      </form>
    </>
  );
};