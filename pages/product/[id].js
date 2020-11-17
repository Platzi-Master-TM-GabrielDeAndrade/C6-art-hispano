import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { db } from "../../firebase/firebase.config";
import styles from "../../styles/pages/Product.module.scss";
import ProductImage from "components/ProductImage";
import ProductDescription from "components/ProductDescription";

export default function id () {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState([]);
  const [setError] = useState(null);

  const getProduct = async () => {
    try {
      const query = await db
      .collection("products")
      .where("__name__", "==", id)
      .get();
      const arrayData = query.docs.map((product) => {
        return {
          id: product.id,
          ...product.data(),
        };
      });
      setProduct(arrayData);
      console.log(arrayData);
    } catch (error) {
      setError(error);

    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      {product.map((item) => (
        <p key={item.id}>
          <div className={styles.Main}>
            <section className={styles.MainContainer}>
              <section className={styles.Leftside}>
                <ProductImage type="Leftside" imgUrl={item.image} />                
              </section>
              <section className={styles.MainImageContainer}>
                <ProductImage type="Main" imgUrl={item.image} />
              </section>
              <section className={styles.MainDescriptionContainer}>
                <section className={styles.DescriptionContainer}>
                  <ProductDescription
                    // starsQuantity="3"
                    title={item.product}
                    description={item.description}
                    price={item.price}
                  />
                </section>
              </section>
            </section>
          </div>
        </p>
      ))}
    </>
  );
};