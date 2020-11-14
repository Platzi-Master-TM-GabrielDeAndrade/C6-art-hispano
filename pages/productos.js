import { useState, useEffect } from "react";
import { db } from "../firebase/firebase.config";

export default function Home() {
  const [products, setProducts] = useState([]);
  // const [product, setProduct] = useState("");  
  // const [id, setId] = useState("");

  const getUsers = async () => {
    try {
      const data = await db
        .collection("products")
        .where("__name__", "==", "5UUYYr002rUnHdIPwh2j")
        .get();

      const arrayData = data.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      
      // console(arrayData);
      setProducts(arrayData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

 
  return (
    <>
      <p>Bienvenidos a productos</p>
      {products.map((item) => (
        <p key={item.id}>
          {item.id}

          {item.product}

          {item.price}
        </p>
      ))}
    </>
  );
}
