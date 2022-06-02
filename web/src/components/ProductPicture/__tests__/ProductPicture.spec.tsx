import { render } from "@testing-library/react";
import React from "react";

import ProductPicture from "..";

describe("ProductPicture Component", () => {
  it("should render ProductPicture with default size", () => {
    const picture = {
      src: "abc",
      alt: "xyz",
    };

    const app = render(<ProductPicture {...picture} />);

    expect(app).toMatchSnapshot();
  });
});
