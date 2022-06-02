import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import Logo from "..";

describe("Logo Component", () => {
  it("should render a logo component", () => {
    const app = render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>,
    );

    expect(app).toMatchSnapshot();
  });
});
