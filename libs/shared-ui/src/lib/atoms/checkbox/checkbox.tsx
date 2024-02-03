import React from "react";
import { Checkbox } from "@chakra-ui/react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderComponent } from "../../../helpers/testing.helpers";

describe("checkbox functionality", () => {
  test("checkbox has correct initial value", () => {});
  test("checkbox is  updated correctly", () => {
    renderComponent(<Checkbox initialValue={false}>Test</Checkbox>);
    const checkbox = screen.getByRole("checkbox");
    userEvent.click(checkbox);
    expect(checkbox).toHaveProperty("checked", true);
  });
});
