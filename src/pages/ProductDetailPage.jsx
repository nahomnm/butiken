import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProductById } from "../utils/api";
import { useCart } from "../context/CartContext";
import StatusMessage from "../components/StatusMessage";

function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProduct() {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchProductById(id);
        setProduct(data);
      } catch {
        setError("Kunde inte hämta produkten. Försök igen senare.");
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [id]);

  if (loading) return <StatusMessage type="loading" message="Laddar produkt..." />;
  if (error) return <StatusMessage type="error" message={error} />;
  if (!product) return <StatusMessage type="error" message="Produkten hittades inte." />;

  return (
    <article>
      <Link to="/">← Tillbaka till produkter</Link>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width="250" />
      <p>{product.description}</p>
      <p>{product.price} $</p>
      <button onClick={() => addToCart(product)}>Lägg i varukorg</button>
    </article>
  );
}

export default ProductDetailPage;