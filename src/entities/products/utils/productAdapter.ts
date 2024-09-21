import { APIProduct, Product } from "../model/types";

export const adaptProductData = (apiProduct: APIProduct): Product => {
  return {
    id: apiProduct.id,
    title: apiProduct.title,
    description: apiProduct.description,
    image: apiProduct.image,
    category: apiProduct.category,
    price: apiProduct.price / 100,
    ratingCount: apiProduct.rating.count,
    ratingRate: apiProduct.rating.rate,
  };
};
