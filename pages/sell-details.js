import { useState } from "react";
import { db } from "../firebase/firebase.config";
// import Link from "next/link";
import styles from "@styles/pages/Sell.module.scss";
import Input from "@components/Input"
import Textarea from "@components/Textarea";
// import FileUpload from '../components/FileUpload'

export default function details () {
  // const [products, setProducts] = useState([]);

  // const [productId, setProductId] = useState("");
  // const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  // const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  // const [image, setImage] = useState("");
  // const [itemsId, setItemsId] = useState("");


  //  useEffect(() => {
  //    getProducts();
  //  }, []);

   const agregar = async (e) => {
     e.preventDefault();
    
     try {
       const newProduct = {
         productId: "1",
         userId: "1",
         name: name,
         // brand: brand,
         description: description,
         price: price,
         category: category,
         // image: image,
         // itemsId: itemsId
       };

       console.log(newProduct);

       await db.collection("products").add(newProduct);

      //  setProducts([...name, { ...newProduct, id: data.id }]);

      //  setProductId("");

     } catch (error) {
       console.log(error);
     }
   };
  
  return (
    <>
      <main className={styles.container_details}>
        <div className={styles.cont_title_details}>
          <h1>Publica tu arte</h1>
        </div>

        <div className={styles.details_title}>
          <label>Agrega los detalles de producto</label>
        </div>

        <form onSubmit={agregar} className={styles.form_client}>
          <Input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            type="text"
            placeholder="$ Precio"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <Textarea
            className={styles.texTank}
            type="textarea"
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button type="submit">Publicar ahora</button>
        </form>

        <div className={styles.register}>
          {/* <Link href="/sell-publication">
            <button type="submit">Publicar ahora</button>
          </Link> */}
        </div>
      </main>
    </>
  );
}