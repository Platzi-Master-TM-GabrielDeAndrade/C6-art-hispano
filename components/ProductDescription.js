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
            <img src="https://www.batidos.cl/wp-content/uploads/2015/12/despacho-gratis.png" alt="Free Shipping" />
            <span>Env&iacute;o Gratis</span>
        </section>
        <section className={styles.Rating}>
            <StarRating></StarRating>
        </section>
        <section className={styles.Quantity}>
            <span>Cantidad</span>
            <span>
                <Button children="+" style="OneMore"></Button>
            </span>
                <span>1</span>
                <span>
                    <Button children="-" style="OneLess"></Button>
                </span>
        </section>
        <section className={styles.Buttons}>
            <Button children="Comprar" style="Buy"></Button>
            <Button children="Agregar al Carrito" style="AddToCart"></Button>
        </section>
            
    </div>

    

);

export default ProductDescription;