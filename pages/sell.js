/* import styles from "../styles/pages/Index.module.scss"; */
import styles from "@styles/pages/Sell.module.scss";
// import Button from "../components/Button";

export default function sell () {
  return (
    <>
      <div className={styles.cont_title}>        
          <h1 className={styles.tittle}>Publica tu arte</h1>
      </div>
   <div className={styles.container}> 
      <div className={styles.images}>
         <button>
            <img src="kiosko.svg" alt=""></img>
         </button>
         <button>
            <img src="Arete.svg" alt=""></img>
         </button>
         <button>
            <img src="Flauta.svg" alt=""></img>
         </button>
         <button>
            <img src="Saco.svg" alt=""></img>
         </button>
         <button>
            <img src="Zapato.svg" alt=""></img>
         </button>
      </div>
      <div className={styles.search_one}>
         <select name="sell" className="sell-select">
            <option value="/">Hogar</option>
            <option value="">Cocina</option>
            <option value="">Lenceria</option>
            <option value="">Decoración</option>
            <option value="">Accesorio para baño</option>
         </select>
         <select name="sell" className="sell-select">
            <option value="/">Bisuteria</option>
            <option value="">Collares</option>
            <option value="">Pulceras</option>
            <option value="">Manillas</option>
         </select>
         <select name="sell" className="sell-select">
            <option value="/">Instrumentos Musicales</option>
            <option value="">Guitarras</option>
            <option value="">Bongos</option>
            <option value="">Panderetas</option>
            <option value="">Flautas</option>
         </select>
         <select name="sell" className="sell-select">
            <option value="/">Ropa</option>
            <option value="">Blusas</option>
            <option value="">Sacos</option>
            <option value="">Pantalones</option>
            <option value="">Bufandas</option>
         </select>
         <select name="sell" className="sell-select">
            <option value="/">Calzado</option>
         </select>
      </div>
      <div className={styles.search_two}>
       <select name="sell" className="sell-select">
            <option value="/">Decoración</option>
            <option value="">Ceramica</option>
            <option value="">Madera</option>
            <option value="">Metal</option>
            <option value="">Otros</option>
         </select>
         <select name="sell" className="sell-select">
            <option value="/">Bricolaje</option>
         </select>
         <select name="" className="sell-select">
            <option value="/">Jardines</option>
         </select> 
       </div>
      </div>
    </>
  );
}