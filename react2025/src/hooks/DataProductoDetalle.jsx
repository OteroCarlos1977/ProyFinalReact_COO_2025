import { useState, useEffect } from 'react';

function useFetchProductById(baseUrl, id) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return; // evita hacer la petición si no hay id

    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${baseUrl}/${id}`);
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const jsonData = await response.json();
        setProduct(jsonData);
      } catch (err) {
        setError(err.message);
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [baseUrl, id]);

  return { product, loading, error };
}

export default useFetchProductById;
