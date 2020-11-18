import styles from "../styles/components/ProductCart.module.scss";
import Button from "components/Button";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity } from "../redux/actions";

const ProductCart = ( { title, description, price, imgUrl, quantity } ) => {
  const quantitys = useSelector((state) => state.quantity);
  const dispatch = useDispatch();

  return (
    <div>
      <section className={styles.MainContainer}>
        <section className={styles.ImageContainer}>
          <img src={imgUrl} alt="Product Image" title={title}></img>
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
            <Button
              style="OneLessCart"
              onClick={() => dispatch(decrementQuantity())}
            >
              -
            </Button>
            <span>{quantitys}</span>
            <Button
              style="OneMoreCart"
              onClick={() => dispatch(incrementQuantity())}
            >
              +
            </Button>
          </div>
        </section>
        <p className={styles.Total}>${price}</p>
      </section>
    </div>
  );
}

export default ProductCart;