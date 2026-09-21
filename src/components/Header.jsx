import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">Butiken</Link>
      <nav>
        <Link to="/">Produkter</Link>
        <Link to="/cart">Varukorg</Link>
      </nav>
    </header>
  );
}

export default Header;