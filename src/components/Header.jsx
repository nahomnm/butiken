import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  const { totalItems } = useCart();

  return (
    <header>
      <Link to="/">Butiken</Link>
      <nav>
        <Link to="/">Produkter</Link>
        <Link to="/cart">Varukorg ({totalItems})</Link>
      </nav>
    </header>
  );
}

export default Header;