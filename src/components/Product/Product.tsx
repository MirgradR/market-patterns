import { Product } from "../../types/types";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => (
  <div
    style={{
      margin: "20px",
      border: "1px solid #ccc",
      padding: "10px",
      width: "300px",
    }}
  >
    <img
      src={product.image}
      alt={product.title}
      style={{ width: "100px", height: "100px" }}
    />
    <h2>{product.title}</h2>
    <p>{product.description}</p>
    <p>Category: {product.category}</p>
    <strong>${product.price}</strong>
  </div>
);

export default ProductCard;
