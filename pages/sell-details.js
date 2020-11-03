import Link from "next/link";
import styles from "@styles/pages/Sell.module.scss";
import Input from "@components/Input"
import FileUpload from '../components/FileUpload'


export default function details () {
  return (
    <>
    <main className = {styles.container_details}>
         
         <div className = {styles.cont_title_details}>          
           <h1>Publica tu arte</h1>
         </div>
     
         <div className={styles.details_title}>
            <label>Agrega los detalles de producto</label>
         </div>

         <div className={styles.form_client}>
          <Input type="text" placeholder="Nombre" />
          <Input type="text" placeholder="Contacto" />
          <Input type="text" placeholder="$ Precio" />
          <textarea className={styles.texTank}type="text" placeholder="Descripción" cols="60" rows="8"  ></textarea>
         </div>
    
         <div className={styles.takeFoto}>
           <h2>Sube tus fotos</h2>
          </div>

          <div className={styles.foto}>
          <button>
             <img src="Camara.svg" alt=""></img>
           </button>
           <button>
             <img src="Camara.svg" alt=""></img>
           </button>
           <button>
            <img src="Camara.svg" alt=""></img>
           </button>
           <button>
            <img src="Camara.svg" alt=""></img>
           </button>
           <button>
            <img src="Camara.svg" alt=""></img>
           </button>
           <div>
           <FileUpload/>
            {/*  <img src="Camara.svg" alt=""></img>
           </button> */}
           </div>
           </div>
           
           <div className={styles.register}>
             <Link href="/sell-publication">
              <button>Publicar ahora</button>
             </Link>
           </div>  
                                                  
       </main>          
  </>
  );
}