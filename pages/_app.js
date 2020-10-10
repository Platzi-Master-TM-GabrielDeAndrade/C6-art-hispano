import "../styles/styles.scss";
import "../styles/globals.scss";
import "../styles/components/Navbar.scss";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}