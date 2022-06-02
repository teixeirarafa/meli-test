import React from "react";
import { render } from "@testing-library/react";
import BreadcrumbList from "..";

describe("BreadcrumbList Component", () => {
  it("should render breadcrumb list component without categories", () => {
    const app = render(<BreadcrumbList categories={[]} />);

    expect(app).toMatchSnapshot();
  });
});
