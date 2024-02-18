import React from "react";

import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderComponent } from "../../../utils/helpers/testing.helpers";
import TopPanel from "./TopPanel";

describe("Devices rendering", () => {
  test("Mobile version", async () => {
    renderComponent(<TopPanel device="mobile" />);
    const hamburgerIcon = screen.getByLabelText("Menu button");
    const mobileMenu = await screen.findByLabelText("mobile-menu");
    expect(hamburgerIcon).toBeDefined();
    await waitFor(() => expect(mobileMenu).toBeInTheDocument());
  });

  test("Tablet version", async () => {
    renderComponent(<TopPanel device="tablet" />);
    const hamburgerIcon = screen.getByLabelText("Menu button");
    userEvent.click(hamburgerIcon);
    const tabletMenu = await screen.findByLabelText("tablet-drawer");
    expect(tabletMenu).toBeInTheDocument();
  });

  test("Desktop version", () => {
    renderComponent(<TopPanel device="desktop" />);
    const desktopNavigation = screen.getByRole("navigation", {
      name: "desktop-navigation",
    });
    expect(desktopNavigation).toBeInTheDocument();
  });
});

describe("Mobile version interaction", () => {
  beforeEach(() => renderComponent(<TopPanel device="mobile" />));
  test("toggling mobile menu", () => {
    const mobileMenu = screen.getByLabelText("mobile-menu");
    const hamburgerIcon = screen.getByLabelText("Menu button");
    expect(mobileMenu).toHaveStyle("opacity: 0; visibility: hidden");
    userEvent.click(hamburgerIcon);
    expect(mobileMenu).toHaveStyle("opacity: 1; visibility: visible;");
    userEvent.click(hamburgerIcon);
    expect(mobileMenu).toHaveStyle("opacity: 0; visibility: hidden");
  });
});
