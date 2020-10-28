// import styles from "../styles/pages/Index.module.scss";
import styles from "../styles/pages/Product.module.scss";
import Button from "components/Button";


export default function Product () {
  return (
    <>
        
        <main className={styles.Main}>
            <section className = {styles.MainContainer}>
                <section className={styles.Leftside}>
                    <section className={styles.LeftsideImages}>
                        <img src="../public/Logo.svg" alt="Product Picture" />
                    </section>
                    <section className={styles.LeftsideImages}>
                        <img src="../public/flauta.svg" alt="Product Picture" />
                    </section>
                    <section className={styles.LeftsideImages}>
                        <img src="../public/flauta.svg" alt="Product Picture" />
                    </section>
                    <section className={styles.LeftsideImages}>
                        <img src="https://http2.mlstatic.com/crazdo-craneo-decorativo-azteca-dorado-artesania-mexicana-D_NQ_NP_954974-MLM31546603590_072019-F.jpg" alt="Product Picture" />
                    </section>
                    <section className={styles.LeftsideImages}>
                        <img src="../public/flauta.svg" alt="Product Picture" />
                    </section>
                </section>
                <section className={styles.MainImage}>
                    <img src="https://http2.mlstatic.com/crazdo-craneo-decorativo-azteca-dorado-artesania-mexicana-D_NQ_NP_954974-MLM31546603590_072019-F.jpg" alt="Product Name" />
                </section>
                <section className={styles.MainDescriptionContainer}>
                    <section className={styles.DescriptionContainer}>
                        <section className={styles.DescriptionContent}>
                            <h1>Cráneo Decorativo Azteca Dorado Artesanía Mexicana</h1>
                            <p>Reliquia de los antiguos aztecas, encontrada en las ruinas de Tenochtitlán durante investigaciones arqueológicas en 1937. Cráneo bañado en oro y conservado por los museos de historia prehispánica en la Ciudad de México.</p>
                            <h2>$19.999,97</h2>
                        </section>
                        <section className={styles.FreeShipping}>
                            <img src="https://www.batidos.cl/wp-content/uploads/2015/12/despacho-gratis.png" alt="Free Shipping" />
                            <span>Env&iacute;o Gratis</span>
                        </section>
                        <section className={styles.Rating}>
                            <img src="https://lh3.googleusercontent.com/proxy/4kJ93uf62sSVeDJuoysoRtTrchfAmWCPwprj_RDu0367lNgrzON59ET1OvWNe6bN-jeG509udFTDqelDGcpt52Py8O7VVh5rLFEWgyHREenyUM3J5hFiZGJ-8bFOxmax" alt="Rating" />
                        </section>
                        <section className={styles.Quantity}>
                            <span>Cantidad</span>
                            <span>
                                <button className={styles.QuantityButtonMore}>+</button>
                            </span>
                            <span>1</span>
                            <span>
                                <button className={styles.QuantityButtonLess}>-</button>
                            </span>
                        </section>
                        <section className={styles.DescriptionButtons}>
                            <Button children="Comprar" style="Buy"></Button>
                            <Button children="Agregar al Carrito" style="AddToCart"></Button>
                        </section>
                    </section>
                </section>
            </section>
        </main>

    </>
  );
};