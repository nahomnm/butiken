import { useState, useEffect } from "react";
import { fetchProducts } from "../utils/api";
import ProductList from "../components/ProductList";
import StatusMessage from "../components/StatusMessage";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch {
        setError("Kunde inte hämta produkter. Försök igen senare.");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) return <StatusMessage type="loading" message="Laddar produkter..." />;
  if (error) return <StatusMessage type="error" message={error} />;

  return (
    <>
      <h1>Produkter</h1>
      <ProductList products={products} />
    </>
  );
}

export default ProductsPage;