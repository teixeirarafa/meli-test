import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "..";

describe("Header Component", () => {
  it("should render a Header Component", () => {
    const app = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(app.getByRole(".nav-header")).toHaveLength(1);
    expect(app.getByRole(".nav-header .container")).toHaveLength(1);
    expect(app.getByRole(".nav-header .container Logo")).toHaveLength(1);
    expect(app.getByRole(".nav-header .container ProductsSearch")).toHaveLength(
      1
    );
  });
});
