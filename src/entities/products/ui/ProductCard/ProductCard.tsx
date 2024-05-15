import Image from "@/shared/ui/Image/Image";
import { Product } from "../../model/types";
import styles from "./styles.module.css";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const getTitleColor = () => {
    switch (product.category) {
      case "electronics":
        return "blue";
      case "jewelery":
        return "gold";
      default:
        return "black";
    }
  };

  const renderTitle = () => (
    <p style={{ color: getTitleColor() }}>
      {product.title}
      {product.category === "electronics" && <span> ({product.category})</span>}
    </p>
  );

  const renderPrice = () => {
    if (product.category === "women's clothing") {
      return (
        <div>
          <p className={styles.price}>Price: ${product.price}</p>
          <p className={styles.price}>Rate: {product.rating.rate}</p>
        </div>
      );
    }
    return <p className={styles.price}>$ {product.price}</p>;
  };

  return (
    <article className={styles.card}>
      {product.category === "jewelery" && <Image image={product.image} />}
      {renderTitle()}
      {renderPrice()}
      {product.category !== "jewelery" && <Image image={product.image} />}
    </article>
  );
};

export default ProductCard;
