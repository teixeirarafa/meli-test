import { render } from "@testing-library/react";
import React from "react";

import ProductPrice from "..";

describe("ProductPrice Component", () => {
  it("should render ProductPrice with default props and a custom value", () => {
    const app = render(<ProductPrice value={100} />);

    expect(app).toMatchSnapshot();
  });
});
