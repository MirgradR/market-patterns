import Image from "@/shared/ui/Image/Image";
import { ProductWithCurrency } from "../../../model/types";
import styles from "../styles.module.css";

interface Props {
  product: ProductWithCurrency;
}

const ElectronicsProduct = ({ product }: Props) => (
  <article className={styles.card}>
    <p style={{ color: "blue" }}>
      {product.title}
      <span>({product.category})</span>
    </p>

    <p className={styles.price}>{product.price}</p>

    <Image image={product.image} />
  </article>
);

export default ElectronicsProduct;
