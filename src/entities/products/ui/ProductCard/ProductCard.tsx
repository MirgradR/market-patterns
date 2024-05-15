import Image from "@/shared/ui/Image/Image";
import { Product } from "../../model/types";
import styles from "./styles.module.css";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <article className={styles.card}>
      <Image image={product.image} />

      <p>{product.title}</p>

      <p className={styles.price}>$ {product.price}</p>
    </article>
  );
};

export default ProductCard;
