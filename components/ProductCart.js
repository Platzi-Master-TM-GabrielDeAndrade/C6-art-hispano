import styles from "../styles/components/ProductCart.module.scss";
import Button from "components/Button";


const ProductCart = ( { title, description, price, imgUrl, quantity } ) => {

    return (    

        <div>
            <section className={styles.MainContainer}>
                <section className={styles.ImageContainer}>
                    <img src={imgUrl} alt="Product Image"></img>
                </section>
                <section className={styles.DescriptionContainer}>
                    <h3 className={styles.Name}>{title}</h3>
                    <p className={styles.Description}>{description}</p>
                    <section className={styles.ButtonsGrid}>
                        {/* <Button children="Comprar ahora" style="BuyNow" /> */}
                        <Button style="Remove">Eliminar</Button>
                    </section>
                </section>
                <section className={styles.QuantityContainer}>
                    <div className={styles.QuantityButtonsContainer}>
                        <Button style="OneMoreCart">+</Button>
                        <span className={styles.Quantity}>{quantity}</span>
                        <Button style="OneLessCart">-</Button>
                    </div>
                </section>
                <p className={styles.Total}>${price*quantity}</p>
            </section>
                
        </div>
    );
}

export default ProductCart;