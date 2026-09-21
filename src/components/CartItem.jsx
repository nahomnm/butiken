function CartItem({ item, onQuantityChange, onRemove }) {
  return (
    <li className="cart-item">
      <img src={item.image} alt={item.title} width="60" />
      <span>{item.title}</span>
      <span>{item.price} $</span>

      <div>
        <button onClick={() => onQuantityChange(item.id, item.quantity - 1)}>
          -
        </button>
        <span>{item.quantity}</span>
        <button onClick={() => onQuantityChange(item.id, item.quantity + 1)}>
          +
        </button>
      </div>

      <button onClick={() => onRemove(item.id)}>Ta bort</button>
    </li>
  );
}

export default CartItem;