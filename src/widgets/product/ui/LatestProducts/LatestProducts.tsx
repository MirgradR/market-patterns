import { useEffect, useMemo } from "react";
import styles from "./styles.module.css";
import { ProductCard } from "@/entities/products";
import { getProducts } from "@/entities/products/api/newsApi";
// import { Product } from "@/entities/products/model/types";
import { useCurrencyStrategy } from "@/shared/utils/hooks/useCurrencyStrategy";
import { useReactifyStore } from "@/shared/utils/hooks/useReactifyStore";
import { productStore } from "@/entities/products/model/productStore";

const LatestProducts = () => {
  // const [products, setProducts] = useState<Product[]>([]);
  const [store, setStoreState] = useReactifyStore(productStore);
  const { currencyStrategy } = useCurrencyStrategy();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setStoreState({ products: productsData });
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    if (store.products.length === 0) {
      fetchProducts();
    }
  }, [store.products]);

  console.log("---render products");

  const productsWithCurrency = useMemo(() => {
    if (!store.products) return [];
    return store.products.map((product) => ({
      ...product,
      price: currencyStrategy.formatPrice(product.price),
    }));
  }, [store.products, currencyStrategy]);

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
