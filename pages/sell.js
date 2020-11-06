import { useState } from "react";
import { useRouter } from "next/router";
import { db, auth } from "../firebase/firebase.config";
import styles from "@styles/pages/Sell.module.scss";
import Input from "@components/Input"
import Textarea from "@components/Textarea";
import FileUpload from '../components/FileUpload'
import Button from "@components/Button";
import Link from "next/link";

export default function details () {
  const router = useRouter(); 
  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState([]);
 
  
  const userLogin = auth.currentUser;
  var uid;

  if (userLogin != null) {
    uid = userLogin.uid;
  }


  const handleImageUpload = (url) => {
    setImage([...image, url])
  }

  const addProduct = async (e) => {
    e.preventDefault();

      if (!product.trim()) {
        console.log("escriba un producto");
        return;
      }

      if (!description.trim()) {
        console.log("escriba una descripcion");
        return;
      }

      if (!category.trim()) {
        console.log("escriba una categoria");
        return;
      }

      if (!price.trim()) {
        console.log("escriba el precio");
        return;
      }
    try {
      const newProduct = {        
        userId: uid,
        product: product,
        description: description,
        price: price,
        category: category,
        image: image,        
      };

      console.log(newProduct);

      await db.collection("products").add(newProduct);
      router.push("/sell-publication");
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
          <label>Agrega los detalles del producto</label>
        </div>

        <form onSubmit={addProduct} className={styles.form_client} >
          <Input
            type="text"
            placeholder="Producto"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />
          <Input
            type="text"
            placeholder="$ Precio"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          
          <select
            value={category}
            onChange={(e) => (


              setCategory(e.target.value)
            )}
          >
            <option disabled selected value="">
              -- Elige una Categor&iacute;a
            </option>
            <option value="Hogar">Hogar</option>
            <option value="Bisuteria">Bisuter&iacute;a</option>
            <option value="Instrumentos">Instrumentos Musicales</option>
            <option value="Ropa">Ropa</option>
            <option value="Calzado">Calzado</option>
          </select>
          <Textarea
            className={styles.texTank}
            type="textarea"
            placeholder="Descripci&oacute;n"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Link href="/sell-publication">
            <Button type="submit" style="Continue">          
              Publicar ahora
            </Button>
          </Link>
        </form>

        <div className={styles.takePhoto}>
          <h2>Sube tus fotos</h2>
        </div>

        <div className={styles.Photo}>
          <div>
            <FileUpload onImageUpload={handleImageUpload} />            
          </div>
          <div>
            <FileUpload onImageUpload={handleImageUpload} />
          </div>
        </div>
      </main>
    </>
  );
}