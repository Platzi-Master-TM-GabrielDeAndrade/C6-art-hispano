import styles from "../styles/components/ShippingOptions.module.scss";
import Button from "components/Button";


<<<<<<< HEAD
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
=======
const ShippingOptions = ( { address, customerName } ) => {

    return (    

        <div>
            <section className={styles.MainContainer}>
                <section className={styles.AddressContainer}>
                    <h2>Opciones de Env&iacute;o</h2>
                    <p className={styles.Address}>Domicilio</p>
                    <p className={styles.AddressDescription}>Enviar a: {customerName}. {address}.</p>
                    <Button style="RemoveShipping">Cambiar direcci&oacute;n</Button>
                </section>
                <section className={styles.ShippingSpeed}>
                    <h3>Elegir velocidad de env&iacute;o</h3>
                    <p>¡Entrega garantizada!</p>
                    <div className={styles.ButtonContainer}>
                        <input type="radio" id="free" name="speed" value="free" />
                        <label for="free">Env&iacute;o gratis</label>
                    </div>
                    <div className={styles.ButtonContainer}>
                        <input type="radio" id="2day" name="speed" value="2day" />
                        <label for="2day">2 d&iacute;as</label>
                    </div>
                    <div className={styles.ButtonContainer}>
                        <input type="radio" id="1week" name="speed" value="1week" />
                        <label for="1week">1 semana</label>
                    </div>
                </section>
            </section>
                
        </div>
    );
};
>>>>>>> 112624a1c214e333829d238c076064b32cc1f701

export default ShippingOptions;