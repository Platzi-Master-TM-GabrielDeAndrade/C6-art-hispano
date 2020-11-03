import styles from "../styles/pages/Cart.module.scss";
import ProductCart from "../components/ProductCart";
import Button from "../components/Button";
import Link from "next/link";


export default function Cart () {
    return (
      <>
          <main>
              <ProductCart title="Cráneo Decorativo Azteca Dorado Artesanía Mexicana" description="Reliquia de los antiguos aztecas, encontrada en las ruinas de Tenochtitlán durante investigaciones arqueológicas en 1937. Cráneo bañado en oro y conservado por los museos de historia prehispánica en la Ciudad de México." price={19999.97} imgUrl="https://http2.mlstatic.com/crazdo-craneo-decorativo-azteca-dorado-artesania-mexicana-D_NQ_NP_954974-MLM31546603590_072019-F.jpg" quantity={2} />
              <ProductCart title="Conjunto de Collar y Aretes Milenarios de Ruinas en Cartagena" description="Antigüedades con más de 1000 años de haberse encontrado. Conformado por 39 piedras preciosas del valle más cercano al templo del noroeste de Cartagena. Encontrado en 1684 por exploradores españoles." price={24.37} imgUrl="https://i.pinimg.com/originals/ce/16/bd/ce16bd6d2bdb6d59773a51ec8bade190.png" quantity={4} />
              <section className = {styles.GridContainer}>
                <section className={styles.Container}>
                    <p className={styles.Total}>Total: ${40000}</p>
                    <Link href= '/shipping'>
                      <Button style="Continue" children="Continuar Comprar" />
                    </Link>
                </section>
              </section>
          </main>
      </>
    );
  };
