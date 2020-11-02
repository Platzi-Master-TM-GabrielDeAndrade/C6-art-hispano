import styles from "../styles/components/ProductDescription.module.scss";
import Button from "components/Button";
import StarRating from "components/StarRating";


const ProductDescription = ( { title, description, price, starsQuantity } ) => (    

    <div>
        <section className={styles.DescriptionContent}>
            <h1 className={styles.Title}>{title}</h1>
            <p className={styles.Description}>{description}</p>
            <h2 className={styles.Price}>${price}</h2>
        </section>
        <section className={styles.FreeShipping}>
            <img src="car.png" alt="Free Shipping" />
            <span>Env&iacute;o Gratis</span>
        </section>
        <section className={styles.Rating}>
            <StarRating />
        </section>
        <section className={styles.Quantity}>
            <span>Cantidad</span>
            <span>
                <Button children="+" style="OneMore" />
            </span>
                <span>1</span>
                <span>
                    <Button children="-" style="OneLess" />
                </span>
        </section>
        <section className={styles.Buttons}>
            <Button children="Comprar" style="Buy" />
            <Button children="Agregar al Carrito" style="AddToCart" />
        </section>
            
    </div>

    

);

export default ProductDescription;