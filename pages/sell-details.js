import styles from "@styles/pages/Sell.module.scss";
import Label from "../components/Label";
import Input from "../components/Input";
import Button from "../components/Button";

export default function details () {
  return (
    <>
    <main className={styles.container_details}>
         <div className = {styles.cont_title_details}>          
           <h1>Publica tu arte</h1>
         </div>
   
         <div class={styles.details_title}>
            <label>Agrega los detalles de producto</label>
         </div>

         <div className={styles.sell_client}>
          <Input type="text" placeholder="Nombre" />
          <Input type="text" placeholder="Contacto" />
          <Input type="text" placeholder="$ Precio" />
          <textarea className={styles.texTarea}type="text" placeholder="Descripción"  ></textarea>
         </div>
        
        <div>
        <div className={styles.title_images}>
           <button>Sube tus fotos</button>
         </div>  

         <div class={styles.takeFoto}>
           <Button>
             <img src="Camara.svg" alt=""></img>
           </Button>
           <Button>
             <img src="Camara.svg" alt=""></img>
           </Button>
           <Button>
            <img src="Camara.svg" alt=""></img>
           </Button>
           <Button className>
            <img src="Camara.svg" alt=""></img>
           </Button>
           <Button className>
            <img src="Camara.svg" alt=""></img>
           </Button>
           <Button className>
             <img src="Camara.svg" alt=""></img>
           </Button>
          </div>

           <div className={styles.register}>
             <button>Publicar ahora</button>
           </div>
                   </div>                   
     </main>          
  </>
  );
}