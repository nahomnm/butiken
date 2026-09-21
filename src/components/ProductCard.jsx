import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} width="150" />
        <h2>{product.title}</h2>
      </Link>
      <p>{product.price} $</p>
    </article>
  );
}

export default ProductCard;