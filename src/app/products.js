import { useEffect, useState } from 'react';
import { fetchProducts } from '../lib/wooApi';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const productData = await fetchProducts();
      setProducts(productData);
      setLoading(false);
    };
    
    getProducts();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Product Listing</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <div key={product.id} style={{ margin: '20px', border: '1px solid #ddd', padding: '10px', width: '200px' }}>
            <img src={product.images[0]?.src} alt={product.name} style={{ width: '100%' }} />
            <h3>{product.name}</h3>
            <p><strong>Price:</strong> {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
