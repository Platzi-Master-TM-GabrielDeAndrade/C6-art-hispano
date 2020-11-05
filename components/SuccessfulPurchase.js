import styles from "../styles/components/SuccessfulPurchase.module.scss";
import Button from "components/Button";
import Link from "next/link";


<<<<<<< HEAD
const SuccessfulPurchase = ({ deliveryDate, phone, email }) => (
  <main className={styles.Main}>
    <section className={styles.TitleContainer}>
      <h2 className={styles.Title}>¡Felicitaciones!</h2>
      <h2 className={styles.Title}>Tu producto llegar&aacute; pronto.</h2>
    </section>
    <section className={styles.TextContainer}>
      <h4>Fecha de entrega</h4>
      <p>{deliveryDate}</p>
    </section>
    <section className={styles.TextContainer}>
      <h4>Datos del vendedor</h4>
      <p>Celular: {phone}</p>
      <p>Correo: {email}</p>
    </section>
    <section className={styles.Button}>
      <Link href="/">        
        <Button style="Buy">Seguir comprando</Button>
      </Link>
    </section>
  </main>
=======
const SuccessfulPurchase = ( { deliveryDate, phone, email } ) => (    

    <div className={styles.Main}>
        <section className={styles.TitleContainer}>
            <h2 className={styles.Title}>¡Felicitaciones!</h2>
            <h2 className={styles.Title}>Tu producto llegar&aacute; pronto.</h2>
        </section>
        <section className={styles.TextContainer}>
            <h4>Fecha de entrega</h4>
            <p>{deliveryDate}</p>
        </section>
        <section className={styles.TextContainer}>
            <h4>Datos del vendedor</h4>
            <p>Celular: {phone}</p>
            <p>Correo: {email}</p>
        </section>
        <section className={styles.Button}>
            <Link href="/">
                <Button style="Buy">Seguir comprando</Button>
            </Link>
        </section>
    </div>
>>>>>>> 112624a1c214e333829d238c076064b32cc1f701
);

export default SuccessfulPurchase;