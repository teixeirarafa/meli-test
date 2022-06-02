import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import api from "../../services/api";
import Header from "../../components/Header";
import { DetailInterface } from "../../services/types";
import ErrorBox from "../../components/ErrorBox";
import DesiredProduct from "../../components/DesiredProduct";
import numberFormatCurrency from "../../utils/number-format-currency";
import NavigationBreadcrumb from "../../components/NavigationBreadcrumb";
import Loader from "../../components/Loader";

const Detail: React.FC = () => {
  let isError = false;
  let isLoading = true;
  const navigate = useNavigate();
  const id = useLocation().pathname.substring(7);
  const [detail, setDetail] = useState<DetailInterface>();

  useEffect(() => {
    if (typeof id !== "string") return;
    api
      .get(`items/${id}`)
      .then((response) => {
        setDetail(response.data);
        isLoading = false;
        isError = false;
      })
      .catch(() => {
        isError = true;
        isLoading = false;
      });
  }, [id]);

  function onSearchSubmit(query: string) {
    navigate(`/items?search=${query}`);
  }

  if (isError && !isLoading && detail) {
    <ErrorBox description="" title="¡Perdon!" />;
  }

  return (
    <>
      <Header onSearchSubmit={onSearchSubmit} searchText="" />
      <NavigationBreadcrumb categories={[]} />
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
        <Loader />
      )}
    </>
  );
};

export default Detail;
