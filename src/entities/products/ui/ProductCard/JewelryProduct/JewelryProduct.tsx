import Image from "@/shared/ui/Image/Image";
import { ProductWithCurrency } from "../../../model/types";
import styles from "../styles.module.css";

interface Props {
  product: ProductWithCurrency;
}

const JewelryProduct = ({ product }: Props) => (
  <article className={styles.card}>
    <Image image={product.image} />

    <p style={{ color: "gold" }}>{product.title}</p>

    <p className={styles.price}>{product.price}</p>
  </article>
);

export default JewelryProduct;
