import styles from "../styles/pages/Index.module.scss";

export default function Home () {
  return (
    <>
        <div className = {styles.container}>
          <img src="" alt="logo" className = {styles.logo}/>
          <h1 className = {styles.tittle}>Publica tu arte</h1>  
        </div>
    </>
  );
}