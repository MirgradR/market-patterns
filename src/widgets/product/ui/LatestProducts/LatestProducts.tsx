import { useEffect, useMemo, useState } from "react";
import styles from "./styles.module.css";
import { ProductCard } from "@/entities/products";
import { getProducts } from "@/entities/products/api/newsApi";
import { Product } from "@/entities/products/model/types";
import { useCurrencyStrategy } from "@/shared/utils/hooks/useCurrencyStrategy";

const LatestProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { currencyStrategy } = useCurrencyStrategy();

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

  const productsWithCurrency = useMemo(() => {
    return products.map((product) => ({
      ...product,
      price: currencyStrategy.formatPrice(product.price),
    }));
  }, [products, currencyStrategy]);

  return (
    <section className={styles.latest}>
      <h5 className={styles.title}>Shop The Latest</h5>

      <ul className={styles.products}>
        {productsWithCurrency.map((product) => {
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
