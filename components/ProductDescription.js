import styles from "../styles/components/ProductDescription.module.scss";
import Button from "components/Button";
import StarRating from "components/StarRating";
import Link from "next/link";
import React from 'react';

import AddUnit from "./addUnit";

const ProductDescription = ( { title, description, price, starsQuantity } ) => {

return (
      <div>
        <section className={styles.DescriptionContent}>
          <h1 className={styles.Title}>{title}</h1>
          <p className={styles.Description}>{description}</p>
          <h2 className={styles.Price}>$ {price}</h2>
        </section>
        <section className={styles.FreeShipping}>
          <img src="car.png" alt="Free Shipping" title="Env&iacute;o gratis" />
          <span>Env&iacute;o Gratis</span>
        </section>
        <section className={styles.Rating}>
          <StarRating />
        </section>
        <section className={styles.Quantity}>
          <span>Cantidad</span>
          <span>
            <AddUnit/>
          </span> 
        </section>
        <section className={styles.Buttons}>
          <Link href="/shipping">
            <Button style="Buy" title="Comprar">
              Comprar
            </Button>
          </Link>

          <Link href="/Cart">
            <Button style="AddToCart" title="Agregar al carrito">
              Agregar al Carrito
            </Button>
          </Link>
        </section>
      </div>
    ); 
};

export default ProductDescription;