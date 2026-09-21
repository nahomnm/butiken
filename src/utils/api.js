const BASE_URL = "https://fakestoreapi.com";

export async function fetchProducts() {
  const response = await fetch(`${BASE_URL}/products`);

  if (!response.ok) {
    throw new Error(`Servern svarade med status ${response.status}`);
  }

  return response.json();
}