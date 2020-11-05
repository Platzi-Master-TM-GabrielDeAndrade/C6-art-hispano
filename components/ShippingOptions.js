import styles from "../styles/components/ShippingOptions.module.scss";
import Button from "components/Button";


const ShippingOptions = ({ address, customerName }) => (
  <div>
    <section className={styles.MainContainer}>
      <section className={styles.AddressContainer}>
        <h2>Opciones de Env&iacute;o</h2>
        <p className={styles.Address}>Domicilio</p>
        <p className={styles.AddressDescription}>
          Enviar a: {customerName}. {address}.
        </p>
        <Button style="RemoveShipping">Cambiar direcci&oacute;n</Button>
      </section>
      <section className={styles.ShippingSpeed}>
        <h3>Elegir velocidad de env&iacute;o</h3>
        <p>¡Entrega garantizada!</p>
        <div className={styles.ButtonContainer}>
          <Button style="ShippingBall" />
          <span>Env&iacute;o gratis</span>
        </div>
        <div className={styles.ButtonContainer}>
          <Button style="ShippingBall" />
          <span>2 d&iacute;as</span>
        </div>
        <div className={styles.ButtonContainer}>
          <Button style="ShippingBall" />
          <span>1 semana</span>
        </div>
      </section>
    </section>
  </div>
);

export default ShippingOptions;