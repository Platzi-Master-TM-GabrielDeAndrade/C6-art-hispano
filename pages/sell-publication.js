/* import styles from "../styles/pages/Index.module.scss"; */
import styles from "@styles/pages/Sell.module.scss";


export default function Home () {
  return (
    <>
        <div className = {styles.cont_title}>
          <img src="logo.svg" alt="logo" className = {styles.logo}/>
          <h3 className = {styles.title_publication}>¡Felicitaciones tu producto se publico satisfactoriamente, ahora eres artesano</h3>
        </div>
    </>
  );
};

