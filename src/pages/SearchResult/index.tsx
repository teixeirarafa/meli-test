import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchItems } from "../../services/api";
import Header from "../../components/Header";
import { SearchResults } from "../../services/types";

let search: string;

const SearchResult: React.FC = () => {
  search = useLocation().search.substring(8);
  const [products, setProducts] = useState<SearchResults>();

  useEffect(() => {
    if (typeof search !== "string") return;
    searchItems(search).then((response) => {
      setProducts(response);
    });
  }, [search]);

  function onSearchSubmit(query: string) {
    console.log("SearchResult", query);
  }
  return (
    <>
      <Header onSearchSubmit={onSearchSubmit} searchText={search} />
      <h1>SearchResult</h1>
      {products
        ? products?.items.map((product) => {
            return <p>{product.title}</p>;
          })
        : console.log("error")}
    </>
  );
};

export default SearchResult;
