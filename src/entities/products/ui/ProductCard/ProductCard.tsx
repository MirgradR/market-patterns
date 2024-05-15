import Image from "@/shared/ui/Image/Image";
import { Product } from "../../model/types";
import styles from "./styles.module.css";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <article className={styles.card}>
      {product.category === "jewelery" && <Image image={product.image} />}

      <p
        style={{
          color:
            product.category === "electronics"
              ? "blue"
              : product.category === "jewelery"
              ? "gold"
              : "black",
        }}
      >
        {product.title}{" "}
        {product.category === "electronics" && (
          <span>({product.category})</span>
        )}
      </p>

      {product.category !== "jewelery" && <Image image={product.image} />}

      {product.category === "women's clothing" ? (
        <div>
          <p className={styles.price}>Price: ${product.price}</p>
          <p className={styles.price}>Rate: {product.rating.rate}</p>
        </div>
      ) : (
        <p className={styles.price}>$ {product.price}</p>
      )}
    </article>
  );
};

export default ProductCard;
