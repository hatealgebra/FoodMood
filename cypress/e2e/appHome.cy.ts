describe("The app homepage", () => {
  it("shows the login", () => {
    cy.logout();
    cy.visit("/app/home");
    cy.url().should("contain", "/login");
  });
  it("shows the app homepage", () => {
    cy.login();
    cy.visit("/app/home");
    cy.url().should("contain", "/app/home");
    cy.get("h2").should("contain", /your daily recipes/i);
    cy.get("h2").should("contain", /today's meal plan/i);
    cy.get("h2").should("contain", /my favourites/i);
    cy.get(".recipe-card").should("have.length.above", 19);
    cy.contains(/Kristina's Greek Chicken Salad/i);
  });
});

describe("The App navbar redirections", () => {
  it("redirects to search recipes", () => {
    cy.get("a")
      .contains(/search/i)
      .click();
    cy.url().should("contain", "/app/search");
  });
  it("redirects to saved recipes", () => {
    cy.get("a")
      .contains(/saved recipes/i)
      .click();
    cy.url().should("contain", "/app/saved-recipes");
    cy.logout();
  });
});
