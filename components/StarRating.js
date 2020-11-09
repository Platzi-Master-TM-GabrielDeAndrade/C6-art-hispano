import styles from "../styles/components/StarRating.module.scss";

const rating = 5;
const StarRating = ( { imgUrl='https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png' } ) => (

    <div>
        { [1, 2, 3, 4, 5].map( ( value, index ) => 
            <span className={styles.StarContainer}>
                <img src={(index+1)<=rating ? imgUrl : ''} alt="Product Picture" />
            </span>
            ) 
        }
    </div>
);

export default StarRating;