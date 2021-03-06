import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { db, auth } from "../firebase/firebase.config";
import styles from "@styles/pages/Sell.module.scss";
import Input from "@components/Input"
import Textarea from "@components/Textarea";
import FileUpload from '../components/FileUpload'
import Button from "@components/Button";
// import Link from "next/link";

export default function details () {
  const router = useRouter(); 
  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");  
  const [categories, setCategories] = useState([]);  
  const [image, setImage] = useState([]);
  const [setError] = useState(null);
 
  const userLogin = auth.currentUser;
  var uid;

  console.log(uid);
  if (userLogin != null) {
    uid = userLogin.uid;
  }

  const handleImageUpload = (url) => {
    setImage([...image, url])
  }

  const getCategories = async () => {
    try {
      const query = await db.collection("categories").get();
      const categories = query.docs.map((user) => {
        return {
          id: user.id,
          ...user.data(),
        };
      });

      setCategories(categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);


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
    
      const newProduct = {        
        userId: uid,
        product: product,
        description: description,
        price: price,
        category: category,
        image: image,        
      };

      // console.log(newProduct);

      // db.collection("products").add(newProduct).then( 
      //   (param) => {
      //     console.log(param)
      //     router.push("/sell-publication");
      //   }
      // )

       try {
         await db.collection("products").add(newProduct);         
         router.push("/sell-publication");
       } catch (error) {
         setError(error);
       }

      // console.log(category)
  };

    
  return  (
    <>
      
        <div className={styles.cont_title_details}>
          <h1>Publica tu arte</h1>
        </div>

        <div className={styles.details_title}>
          <label>Agrega los detalles del producto</label>
        </div>
     
     <section className={styles.container_details}>
        <form onSubmit={addProduct} className={styles.form_client}>
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
          {/* Tomar la categoria y buscarla en la bd y obtener uid y guardar */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option disabled selected value="">
              -- Elige una Categor&iacute;a
            </option>

            {categories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          {/* console.log(category) */}
          <Textarea
            className={styles.texTank}
            type="textarea"
            placeholder="Descripci&oacute;n"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
            <Button type="submit" style="Continue">
              Publicar ahora
            </Button>          
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
      </section>
    </>
  );
}