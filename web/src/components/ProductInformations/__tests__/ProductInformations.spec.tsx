/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { render } from "@testing-library/react";
import ProductInformations, { ProductInformationsProps } from "..";

const product: ProductInformationsProps = {
  value: 1,
  name: "Rafael",
  condition: "new",
  sales: 10,
};

describe("ProductInformations Component", () => {
  it("should render ProductInformations with required props", () => {
    const app = render(<ProductInformations {...product} />);

    expect(app).toMatchSnapshot();
  });
});
