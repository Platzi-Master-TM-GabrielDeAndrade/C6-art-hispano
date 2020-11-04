import styles from "../styles/pages/Index.module.scss";
import ProductCard from "../components/ProductCard";
import LineTitle from "@components/Linetitle";

export default function Home () {
  return (
    <>
    <div className = {styles.slider}>
        <div className={styles.carusel}>
            <img src="home.png" alt=""/>
        </div>

        <div className ={styles.products_container}> 
            <div>
                <LineTitle  text={'Productos Destacados'} />     
                <div className ={styles.products_container_info}>
                    <ProductCard imgUrl={'/hamaca.png'} price={10000} />
                    <ProductCard imgUrl={'/silla.png'} price={40000} />
                    <ProductCard imgUrl={'/sombrilla.png'} price={20000} />
                    <ProductCard imgUrl={'/jarron.png'} price={70000} /> 
                </div>
            </div>
        
            <div className ={styles.products_container_oferta}>
                <button>Oferta</button>
                <img className ={styles.oferta} src="oferta.png" alt="" width= "80%" height= "80%"/>
            </div>
        </div>



        <div className ={styles.products_container}> 
            <div>
                <LineTitle  text={'Recomendados para ti'} />     
                <div className ={styles.products_container_info}>
                    <ProductCard imgUrl={'/hamaca.png'} price={60000} />
                    <ProductCard imgUrl={'/silla.png'} price={40000} />
                    <ProductCard imgUrl={'/sombrilla.png'} price={20000} />
                    <ProductCard imgUrl={'/jarron.png'} price={70000} /> 
                </div>
            </div>
        
            <div className ={styles.products_container_oferta}>
                <h2>Instrumentos Musicales</h2>
                <img src="instrumentos.png" alt="" width= "80%" height= "80%"/>
            </div>
        </div>



        <div className ={styles.products_container}> 
            <div>
                <LineTitle  text={'Novedades'} />     
                <div className ={styles.products_container_info}>
                    <ProductCard imgUrl={'/hamaca.png'} price={60000} />
                    <ProductCard imgUrl={'/silla.png'} price={40000} />
                    <ProductCard imgUrl={'/sombrilla.png'} price={20000} />
                    <ProductCard imgUrl={'/jarron.png'} price={70000} /> 
                </div>
            </div>
        
            <div className ={styles.products_container_oferta}>
                <h2>Bisuteria</h2>
                <img src="collar.png" alt="" width= "80%" height= "80%"/>
            </div>
        </div>




    </div>
    </>
  );
};
