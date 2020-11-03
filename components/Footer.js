import styles from "../styles/components/Footer.module.scss";
const Footer = () => (

  <footer className={styles.Footer}>
    
    <section className={styles.Container}>
      <section className={styles.Oportunidades}>
        <h3 className={styles.Subtitle}>Oportunidades</h3>
        <p className={styles.Text}>¡Trabaja con nosotros!</p>
        <p className={styles.Text}>Informaci&oacute;n Corportiva</p>
      </section>
      <section className={styles.AboutUsHaz}>
        <h3 className={styles.Subtitle}>Haz Negocio</h3>
        <p className={styles.Text}>Vende con Art-Hispano</p>
      </section>
      <section className={styles.AboutUsInformacion}>
        <h3 className={styles.Subtitle}>Informaci&oacute;n</h3>
        <p className={styles.Text}>Contacto: 0000000</p>
        <p className={styles.Text}>Carrera 12 # 45 -5333</p>
        <a className={styles.Text} href="/pages/index.js">www.arthispano.com</a>
      </section>
      <section className={styles.AboutUsAyuda}>
        <h3 className={styles.Subtitle}>Ayuda</h3>
        <p className={styles.Text}>Contacto: 0000000</p>
        <p className={styles.Text}>Carrera 12 # 45 -5333</p>
        <a className={styles.Text} href="/pages/index.js">www.arthispano.com</a>
      </section>

      <section className={styles.SocialMedia}>
        <img className={styles.Icon} src="instagram.svg" alt="logo IG" />
        <img className={styles.Icon} src="facebook.svg" alt="logo FB" />
        <img src="twitter.svg" alt="logo TW" />
      </section>
    </section>
    
  </footer>
);

export default Footer