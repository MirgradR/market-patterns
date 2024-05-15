import Image from "@/shared/ui/Image/Image";
import { Product } from "../../../model/types";
import styles from "../styles.module.css";

interface Props {
  product: Product;
}

const MensClothingProduct = ({ product }: Props) => (
  <article className={styles.card}>
    <p style={{ color: "black" }}>{product.title}</p>

    <p className={styles.price}>$ {product.price}</p>

    <Image image={product.image} />
  </article>
);

export default MensClothingProduct;
