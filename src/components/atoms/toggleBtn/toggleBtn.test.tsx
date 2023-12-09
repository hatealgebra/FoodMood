import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { renderComponent } from "../../../utils/helpers/testing.helpers";
import ToggleBtn from "./ToggleBtn";

describe("switching values", () => {
  test("switches correctly", () => {
    renderComponent(<ToggleBtn id="toggle-switch">This it switch</ToggleBtn>);
    const switchBtn = screen.getByRole("checkbox");
    userEvent.click(switchBtn);
    expect(switchBtn).toHaveProperty("checked", true);
  });
  test("renders initial value correctly", () => {
    renderComponent(
      <ToggleBtn id="toggle-switch" initialValue>
        This it switch
      </ToggleBtn>
    );
    const switchBtn = screen.getByRole("checkbox");
    expect(switchBtn).toHaveProperty("checked", true);
    userEvent.click(switchBtn);
    expect(switchBtn).toHaveProperty("checked", false);
  });
});
