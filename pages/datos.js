import { useState, useEffect} from "react";
import { db } from "../firebase/firebase.config";

function datos() {
  // const [schools, setSchools] = useState([]);
  const [users, setUsers] = useState([]);
  const ref = db.collection("users");

  function getSchools() {
    // setLoading(true);
    ref
      .where('users', '==', currentUserId)
      //.where('title', '==', 'School1') // does not need index
      //.where('score', '<=', 10)    // needs index
      //.orderBy('owner', 'asc')
      //.limit(3)
      .onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setUsers(items);
        // setLoading(false);
      });
  }

  useEffect(() => {
    getSchools();
    // eslint-disable-next-line
  }, []);

  // return (


  // )
}

export default datos;