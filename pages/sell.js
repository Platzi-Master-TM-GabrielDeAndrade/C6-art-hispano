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
          <select>
            <option value="/">--Elige una Categoria</option>
            <option value="">Hogar</option>
            <option value="">Bisuter&iacute;a</option>
            <option value="">Instrumentos Musicales</option>
            <option value="">Ropa</option>
            <option value="">Calzado</option>            
         </select>
          
          <textarea className={styles.texTank}type="text" placeholder="Descripción" cols="60" rows="8"  ></textarea>
         </div>
    
         <div className={styles.takePhoto}>
           <h2>Sube tus fotos</h2>
          </div>

          <div className={styles.Photo}>
           <div>
           <FileUpload/>
           </div>
           <div>
           <FileUpload/>
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