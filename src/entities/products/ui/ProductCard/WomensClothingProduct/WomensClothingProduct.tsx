import Image from "@/shared/ui/Image/Image";
import { Product } from "../../../model/types";
import styles from "../styles.module.css";

interface Props {
  product: Product;
}

const WomensClothingProduct = ({ product }: Props) => (
  <article className={styles.card}>
    <p style={{ color: "black" }}>{product.title}</p>

    <div>
      <p className={styles.price}>Price: ${product.price}</p>
      <p className={styles.price}>Rate: {product.rating.rate}</p>
    </div>

    <Image image={product.image} />
  </article>
);

export default WomensClothingProduct;
