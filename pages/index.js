import styles from "../styles/pages/Index.module.scss";
import ProductCard from "../components/ProductCard";
import LineTitle from "@components/LineTitle";

export default function Home () {
    return (
        <>
            <div className = {styles.slider}>
                <div className={styles.carusel}>
                    <img src="home.png" alt=""/>
                </div>

                <div className ={styles.container}>
                
                    <div className ={styles.products_container}> 
                        <div>
                            <LineTitle  text={'Productos Destacados'} />     
                            <div className ={styles.products_container_info}>
                                <ProductCard imgUrl={'/jarron.png'} price={70000} /> 
                                <ProductCard imgUrl={'/hamaca.png'} price={10000} />                             
                                <ProductCard imgUrl={'/sombrilla.png'} price={20000} />
                                <ProductCard imgUrl={'/sombrero_fique.png'} price={40000} />
                                
                            </div>

                            <LineTitle  text={'Recomendados para ti'} />     
                            <div className ={styles.products_container_info}>
                                <ProductCard imgUrl={'/turbante.png'} price={60000} />
                                <ProductCard imgUrl={'/almohadas.png'} price={40000} />
                                <ProductCard imgUrl={'/silla.png'} price={70000} /> 
                                <ProductCard imgUrl={'/congos.png'} price={20000} />
                                
                            </div>

                            <LineTitle  text={'Novedades'} />     
                            <div className ={styles.products_container_info}>
                                <ProductCard imgUrl={'/sombrilla.png'} price={20000} />
                                <ProductCard imgUrl={'/sueno.png'} price={60000} />
                                <ProductCard imgUrl={'/barril.png'} price={40000} />                                
                                <ProductCard imgUrl={'/caballo.png'} price={70000} /> 
                            </div>        
                        </div>
                    </div>

                    
                    <div className ={styles.products_container_oferta}>

                        <div >
                            <button>Oferta</button>
                            <img className ={styles.oferta} src="ajedrez.png" alt="Ajedrez" width= "80%" height= "80%"/>
                        </div>
                            
                        <div>
                            <h2>Instrumentos Musicales</h2>
                            <img src="flauta.png" alt="Flauta" width= "60%" height= "80%"/>
                        </div>
                    
                        <div>
                            <h2>Bisuter&iacute;a</h2>
                            <img src="bisuteria.png" alt="" width= "80%" height= "80%"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
