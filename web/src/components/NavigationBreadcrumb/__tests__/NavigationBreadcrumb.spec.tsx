import React from "react";

import { MemoryRouter } from "react-router-dom";

import { render } from "@testing-library/react";
import NavigationBreadcrumb from "..";

describe("NavigationBreadcrumb Component", () => {
  it("should render a NavigationBreadcrumb component without categories", () => {
    const app = render(
      <MemoryRouter>
        <NavigationBreadcrumb categories={[]} />
      </MemoryRouter>,
    );

    expect(app).toMatchSnapshot();
  });
});
