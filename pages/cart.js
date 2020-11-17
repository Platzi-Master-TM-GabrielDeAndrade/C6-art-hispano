import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { db } from "../firebase/firebase.config";
import styles from "../styles/pages/Cart.module.scss";
import ProductCart from "../components/ProductCart";
import Button from "../components/Button";
import Link from "next/link";

export default function Cart () {

  const router = useRouter();
  const { id } = router.query;

  const getProduct = async () => {
    try {
      const data = await db.collection("products").limit(4).get();
      const arrayData = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(arrayData);
      setProduct(arrayData);
    } catch (error) {
      // setError(error);
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
    return (
      <>
        {product.map((item) => (
          <ProductCard
            id={item.id}
            key={item.id}
            title={item.title}
            description={description}
            quantity={quantity}
          />
        ))}
        {/* <ProductCart
          id={item.id}
          title={title}
          description={description}
          quantity={quantity}
        /> */}
        {/* <ProductCart 
            title="Conjunto de Collar y Aretes Milenarios de Ruinas en Cartagena" 
            description="Antigüedades con más de 1000 años de haberse encontrado. Conformado por 39 piedras preciosas del valle más cercano al templo del noroeste de Cartagena. Encontrado en 1684 por exploradores españoles." price={24.37} imgUrl="https://i.pinimg.com/originals/ce/16/bd/ce16bd6d2bdb6d59773a51ec8bade190.png" 
            quantity={4} 
          /> */}

        <section className={styles.GridContainer}>
          <section className={styles.Container}>
            <p className={styles.Total}>Total: ${40000}</p>
            <Link href="/shipping">
              <Button style="Continue" title="Ir a env&iacute;o">
                Continuar Comprar
              </Button>
            </Link>
          </section>
        </section>
      </>
    );
  };
