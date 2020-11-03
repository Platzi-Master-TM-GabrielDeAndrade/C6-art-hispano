// import styles from "../styles/pages/Index.module.scss";
import styles from "../styles/pages/Shipping.module.scss";
import ProductShipping from "components/ProductShipping";
import ShippingSummary from "components/ShippingSummary";
<<<<<<< HEAD
=======
import Button from "@components/Button";
import ShippingOptions from "components/ShippingOptions";
>>>>>>> 9ba64c6692770e12e1ffef5de4a859d7dbd5b30a


export default function Shipping () {
  return (
    <>
        
        <main className={styles.Main}>
            <section className={styles.Container}>

                <ShippingOptions customerName="Kevin J. Zea" address="Jardines de Galicia 7243, Col. Jardines de Babilonia, C. P. 68420, Abasolo, Nuevo León, México" />

                <ProductShipping title="Cráneo Decorativo Azteca Dorado Artesanía Mexicana" description="Reliquia de los antiguos aztecas, encontrada en las ruinas de Tenochtitlán durante investigaciones arqueológicas en 1937. Cráneo bañado en oro y conservado por los museos de historia prehispánica en la Ciudad de México." price={19999.97} imgUrl="https://http2.mlstatic.com/crazdo-craneo-decorativo-azteca-dorado-artesania-mexicana-D_NQ_NP_954974-MLM31546603590_072019-F.jpg" quantity={3} />
                <div className={styles.ButtonContainer}>
                    <Button children="Confirmar Compra" style="Continue" />
                </div>
            </section>
            <section className={styles.RightBar}>
                <section className={styles.SummaryContainer}>
                    <ShippingSummary totalQuantity={2} totalPrice={19999.97*2} shippingCost={5000} totalCost={19999.97*2+5000} />
                </section>
            </section>
        </main>

    </>
  );
};
