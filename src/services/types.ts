export interface AuthorInterface {
  name: string;
  lastname: string;
}

export interface ItemsInterface {
  id: string;
  title: string;
  picture: string;
  condition: string;
  address: string;
  free_shipping: boolean;
  price: {
    symbol: string;
    currency: string;
    amount: number;
    decimals: number;
  };
}

export interface SearchResults {
  items: ItemsInterface[];
  categories: string[];
  author: AuthorInterface;
}

export interface ItemInterface extends ItemsInterface {
  description: string;
  sold_quantity: number;
}

export interface ItemsState extends SearchResults {
  loading: boolean;
  error: boolean;
  errorDetails?: {
    message?: string;
    statusCode?: number;
  };
  selectedItem?: ItemInterface;
  searchQuery: string;
}
