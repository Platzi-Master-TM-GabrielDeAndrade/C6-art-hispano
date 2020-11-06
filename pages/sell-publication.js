/* import styles from "../styles/pages/Index.module.scss"; */
import styles from "@styles/pages/Sell.module.scss";


export default function SellPublication () {
  return (
    <>
        <div className = {styles.cont_title}>
          <img src="logo.svg" alt="logo" className = {styles.logo}/>
          <h3 className = {styles.title_publication}>¡Felicitaciones!<br /> Tu producto se public&oacute; satisfactoriamente.<br />¡Ahora eres Art-Hispano!</h3>
        </div>
    </>
  );
};

