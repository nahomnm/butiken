import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <>
        <h1>Varukorg</h1>
        <p>Din varukorg är tom.</p>
        <Link to="/">Se produkter</Link>
      </>
    );
  }

  return (
    <>
      <h1>Varukorg</h1>
      <ul>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onQuantityChange={updateQuantity}
            onRemove={removeFromCart}
          />
        ))}
      </ul>
      <p>Totalt: {totalPrice.toFixed(2)} $</p>
      <Link to="/checkout">Gå till kassan</Link>
    </>
  );
}

export default CartPage;