import styles from "../styles/pages/Index.module.scss";
import Label from "../components/Label";

export default function Home () {
  return (
    <>
      <div className = {styles.container}>          
          <h1 className = {styles.tittle}>Publica tu artesssssss</h1>
      </div>
      <div className>
         <button className>
            <label>Agrega los detalles de producto</label>
         </button>
      </div>ss
         <button>
            <Label text="Sube tus fotos"/>
         </button>
      <div>
         <button className>
            <img src="Camara.svg" alt=""></img>
         </button>
         <button className>
            <img src="Camara.svg" alt=""></img>
         </button>
         <button className>
            <img src="Camara.svg" alt=""></img>
         </button>
         <button className>
            <img src="Camara.svg" alt=""></img>
         </button>
         <button className>
            <img src="Camara.svg" alt=""></img>
         </button>
         <button className>
            <img src="Camara.svg" alt=""></img>
         </button>
         <button className>
            <label>Aplica ahora</label>
         </button>
      </div>
    </>
  );
}