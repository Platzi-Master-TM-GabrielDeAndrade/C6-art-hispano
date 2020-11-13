import { useState, useEffect } from "react";
import { db } from "../firebase/firebase.config";
import styles from "../styles/pages/Product.module.scss";
import ProductImage from "components/ProductImage";
import ProductDescription from "components/ProductDescription";

export default function Product() {
  const [product, setProduct] = useState("");
  const [description] = useState("");
  const [price] = useState("");
  const [image] = useState([]);

  const getProduct = async () => {
    try {
      const query = await db.collection("products").get();
      const datos = query.docs.map((product) => {
        return {
          id: product.id,
          ...product.data(),
        };
      });

      setProduct(datos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <div className={styles.Main}>
        <section className={styles.MainContainer}>
          <section className={styles.Leftside}>            
            <ProductImage
              type="Leftside"
              imgUrl="https://i.pinimg.com/originals/ce/16/bd/ce16bd6d2bdb6d59773a51ec8bade190.png"
            />
          </section>
          <section className={styles.MainImageContainer}>
            <ProductImage type="Main" imgUrl={image[0]} />
          </section>
          <section className={styles.MainDescriptionContainer}>
            <section className={styles.DescriptionContainer}>
              <ProductDescription
                starsQuantity="3"
                title={product}
                description={description}
                price={price}
              />
            </section>
          </section>
        </section>
      </div>
    </>
  );
}