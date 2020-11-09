import styles from "../styles/components/ShippingSummary.module.scss";


const ShippingSummary = ( { totalQuantity, totalPrice, shippingCost, totalCost } ) => {
    return (    

        <div>
            <section className={styles.Summary}>
                <p className={styles.Title}>Resumen de compra</p>
    
                <p className={styles.Text}>
                    Productos ({totalQuantity})
                    <p>${totalPrice}</p>
                </p>
                <section className={styles.TotalGrid}>
                    <p className={styles.Text}>
                        Env&iacute;o:
                    </p>
    
                    <span className={styles.Text}>${shippingCost}</span>
    
                    <p className={styles.Text}>
                        Total:
                    </p>
    
                    <span className={styles.Text}>${totalCost}</span>
                </section>
                
            </section>
                
        </div>
    );
};

export default ShippingSummary;