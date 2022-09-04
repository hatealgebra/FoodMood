import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { setupIsolatedComponent } from "../../../helpers/testing.helpers";
import { RadioSortBy } from "./dropdown.stories";

describe("Choose diet tests", () => {
  beforeEach(() => setupIsolatedComponent(<RadioSortBy />));
  test("Opens the dropdown", async () => {
    const menuButton = screen.getByRole("button", { name: /sort by/i });
    const dropdownMenu = screen.getByRole("menu", { hidden: true });
    expect(dropdownMenu.parentElement).toHaveStyle("visibility: hidden;");
    userEvent.click(menuButton);
    await waitFor(() => {
      expect(dropdownMenu.parentElement).toHaveStyle("visibility: visible");
    });
  });

  test("choose option", async () => {
    const menuButton = screen.getByRole("button", { name: /sort by/i });
    const caloriesLHBtn = screen.getByText(/calories: low to high/i);
    userEvent.click(menuButton);
    userEvent.click(caloriesLHBtn);
    await waitFor(() => {
      expect(menuButton).toHaveTextContent(/low high/i);
    });
  });
});
