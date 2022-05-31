import axios, { AxiosResponse } from "axios";

interface Response<T> {
  statusCode: number;
  body: T;
}

const api = axios.create({
  baseURL: "https://api.mercadolibre.com",
});

export default api;
