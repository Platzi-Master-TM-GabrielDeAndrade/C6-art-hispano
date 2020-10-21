import styles from "../styles/pages/Index.module.scss";

export default function Home () {
  return (
    <>
      <section>
        <p className={styles.description}>Bienvenidos a Art-Hixpano</p>     
        {/* <button>
          Ingresar con email
          
          </button>    */}
 
          <authMethods/>
      </section>
    </>
  );
};