import Image from "@/shared/ui/Image/Image";
import { ProductWithCurrency } from "../../../model/types";
import styles from "../styles.module.css";

interface Props {
  product: ProductWithCurrency;
}

const WomensClothingProduct = ({ product }: Props) => (
  <article className={styles.card}>
    <p style={{ color: "black" }}>{product.title}</p>

    <div>
      <p className={styles.price}>Price: {product.price}</p>
      <p className={styles.price}>Rate: {product.ratingRate}</p>
    </div>

    <Image image={product.image} />
  </article>
);

export default WomensClothingProduct;
