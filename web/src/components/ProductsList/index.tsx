import React from "react";
import { Link } from "react-router-dom";
import ProductPicture from "../ProductPicture";
import ProductInformations from "../ProductInformations";

import "./products-list.styles.scss";
import numberFormatCurrency from "../../utils/number-format-currency";
import { ItemsInterface } from "../../services/types";

interface Props {
  products: ItemsInterface[];
}

const ProductsList: React.FC<Props> = ({ products }) => {
  return (
    <ol className="products-list">
      {products.map(
        ({
          id,
          title,
          picture,
          free_shipping: freeShiping,
          price,
          address,
        }) => (
          <li className="products-list__product" key={id}>
            <Link to={`/items/${id}`}>
              <ProductPicture alt={title} src={picture} large={false} />
              <ProductInformations
                address={address}
                hideShippingIcon={!freeShiping}
                name={title}
                symbolCurrency="$"
                value={numberFormatCurrency({
                  currency: price.currency,
                  decimals: price.decimals,
                  value: price.amount,
                })}
              />
            </Link>
          </li>
        ),
      )}
    </ol>
  );
};

export default React.memo(ProductsList);
