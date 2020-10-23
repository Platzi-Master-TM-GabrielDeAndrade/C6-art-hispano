import Link from "next/link";


export default function Navbar() {
  return (
    <div>
      <nav>
        <menu>
          <Link href="/">
            <a>Home</a>
          </Link>

          <Link href="/admin">
            <a>Admin</a>
          </Link>

          <Link href="/login">
            <a>Login</a>            
          </Link>

          <Link href="/about">
            <a>About</a>
          </Link>

          <Link href="/users">
            <a>Users</a>
          </Link>

          <Link href="/login2">
            <a>Login2</a>
          </Link>
          <Link href="/categorias">
            <a>Categorias</a>
          </Link>
        </menu>
      </nav>
    </div>
  );
}