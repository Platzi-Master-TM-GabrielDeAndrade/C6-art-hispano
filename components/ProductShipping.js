import styles from "../styles/components/ProductShipping.module.scss";
import Button from "components/Button";


<<<<<<< HEAD
const ProductShipping = ({ title, description, price, imgUrl, quantity }) => (
  <div>
    <section className={styles.MainContainer}>
      <section className={styles.ImageContainer}>
        <img src={imgUrl} alt="Product Image"></img>
      </section>
      <section className={styles.DescriptionContainer}>
        <h3 className={styles.Name}>{title}</h3>
        <p className={styles.Description}>{description}</p>        
        <Button style="RemoveShipping">Eliminar</Button>
      </section>
      <section className={styles.QuantityPriceContainer}>
        <p className={styles.Quantity}>Cantidad: {quantity}</p>
        <p className={styles.Total}>${price * quantity}</p>
      </section>
    </section>
  </div>
);
=======
const ProductShipping = ( { title, description, price, imgUrl, quantity } ) => {

    return (    

        <div>
            <section className={styles.MainContainer}>
                <section className={styles.ImageContainer}>
                    <img src={imgUrl} alt="Product Image"></img>
                </section>
                <section className={styles.DescriptionContainer}>
                    <h3 className={styles.Name}>{title}</h3>
                    <p className={styles.Description}>{description}</p>
                    <Button style="RemoveShipping">Eliminar</Button>
                </section>
                <section className={styles.QuantityPriceContainer}>
                    <p className={styles.Quantity}>Cantidad: {quantity}</p>
                    <p className={styles.Total}>${price*quantity}</p>
                </section>
            </section>
                
        </div>
    );
};
>>>>>>> 112624a1c214e333829d238c076064b32cc1f701

export default ProductShipping;