import axios, { AxiosResponse } from "axios";
import { SearchResults, ItemInterface } from "./types";

interface Response<T> {
  statusCode: number;
  body: T;
}

const api = axios.create({
  baseURL: "https://api.mercadolibre.com",
});

export const searchItems = async (query: string): Promise<SearchResults> => {
  const response: AxiosResponse = await api.get(`sites/MLA/search?q=${query}`);

  const { body }: Response<SearchResults> = response.data;
  return body;
};

export const findItem = async (itemId: string): Promise<ItemInterface> => {
  const response: AxiosResponse = await api.get(`/items/${itemId}`);

  const { body }: Response<ItemInterface> = response.data;

  return body;
};
