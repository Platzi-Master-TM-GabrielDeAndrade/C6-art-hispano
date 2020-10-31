import styles from "../styles/pages/Index.module.scss";
import ProductCard from "../components/ProductCard";
import LineTitle from "@components/Linetitle";

export default function Home () {
  return (
    <>
    <div className = {styles.slider}>
        <div className={styles.carusel}>
            <img src="home.jpg" alt=""/>
        </div>

        <div className ={styles.products_container}> 
            <div>
                <LineTitle  text={'Productos Destacados'} />     
                <div className ={styles.products_container_info}>
                    <ProductCard imgUrl={'/hamaca.png'} price={120000} />
                    <ProductCard imgUrl={'/silla.png'} price={40000} />
                    <ProductCard imgUrl={'/sombrilla.png'} price={20000} />
                    <ProductCard imgUrl={'/jarron.png'} price={70000} /> 
                </div>
            </div>
        
            <div>
                <button>Oferta</button>
                <img src="" alt=""/>
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
        
            <div>
                <button>Oferta</button>
                <img src="" alt=""/>
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
        
            <div>
                <button>Oferta</button>
                <img src="" alt=""/>
            </div>
        </div>




    </div>
    </>
  );
};
