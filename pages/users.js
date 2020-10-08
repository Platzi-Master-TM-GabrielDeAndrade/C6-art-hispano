import { useState, useEffect } from "react";
import { firestore } from "../firebase/firebase.config";
import Navbar from "../components/Navbar";

const Home = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const query = await firestore.collection("users").get();
    const users = query.docs.map((user) => {
      return {
        id: user.id,
        ...user.data(),
      };
    });

    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Navbar />
      <p>Bienvenidos a Usuarios</p>
      {users.map((user) => (
        <p key={user.id}>
          {user.email} {user.password}
        </p>
      ))}
    </>
  );
};

export default Home;
