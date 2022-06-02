import { render } from "@testing-library/react";
import React from "react";
import ProductsSearch from "..";

describe("ProductsSearch", () => {
  it("should render ProductsSearch", () => {
    const app = render(<ProductsSearch onSubmit={() => ({})} />);

    expect(app).toMatchSnapshot();
  });
});
