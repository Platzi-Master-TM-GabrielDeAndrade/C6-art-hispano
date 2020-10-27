import styles from "../styles/pages/Index.module.scss";

export default function Home () {
  return (
    <>
        <div className = {styles.container}>
          <img src="logo.svg" alt="logo" className = {styles.logo}/>
          <h3 className = {styles.tittle}>¡Felicitaciones tu producto se publico satisfactoriamente, ahora eres artesano</h3>
        </div>
    </>
  );
};

