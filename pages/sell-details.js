import { useState } from "react";
import Link from "next/link";
import styles from "@styles/pages/Sell.module.scss";
import Input from "@components/Input"
import Textarea from "@components/Textarea";
import FileUpload from '../components/FileUpload'

export default function details () {
  const [nombre, setNombre] = useState("");
  const [contacto, setContacto] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  
  return (
    <>
      <main className={styles.container_details}>
        <div className={styles.cont_title_details}>
          <h1>Publica tu arte</h1>
        </div>

        <div className={styles.details_title}>
          <label>Agrega los detalles de producto</label>
        </div>

        <form className={styles.form_client}>
          <Input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Contacto"
            value={contacto}
            onChange={(e) => setContacto(e.target.value)}
          />
          <Input
            type="text"
            placeholder="$ Precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
          <Textarea
            className={styles.texTank}
            type="textarea"
            placeholder="Descripción"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            // rows={80}
            // cols={60}
          />
        </form>

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
            <FileUpload />
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