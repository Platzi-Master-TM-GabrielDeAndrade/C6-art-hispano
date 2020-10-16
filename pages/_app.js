import Layout from "@components/Layout";
import "@styles/styles.scss";
import "@styles/globals.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  )
}