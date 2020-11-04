import styles from "../styles/components/ProductDescription.module.scss";
import Button from "components/Button";
import StarRating from "components/StarRating";
import Link from "next/link";


const ProductDescription = ( { title, description, price, quantity=1, starsQuantity } ) => {

    

    const addOne = () => {
        document.writeln(2);
    }

    return (
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
                    <Button onClick={addOne} children="+" style="OneMore" />
                </span>
                    <span>{quantity}</span>
                <span>
                    <Button children="-" style="OneLess" />
                </span>
        </section>
        <section className={styles.Buttons}>
            <Link href= '/shipping'>
                <Button children="Comprar" style="Buy" />
            </Link>
            <Button children="Agregar al Carrito" style="AddToCart" />
        </section>
            
    </div>
); 
}

export default ProductDescription;