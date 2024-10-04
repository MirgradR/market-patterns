import { useState } from "react";
import styles from "./styles.module.css";
import { useReactifyStore } from "@/shared/utils/hooks/useReactifyStore";
import { productStore } from "@/entities/products/model/productStore";

interface Props {
  strategy: (amount: number) => number;
  amount: number;
}

const discountStrategy1 = (amount: number) => amount * 0.95; // 5% скидка для 1-2 товаров
const discountStrategy2 = (amount: number) => amount * 0.9; // 10% скидка для 3-4 товаров
const discountStrategy3 = (amount: number) => amount * 0.85; // 15% скидка для 5 и более товаров

const DiscountBanner = ({ strategy, amount }: Props) => {
  const [discountedPrice, setDiscountedPrice] = useState(strategy(amount));

  const handleChangeStrategy = (newStrategy: (amount: number) => number) => {
    setDiscountedPrice(newStrategy(amount));
  };
  const [products, setStoreState] = useReactifyStore(productStore);
  console.log(products);
  console.log("---render discount");
  return (
    <div className={styles.banner}>
      <p className={styles.price}>Цена со скидкой: {discountedPrice}</p>

      <div
        onClick={() => setStoreState({ products: [] })}
        className={styles.buttons}
      >
        <button
          className={styles.button}
          onClick={() => handleChangeStrategy(discountStrategy1)}
        >
          1-2 товара
        </button>
        <button
          className={styles.button}
          onClick={() => handleChangeStrategy(discountStrategy2)}
        >
          3-4 товара
        </button>
        <button
          className={styles.button}
          onClick={() => handleChangeStrategy(discountStrategy3)}
        >
          5+ товаров
        </button>
      </div>
    </div>
  );
};

export default DiscountBanner;
