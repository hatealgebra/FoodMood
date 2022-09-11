import userData from "../fixtures/userData.json";

beforeEach(() => {
  cy.visit("/login");
});
describe("The login page", () => {
  it("loads the login page", () => {});
  it("redirects to register page after clicking link", () => {
    cy.contains(/create an account/i).click();
    cy.url().should("contain", "/register");
  });
});

describe("The login form", () => {
  it("should not prompt login, because all the field inputs are not fillex", () => {
    cy.get("button[type=submit]").contains(/login/i).click();
    cy.url().should("contain", "/login");
  });
  it("shows toast about incorrect login", () => {
    cy.get("input[name=email]").type("hello@cypress.io");
    cy.get("input[name=pwd]").type("Passwor12312421241");
    cy.get("button[type=submit]").click();
    cy.contains(/login does not match. either email/i);
  });
  it("logs in user", () => {
    cy.fixture("userData").then(({ email, pwd }) => {
      cy.get("input[name=email]").type(email);
      cy.get("input[name=pwd]").type(pwd);
      cy.get("button[type=submit]").click();
      cy.url().should("contains", "/app/home");
      cy.contains(/User was successfully logged in./i);
      cy.contains(/ct/i);
    });
  });
});
