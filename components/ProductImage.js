import styles from "../styles/components/ProductImage.module.scss";

const ProductImage = ( { imgUrl, type } ) => (

    <div className={styles[`${type}Image`]}>
        <img src={imgUrl} alt="Product Picture" />
    </div>
);

export default ProductImage;
