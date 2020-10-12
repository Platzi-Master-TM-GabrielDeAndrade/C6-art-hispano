import Navbar from "@components/Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      { children }
      <footer>Este es el footer</footer>
    </div>
  );
}
