import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import api from "../../services/api";
import Header from "../../components/Header";
import { DetailInterface } from "../../services/types";
import ErrorBox from "../../components/ErrorBox";
import DesiredProduct from "../../components/DesiredProduct";
import numberFormatCurrency from "../../utils/number-format-currency";

const Detail: React.FC = () => {
  const id = useLocation().pathname.substring(7);
  const [detail, setDetail] = useState<DetailInterface>();

  useEffect(() => {
    if (typeof id !== "string") return;
    api.get(`items/${id}`).then((response) => {
      setDetail(response.data);
    });
  }, [id]);

  function onSearchSubmit(query: string) {
    console.log("SearchResult", query);
  }

  if (!detail) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <Header onSearchSubmit={onSearchSubmit} searchText="" />
      {detail ? (
        <DesiredProduct
          condition={detail.condition}
          description={detail.description}
          name={detail.title}
          onPurchaseClick={() => ({})}
          picture={detail.picture}
          sales={detail.sold_quantity}
          symbolCurrency="$"
          value={numberFormatCurrency({
            currency: detail.price.currency,
            decimals: detail.price.decimals,
            value: detail.price.amount,
          })}
        />
      ) : (
        <ErrorBox description="" title="¡Perdon!" />
      )}
    </>
  );
};

export default Detail;
