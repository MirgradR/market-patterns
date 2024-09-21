import { ProductWithCurrency } from "../../model/types";
import ElectronicsProduct from "./ElectronicsProduct/ElectronicsProduct";
import JewelryProduct from "./JewelryProduct/JewelryProduct";
import MensClothingProduct from "./MensClothingProduct/MensClothingProduct";
import WomensClothingProduct from "./WomensClothingProduct/WomensClothingProduct";

interface Props {
  product: ProductWithCurrency;
}

// export const ProductCardAdapter = ({ product }: Props) => {
//   const adaptetProduct = {
//     id: product.id,
//     title: product.title,
//     description: product.description,
//     image: product.image,
//     category: product.category,
//     price: product.price,
//     ratingCount: product.rating.count,
//     ratingRate: product.rating.rate,
//   };
//   return <ProductCard product={adaptetProduct} />;
// };

const ProductCard = ({ product }: Props) => {
  switch (product.category) {
    case "jewelery":
      return <JewelryProduct product={product} />;
    case "electronics":
      return <ElectronicsProduct product={product} />;
    case "women's clothing":
      return <WomensClothingProduct product={product} />;
    case "men's clothing":
      return <MensClothingProduct product={product} />;
    default:
      return null;
  }
};
export default ProductCard;
