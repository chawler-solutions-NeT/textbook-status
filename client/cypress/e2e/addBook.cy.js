describe("Add Book", () => {
  beforeEach(() => {
    cy.visit("/add");
  });

  it("should render input fields and a submit button", () => {
    cy.get('input[name="title"]').should("exist");
    cy.get('input[name="author"]').should("exist");
    cy.get('input[name="status"]').should("exist");
    cy.get('button[type="submit"]').should("exist");
  });

  it("should update form state when input values change", () => {
    const title = "New Title";
    const author = "New Author";
    cy.get('input[name="title"]').type(title).should("have.value", title);
    cy.get('input[name="author"]').type(author).should("have.value", author);
    cy.get('input[name="status"]').check().should("be.checked");
  });

  it("should not submit when required fields are empty", () => {
    cy.get('button[type="submit"]').should("be.disabled");
  });

  it("should submit form when required fields are filled", () => {
    const title = "New Title";
    const author = "New Author";
    cy.get('input[name="title"]').type(title);
    cy.get('input[name="author"]').type(author);
    cy.get('button[type="submit"]').click();
    cy.get('button[type="submit"]').should("contain", "Loading...");
    cy.url().should("include", "/");
  });
});
