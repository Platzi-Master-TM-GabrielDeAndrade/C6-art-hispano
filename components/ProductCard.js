import React from 'react'
import styles from "../styles/components/Productcard.module.scss";
import Link from "next/link";


export default function ProductCard({id, imgUrl, price, productName}) {

    return (
      <div>
        <div className={styles.products_container_card}>
          <Link href={`/product/${id}`}>
            <img src={imgUrl} alt={productName} />
          </Link>

          <div className={styles.products_container_icons}>
            <p>${price}</p>
            <button>
              <img src="car.svg" alt="Carrito" />
            </button>
            <button>
              <img src="/favourite.svg" alt="Favorito" />
            </button>
          </div>
        </div>
      </div>
    );
}

