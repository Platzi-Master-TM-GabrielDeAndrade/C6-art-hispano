import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
import { db } from "../firebase/firebase.config";
import styles from "../styles/pages/Index.module.scss";
import ProductCard from "../components/ProductCard";
import LineTitle from "@components/LineTitle";

export default function Home () {
    // const router = useRouter();
    // const { id } = router.query;

    const [product, setProduct] = useState([]);
    const [setError] = useState(null);

     const getProduct = async () => {
       try {
         const data = await db
           .collection("products") 
           .limit(4)                         
           .get();
         const arrayData = data.docs.map((doc) => ({
           id: doc.id,
           ...doc.data(),
         }));
         console.log(arrayData);
         setProduct(arrayData);
       } catch (error) {
         setError(error);
       }
     };

     useEffect(() => {
       getProduct();
     }, []); 
  return (
    <>
      <div className={styles.slider}>
        <div className={styles.carusel}>
          <img src="home.png" alt="" />
        </div>

        <div className={styles.products_container}>
          <div>
            <LineTitle text={"Productos Destacados"} />
            <div className={styles.products_container_info}>
              {product.map((item) => (
                <ProductCard
                  id={item.id}
                  key={item.id}
                  imgUrl={item.image}
                  price={item.price}
                />
              ))}
            </div>
          </div>

          <div className={styles.products_container_oferta}>
            <button>Oferta</button>
            <img
              className={styles.oferta}
              src="ajedrez.png"
              alt="Ajedrez"
              width="80%"
              height="80%"
            />
          </div>
        </div>

        <div className={styles.products_container}>
          <div>
            <LineTitle text={"Recomendados para ti"} />            
            <div className={styles.products_container_info}>
              {product.map((item) => (
                <ProductCard
                  key={item.id}
                  imgUrl={item.image}
                  price={item.price}
                />
              ))}
            </div>
          </div>

          <div className={styles.products_container_oferta}>
            <h2>Instrumentos Musicales</h2>
            <img src="flauta.png" alt="Flauta" width="60%" height="80%" />
          </div>
        </div>

        <div className={styles.products_container}>
          <div>
            <LineTitle text={"Novedades"} />
            <div className={styles.products_container_info}>
              {product.map((item) => (
                <ProductCard
                  key={item.id}
                  imgUrl={item.image}
                  price={item.price}
                />
              ))}
            </div>
          </div>

          <div className={styles.products_container_oferta}>
            <h2>Bisuter&iacute;a</h2>
            <img src="bisuteria.png" alt="" width="80%" height="80%" />
          </div>
        </div>
      </div>
    </>
  );
};
