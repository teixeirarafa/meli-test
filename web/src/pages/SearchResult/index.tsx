import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import api from "../../services/api";
import Header from "../../components/Header";
import { Category, SearchResults } from "../../services/types";
import ProductsList from "../../components/ProductsList";
import ErrorBox from "../../components/ErrorBox";
import NavigationBreadcrumb from "../../components/NavigationBreadcrumb";

let search: string;

const SearchResult: React.FC = () => {
  search = useLocation().search.substring(8);
  const [products, setProducts] = useState<SearchResults>();

  function onSearchSubmit(query: string) {
    search = query;
    api.get(`items?Q=${search}`).then((response) => {
      setProducts(response.data);
    });
  }

  function getFristThreeCategories(categories: Category[]) {
    return categories.slice(0, 3);
  }

  useEffect(() => {
    if (typeof search !== "string") return;
    onSearchSubmit(search);
  }, [search]);

  if (!products) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <Header onSearchSubmit={onSearchSubmit} searchText={search} />
      <NavigationBreadcrumb
        categories={getFristThreeCategories(products.categories)}
      />
      {products?.items.length ? (
        <ProductsList products={products?.items} />
      ) : (
        <ErrorBox description="" title="¡Perdon!" />
      )}
    </>
  );
};

export default SearchResult;
