import { screen } from "@testing-library/react";
import React from "react";

import * as routeConstantClass from "../../../utils/constants/router.constants";

import { renderComponent } from "../../../utils/helpers/testing.helpers";
import MobileMenu from "./MobileMenu";

beforeEach(() => renderComponent(<MobileMenu isOpen />));

describe("Rendering the menu", () => {
  test("renders 4 links", () => {
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(4);
  });
});

describe("Correct link href", () => {
  test("Correct homepage href", () => {
    const link = screen.getByRole("link", { name: /homepage/i });
    expect(link).toHaveAttribute("href", "/");
  });
  test("Correct explore app href", () => {
    const link = screen.getByRole("link", { name: /explore app/i });
    expect(link).toHaveAttribute(
      "href",
      routeConstantClass.ROUTE_APP.APP_HOME_PAGE
    );
  });
  test("Correct about href", () => {
    const link = screen.getByRole("link", { name: /about/i });
    expect(link).toHaveAttribute(
      "href",
      routeConstantClass.ROUTE_WEB.ABOUT_PAGE
    );
  });
  test("Correct terms & policy href", () => {
    const link = screen.getByRole("link", { name: /terms & policy/i });
    expect(link).toHaveAttribute(
      "href",
      routeConstantClass.ROUTE_WEB.TERMS_POLICY_PAGE
    );
  });
});
