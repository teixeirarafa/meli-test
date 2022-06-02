export interface AuthorInterface {
  name: string;
  lastname: string;
}

export interface Category {
  id: string;
  name: string;
  results: number;
}
export interface ItemsInterface {
  id: string;
  title: string;
  picture: string;
  condition: string;
  free_shipping: boolean;
  address?: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
}

export default class SearchResults {
  items: ItemsInterface[];
  categories: Category[];
  author: AuthorInterface;
}

export interface DetailInterface extends ItemsInterface {
  author: AuthorInterface;
  description: string;
  sold_quantity: number;
}
