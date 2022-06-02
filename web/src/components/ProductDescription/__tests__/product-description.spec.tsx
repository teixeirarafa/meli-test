/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { render } from "@testing-library/react";
import ProductDescription, { ProductDescriptionProps } from "..";

describe("ProductDescritpion Component", () => {
  it("should render a ProductDescription component", () => {
    const product: ProductDescriptionProps = {
      description: "description",
      title: "title",
    };

    const app = render(<ProductDescription {...product} />);

    expect(app).toMatchSnapshot();
  });
});
