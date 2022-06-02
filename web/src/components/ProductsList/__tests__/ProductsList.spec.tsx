import React from "react";

import { render } from "@testing-library/react";
import ProductsList from "..";

function factoryProduct() {
  return {
    id: 123,
    title: "title",
    picture: "title",
    condition: "title",
    address: "title",
    free_shipping: true,
    price: {
      currency: "BRL",
      symbol: "R$",
      amount: 1000,
      decimals: 2,
    },
  };
}

describe("ProductsList Component", () => {
  it("should render ProductsList without products", () => {
    const app = render(<ProductsList products={[]} />);

    expect(app).toMatchSnapshot();
  });
});
