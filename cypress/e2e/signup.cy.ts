import userData from "../fixtures/userData.json";

describe("The signup page", () => {
  before(() => cy.logout());
  it("loads signup page", () => {
    cy.visit("/register");
  });
  it("redirects to login page", () => {
    cy.visit("/register");
    cy.get("a[href*=login]").click();
    cy.url().should("contain", "/login");
  });
  it("shows toast that login under this email exists", () => {
    cy.visit("/register");
    cy.fixture("userData").then(({ name, email, pwd }) => {
      cy.get("input[name=name]").type(name);
      cy.get("input[name=email]").type(email);
      cy.get("input[name=password]").type(pwd);
      cy.get("input[name=passwordAgain]").type(pwd);
    });
    cy.get("button[type=submit]").click();
    cy.url().should("contains", "/register");
    cy.contains(
      /This email is already in the use, please select different email. Thank you./i
    );
  });
  // it("shows homepage if user is logged in", () => {
  //   cy.login();
  //   cy.reload();
  //   cy.visit("/register");
  //   cy.url().should("contain", "/app/home");
  // });
});
