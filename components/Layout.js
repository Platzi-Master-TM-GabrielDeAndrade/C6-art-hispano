import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import styles from "styles/components/Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styles.Main}>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default  Layout