// export interface APIProduct2 {
//   id: number;
//   header: string;
//   text: string;
//   imageUrl: string;
//   type: string;
//   cost: number;
//   rating: {
//     count: number;
//     rate: number;
//   };
// }

export interface APIProduct {
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

export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
  ratingCount: number;
  ratingRate: number;
}

export interface ProductWithCurrency extends Omit<Product, "price"> {
  price: string;
}
