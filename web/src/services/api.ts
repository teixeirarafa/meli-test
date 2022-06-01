import axios, { AxiosResponse } from "axios";
import { ItemInterface } from "./types";

interface Response<T> {
  statusCode: number;
  body: T;
}

export const api = axios.create({
  baseURL: "http://localhost:3001/api/",
});

export const findItem = async (id: string): Promise<ItemInterface> => {
  const response: AxiosResponse = await api.get(`items/${id}`);

  const { body }: Response<ItemInterface> = response.data;

  return body;
};
