import React from 'react'
import styles from "../styles/components/Productcard.module.scss";


export default function ProductCard({imgUrl, price}) {
    return (
        <div>
            <div className ={styles.products_container_card}>                 
                <img src={imgUrl}  alt=""/>
                
                <div className ={styles.products_container_icons}>
                    <p>{price}</p>
                    <button>
                        <img src="car.svg" alt="Carrito"/>
                    </button>
                    <button>
                        <img src="/favourite.svg" alt=""/>
                    </button>
                </div>             
            </div>
        </div>
    )
}

