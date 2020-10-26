import Navbar from "@components/Navbar";
// import Head from 'next/head';
import Footer from "@components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Head>
        <link 
          rel="icon" 
          type="image/ico"
          // href="public"
          
        />
      </Head> */}
      
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default  Layout