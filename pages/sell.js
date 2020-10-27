import styles from "../styles/pages/Index.module.scss";
/* import Label from "../components/Label"; */

export default function Home () {
  return (
    <>
      <div className = {styles.container}>          
          <h1 className = {styles.tittle}>Publica tu arte</h1>
      </div>
      <div>
         <button className>
            <img src="kiosko.svg" alt=""></img>
         </button>
         <button className>
            <img src="Arete.svg" alt=""></img>
         </button>
         <button className>
            <img src="Flauta.svg" alt=""></img>
         </button>
         <button className>
            <img src="Saco.svg" alt=""></img>
         </button>
         <button className>
            <img src="Zapato.svg" alt=""></img>
         </button>
      </div>
      <div className>
         <select name="sell" class="sell-select">
            <option value="/">Hogar</option>
            <option value="">Cocina</option>
            <option value="">Lenceria</option>
            <option value="">Decoración</option>
            <option value="">Accesorio para baño</option>
         </select>
         <select name="sell" class="sell-select">
            <option value="/">Bisuteria</option>
            <option value="">Collares</option>
            <option value="">Pulceras</option>
            <option value="">Manillas</option>
         </select>
         <select name="sell" class="sell-select">
            <option value="/">Instrumentos Musicales</option>
            <option value="">Guitarras</option>
            <option value="">Bongos</option>
            <option value="">Panderetas</option>
            <option value="">Flautas</option>
         </select>
         <select name="sell" class="sell-select">
            <option value="/">Ropa</option>
            <option value="">Blusas</option>
            <option value="">Sacos</option>
            <option value="">Pantalones</option>
            <option value="">Bufandas</option>
         </select>
         <select name="sell" class="sell-select">
            <option value="/">Calzado</option>
         </select>
         <select name="sell" class="sell-select">
            <option value="/">Decoración</option>
            <option value="">Ceramica</option>
            <option value="">Madera</option>
            <option value="">Metal</option>
            <option value="">Otros</option>
         </select>
         <select name="sell" class="sell-select">
            <option value="/">Bricolaje</option>
         </select>
         <select name="" class="sell-select">
            <option value="/">Jardines</option>
         </select>
      </div>
    </>
  );
}