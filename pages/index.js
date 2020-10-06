import { useState, useEffect } from 'react';
import { firestore } from '../firebase/firebase.config';

const Index = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const query = await firestore.collection('users').get();
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
    <div>
      <p>Bienvenidos a Art-Hixpano</p>
      {users.map((user) => (
        <p key={user.id}>
          {user.email} {user.password}
        </p>
      ))}
    </div>
  );
};

export default Index;
