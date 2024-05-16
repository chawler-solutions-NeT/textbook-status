describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should navigate to List Book page when List Book link is clicked", () => {
    cy.contains("List Book").click();
    cy.url().should("include", "/");
  });

  it("should navigate to Add Book page when Add Book link is clicked", () => {
    cy.contains("Add Book").click();
    cy.url().should("include", "/add");
  });
});

describe("List Books Navigation Styling", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should have the correct styling for active and inactive NavLink", () => {
    cy.get("nav")
      .find("a")
      .each(($link, index) => {
        if (index === 0) {
          cy.wrap($link).should("have.css", "color", "rgb(255, 255, 255)");
          cy.wrap($link).should(
            "have.css",
            "background-color",
            "rgb(34, 34, 34)"
          );
        }
        if (index === 1) {
          cy.wrap($link).should("have.css", "color", "rgb(0, 0, 0)");
          cy.wrap($link).should(
            "have.css",
            "background-color",
            "rgb(255, 255, 255)"
          );
        }
      });
  });
});

describe("Add Book Navigation Styling", () => {
  beforeEach(() => {
    cy.visit("/add");
  });

  it("should have the correct styling for active and inactive NavLink", () => {
    cy.get("nav")
      .find("a")
      .each(($link, index) => {
        if (index === 0) {
          cy.wrap($link).should("have.css", "color", "rgb(0, 0, 0)");
          cy.wrap($link).should(
            "have.css",
            "background-color",
            "rgb(255, 255, 255)"
          );
        }
        if (index === 1) {
          cy.wrap($link).should("have.css", "color", "rgb(255, 255, 255)");
          cy.wrap($link).should(
            "have.css",
            "background-color",
            "rgb(34, 34, 34)"
          );
        }
      });
  });
});
