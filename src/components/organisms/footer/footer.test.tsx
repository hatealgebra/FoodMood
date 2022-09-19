import React from "react";

import { screen } from "@testing-library/react";

import Footer from "./Footer";
import { renderComponent } from "../../../helpers/testing.helpers";
import * as routerConstantClass from "../../../utils/constants/router.constants";

beforeEach(() => renderComponent(<Footer />));

describe("Testing footer nav links", () => {
  test("goes to homepage", () => {
    const homepageLink = screen.getByRole("link", { name: "Homepage" });
    expect(homepageLink).toHaveAttribute("href", "/");
  });

  test("Explore app", () => {
    const appHomepage = screen.getByRole("link", { name: /explore app/i });
    expect(appHomepage).toHaveAttribute(
      "href",
      routerConstantClass.ROUTE_APP.APP_HOME_PAGE
    );
  });

  test("About page", () => {
    const aboutPage = screen.getByRole("link", { name: /about/i });
    expect(aboutPage).toHaveAttribute(
      "href",
      routerConstantClass.ROUTE_WEB.ABOUT_PAGE
    );
  });

  test("Terms & Policy", () => {
    const termsPolicy = screen.getByRole("link", { name: /terms & policy/i });
    expect(termsPolicy).toHaveAttribute(
      "href",
      routerConstantClass.ROUTE_WEB.TERMS_POLICY_PAGE
    );
  });
});

describe("Testing social links", () => {
  test("redirects to the social media pages", () => {
    const socialURLs = [
      "https://www.facebook.com/Strive.for.food",
      "https://www.instagram.com/hatealgebra/",
      "https://www.linkedin.com/in/pavel-vondra-603012201/",
    ];
    const socialLinks = screen.getAllByRole("link", { name: "social-link" });
    socialLinks.map((link, i) =>
      expect(link).toHaveAttribute("href", socialURLs[i])
    );
  });
});
