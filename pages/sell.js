/* import styles from "../styles/pages/Index.module.scss"; */
import styles from "@styles/pages/Sell.module.scss";
// import Button from "../components/Button";

export default function sell () {
  return (
    <>
      <div className={styles.cont_titleSell}>        
          <h1>Publica tu arte</h1>
      </div>
   <  div className={styles.container}> 
      <div className={styles.images}>
         <figure>
            <img src="kiosko.svg" alt=""></img>
         </figure>
         <figure>
            <img src="Arete.svg" alt=""></img>
         </figure>
         <figure>
            <img src="Flauta.svg" alt=""></img>
         </figure>
         <figure>
            <img src="Saco.svg" alt=""></img>
         </figure>
         <figure>
            <img src="Zapato.svg" alt=""></img>
         </figure>
      </div>
      <div className={styles.search}>
         <select>
            <option value="/">Hogar</option>
            <option value="">Cocina</option>
            <option value="">Lenceria</option>
            <option value="">Decoración</option>
            <option value="">Accesorio para baño</option>
         </select>
         <select>
            <option value="/">Bisuteria</option>
            <option value="">Collares</option>
            <option value="">Pulceras</option>
            <option value="">Manillas</option>
         </select>
         <select>
            <option value="/">Instrumentos Musicales</option>
            <option value="">Guitarras</option>
            <option value="">Bongos</option>
            <option value="">Panderetas</option>
            <option value="">Flautas</option>
         </select>
         <select>
            <option value="/">Ropa</option>
            <option value="">Blusas</option>
            <option value="">Sacos</option>
            <option value="">Pantalones</option>
            <option value="">Bufandas</option>
         </select>
         <select> 
            <option value="1">Calzado</option>
            <option value="2">Medias</option>
            <option selected value="3">Zapatillas</option>
          </select>
         {/* <input type="submit" value="Submit" />  */}
      </div>
     </div>
    </>
  );
}