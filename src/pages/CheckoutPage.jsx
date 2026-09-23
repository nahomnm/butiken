import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CheckoutForm from "../components/CheckoutForm";

function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);

  function handleOrder(values) {
    console.log("Beställning:", values, cart);
    clearCart();
    setOrderPlaced(true);
  }

  if (orderPlaced) {
    return (
      <>
        <h1>Tack för din beställning!</h1>
        <button onClick={() => navigate("/")}>Tillbaka till produkter</button>
      </>
    );
  }

  if (cart.length === 0) {
    return <h1>Din varukorg är tom.</h1>;
  }

  return (
    <>
      <h1>Kassa</h1>
      <CheckoutForm onSubmit={handleOrder} />
    </>
  );
}

export default CheckoutPage;