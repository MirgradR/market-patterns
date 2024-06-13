export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
}

export interface ProductWithCurrency extends Omit<Product, "price"> {
  price: string;
}
