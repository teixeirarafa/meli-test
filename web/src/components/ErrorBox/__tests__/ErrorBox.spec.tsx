import React from "react";
import { render } from "@testing-library/react";
import ErrorBox from "..";

describe("ErrorBox Component", () => {
  it("should render ErrorBox", () => {
    const app = render(<ErrorBox />);

    expect(app).toMatchSnapshot();
  });
});
