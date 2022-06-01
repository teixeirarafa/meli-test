import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { api } from "../../services/api";
import Header from "../../components/Header";
import { SearchResults } from "../../services/types";
import ProductsList from "../../components/ProductsList";
import ErrorBox from "../../components/ErrorBox";

let search: string;

const SearchResult: React.FC = () => {
  search = useLocation().search.substring(8);
  const [products, setProducts] = useState<SearchResults>();

  useEffect(() => {
    if (typeof search !== "string") return;
    api.get(`items?Q=${search}`).then((response) => {
      setProducts(response.data);
    });
  }, [search]);

  function onSearchSubmit(query: string) {
    console.log("SearchResult", query);
  }

  if (!products) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <Header onSearchSubmit={onSearchSubmit} searchText={search} />
      {products?.items.length ? (
        <ProductsList products={products?.items} />
      ) : (
        <ErrorBox description="" title="¡Perdon!" />
      )}
    </>
  );
};

export default SearchResult;
