// import styles from "../styles/pages/Index.module.scss";
import styles from "../styles/pages/Product.module.scss";
import ProductImage from "components/ProductImage";
import ProductDescription from "components/ProductDescription";


export default function Product () {
  return (
    <>
        
        <main className={styles.Main}>
            <section className = {styles.MainContainer}>
                <section className={styles.Leftside}>
                    <ProductImage type="Leftside" imgUrl="https://http2.mlstatic.com/crazdo-craneo-decorativo-azteca-dorado-artesania-mexicana-D_NQ_NP_954974-MLM31546603590_072019-F.jpg"></ProductImage>
                    <ProductImage type="Leftside" imgUrl="/public/search.svg"></ProductImage>
                    <ProductImage type="Leftside" imgUrl="/public/search.svg"></ProductImage>
                    <ProductImage type="Leftside" imgUrl="/public/search.svg"></ProductImage>
                    <ProductImage type="Leftside" imgUrl="/public/search.svg"></ProductImage>
                </section>
                <section className={styles.MainImageContainer}>
                    <ProductImage type="Main" imgUrl="https://http2.mlstatic.com/crazdo-craneo-decorativo-azteca-dorado-artesania-mexicana-D_NQ_NP_954974-MLM31546603590_072019-F.jpg"></ProductImage>
                </section>
                <section className={styles.MainDescriptionContainer}>
                    <section className={styles.DescriptionContainer}>
                        <ProductDescription starsQuantity='3' title="Cráneo Decorativo Azteca Dorado Artesanía Mexicana" description="Reliquia de los antiguos aztecas, encontrada en las ruinas de Tenochtitlán durante investigaciones arqueológicas en 1937. Cráneo bañado en oro y conservado por los museos de historia prehispánica en la Ciudad de México." price='19.999,97'></ProductDescription>
                    </section>
                </section>
            </section>
        </main>

    </>
  );
};