import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "..";

describe("Header Component", () => {
  it("should render a Header Component", () => {
    const app = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(app).toMatchSnapshot();
  });
});
