import styles from "../styles/components/ProductShipping.module.scss";
import Button from "components/Button";


const ProductShipping = ( { title, description, price, imgUrl, quantity } ) => (    

    <div>
        <section className={styles.MainContainer}>
            <section className={styles.ImageContainer}>
                <img src={imgUrl} alt="Product Image"></img>
            </section>
            <section className={styles.DescriptionContainer}>
                <h3 className={styles.Name}>{title}</h3>
                <p className={styles.Description}>{description}</p>
                <Button children="Eliminar" style="RemoveShipping" />
            </section>
            <section className={styles.QuantityPriceContainer}>
                <p className={styles.Quantity}>Cantidad: {quantity}</p>
                <p className={styles.Total}>${price*quantity}</p>
            </section>
        </section>
            
    </div>
);

export default ProductShipping;