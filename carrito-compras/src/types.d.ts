export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export type ListOfProducts = Array<Product>;

export interface Category {
  electronics: boolean;
  jewelery: boolean;
  mens_clothing: boolean;
  womens_clothing: boolean;
}

export interface itemCart {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}
