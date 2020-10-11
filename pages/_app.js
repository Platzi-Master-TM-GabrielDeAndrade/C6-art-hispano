import Layout from "../components/Layout";
import "../styles/styles.scss";
import "../styles/globals.scss";
import "../styles/components/Navbar.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  )
}