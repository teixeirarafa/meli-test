/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { render } from "@testing-library/react";
import DesiredProduct from "..";

describe("DesiredProduct Component", () => {
  it("should render DesiredProduct with informations", () => {
    const productInformations = {
      condition: "Nuevo",
      name: "Rafael",
      sales: 10,
      value: "1000",
      description: "description",
      onPurchaseClick: () => ({}),
    };

    const app = render(
      <DesiredProduct symbolCurrency="$" picture="" {...productInformations} />,
    );

    expect(app).toMatchSnapshot();
  });
});
