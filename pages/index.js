import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
import { db } from "../firebase/firebase.config";
import styles from "../styles/pages/Index.module.scss";
import ProductCard from "../components/ProductCard";
import LineTitle from "@components/LineTitle";

export default function Home () {
<<<<<<< HEAD
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
=======
    // const router = useRouter();
    // const { id } = router.query;

    const [product, setProduct] = useState([]);
    const [setError] = useState(null);

     const getProduct = async () => {
       try {
         const data = await db
           .collection("products")
           .limit(1)         
           .get();
         const arrayData = data.docs.map((doc) => ({ ...doc.data() }));
         setProduct(arrayData);
       } catch (error) {
         setError(error);
       }
     };

     useEffect(() => {
       getProduct();
     }, []); 
  return (
    <>
      {product.map((item) => (
        <p key={item.id}>
          <div className={styles.slider}>
            <div className={styles.carusel}>
              <img src="home.png" alt="" />
            </div>

            <div className={styles.products_container}>
              <div>
                <LineTitle text={"Productos Destacados"} />
                <div className={styles.products_container_info}>
                  <ProductCard imgUrl={item.image} price={item.price} />
                  <ProductCard imgUrl={item.image} price={item.price} />
                  <ProductCard imgUrl={item.image} price={item.price} />
                  <ProductCard imgUrl={item.image} price={item.price} />
                </div>
              </div>

              <div className={styles.products_container_oferta}>
                <button>Oferta</button>
                <img
                  className={styles.oferta}
                  src="ajedrez.png"
                  alt="Ajedrez"
                  width="80%"
                  height="80%"
                />
              </div>
            </div>

            <div className={styles.products_container}>
              <div>
                <LineTitle text={"Recomendados para ti"} />
                <div className={styles.products_container_info}>
                  <ProductCard imgUrl={item.image} price={item.price} />
                  <ProductCard imgUrl={item.image} price={item.price} />
                  <ProductCard imgUrl={item.image} price={item.price} />
                  <ProductCard imgUrl={item.image} price={item.price} />
                </div>
              </div>

              <div className={styles.products_container_oferta}>
                <h2>Instrumentos Musicales</h2>
                <img src="flauta.png" alt="Flauta" width="60%" height="80%" />
              </div>
            </div>

            <div className={styles.products_container}>
              <div>
                <LineTitle text={"Novedades"} />
                <div className={styles.products_container_info}>
                  <ProductCard imgUrl={item.image} price={item.price} />
                  <ProductCard imgUrl={item.image} price={item.price} />
                  <ProductCard imgUrl={item.image} price={item.price} />
                  <ProductCard imgUrl={item.image} price={item.price} />
                </div>
              </div>

              <div className={styles.products_container_oferta}>
                <h2>Bisuter&iacute;a</h2>
                <img src="bisuteria.png" alt="" width="80%" height="80%" />
              </div>
            </div>
          </div>
        </p>
      ))}
    </>
  );
>>>>>>> 6bed09887c270c53a68c8d326e5197fba69a4725
};
