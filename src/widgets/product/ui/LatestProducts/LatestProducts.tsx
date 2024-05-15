import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Product, ProductCard } from "@/entities/products";
import { getProducts } from "@/entities/products/api/newsApi";

const LatestProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className={styles.latest}>
      <h5 className={styles.title}>Shop The Latest</h5>

      <ul className={styles.products}>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default LatestProducts;
