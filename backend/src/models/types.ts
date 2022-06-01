export interface AuthorInterface {
  name: string;
  lastname: string;
}

export interface ItemsInterface {
  id: string;
  title: string;
  picture: string;
  condition: string;
  free_shipping: boolean;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
}

export default class SearchResults {
  items: ItemsInterface[];
  categories: string[];
  author: AuthorInterface;
}

export interface DetailInterface extends ItemsInterface {
  author: AuthorInterface;
  description: string;
  sold_quantity: number;
}
