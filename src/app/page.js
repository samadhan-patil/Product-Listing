'use client';

import { useEffect, useState } from 'react';
import { fetchProducts } from '../lib/wooApi';
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products when the component mounts
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
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Product Listing</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {products.map((product) => (
            <div key={product.id} style={{ margin: '20px', border: '1px solid #ddd', padding: '10px', width: '200px' }}>
              <img src={product.images[0]?.src} alt={product.name} style={{ width: '100%' }} />
              <h3>{product.name}</h3>
              <p>{product.short_description}</p>
              <p><strong>Price:</strong> ${product.price}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
