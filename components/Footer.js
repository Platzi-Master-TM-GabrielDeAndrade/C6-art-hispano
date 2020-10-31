import styles from "../styles/components/Footer.module.scss";
const Footer = () => (
  <footer className={styles.Footer}>
    
      <div className={styles.AboutUsOportunidades}>
        <h3>Oportunidades</h3>
        <p>Trabaja con nosotros Informacion Corportiva</p>
      </div>
      <div className={styles.AboutUsHaz}>
        <h3>Haz Negocio</h3>
        <p>Vende en Art-Hispano </p>
      </div>
      <div className={styles.AboutUsInformacion}>
        <h3>Informacion</h3>
        <p>Contacto: 0000000</p>
        <p>Carrera 12 # 45 -5333</p>
        <p>www.art-hispano.com</p>
      </div>
      <div>
        <h3 className={styles.AboutUsAyuda}>Ayuda</h3>
      </div>
    
    <div className={styles.Social}>
      <img src="instagram.svg" alt="logo" />
      <img src="facebook.svg" alt="logo" />
      <img src="twitter.svg" alt="logo" />
    </div>
  </footer>
);

export default Footer