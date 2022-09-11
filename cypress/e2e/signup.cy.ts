describe("The signup page", () => {
  beforeEach(() => cy.login());
  it("loads signup page", () => {
    cy.visit("/register");
  });
  it("redirects to login page", () => {
    cy.visit("/register");
    cy.get("a[href*=login]").click();
    cy.url().should("contain", "/login");
  });
  it("shows homepage if user is logged in", () => {
    cy.visit("/register");
  });
});
