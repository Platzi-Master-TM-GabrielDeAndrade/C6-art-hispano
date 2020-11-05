import Navbar from "@components/Navbar";
import Head from 'next/head';
import Footer from "@components/Footer";
import styles from "styles/components/Layout.module.scss";


const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link 
          rel="icon" 
          type="image/ico"
          // href="public"
        />
      </Head>
      <Navbar />
      <main className={styles.Main}>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default  Layout