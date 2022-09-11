import { a } from "msw/lib/glossary-297d38ba";

describe("The Home Page top panel links", () => {
  it("loads a home page", () => {
    cy.visit("/");
  });

  it("navigates to home page ", () => {
    cy.visit("/");
    cy.contains(/home/i).click();
    cy.url().should("include", "/");
  });
  it("navigates to about page ", () => {
    cy.visit("/");
    cy.contains(/about/i).click();
    cy.url().should("include", "/about");
  });
  it("navigates to terms & policy page", () => {
    cy.visit("/");
    cy.contains(/terms/i).click();
    cy.url().should("include", "/terms-&-policy");
  });
  it("navigate to login", () => {
    cy.visit("/");
    cy.get(".chakra-menu__menu-button").click();
    cy.contains(/sign in/i).click();
    cy.url().should("include", "/login");
  });
});

describe("The Home Page footer links", () => {
  it("navigates to about page ", () => {
    cy.visit("/");
    cy.contains(/homepage/i).click();
    cy.url().should("include", "/");
  });
  it("navigates to terms & policy page", () => {
    cy.visit("/");
    cy.contains(/about/i).last().click();
    cy.url().should("include", "/about");
  });
  it("navigates to terms & policy page", () => {
    cy.visit("/");
    cy.contains(/terms & policy/i).click();
    cy.url().should("include", "/terms-&-policy");
  });
});
