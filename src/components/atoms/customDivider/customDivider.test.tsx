import React from "react";

import { screen } from "@testing-library/react";
import { renderComponent } from "../../../helpers/testing.helpers";

import CustomDivider from "./CustomDivider";

describe("Text props", () => {
  test("renders correct text", () => {
    renderComponent(<CustomDivider>This is divider</CustomDivider>);
    const divider = screen.getByLabelText("divider");
    expect(divider).toHaveTextContent(/This is divider/i);
  });
});

describe("Width props", () => {
  test("has correct width style property", () => {
    renderComponent(
      <CustomDivider width="200px">This is another divider</CustomDivider>
    );
    const divider = screen.getByLabelText("divider");
    expect(divider).toHaveStyle("width: 200px");
  });
});
