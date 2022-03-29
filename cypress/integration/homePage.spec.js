describe("Render App and CharacterList components and routes to character's page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("renders App and CharacterList components", () => {
    cy.get(".App").should("exist");
    cy.get(".App").children().should("have.length", 10);
  });
  it("displays first character and checks route to character's page when clicks on the link", () => {
    cy.wait(10000);
    cy.get(".App > :nth-child(1)").children().should("have.length", 3);
    cy.get(":nth-child(1) > .CharacterList_links__JnoF3").should(
      "contain",
      "Luke Skywalker"
    );
    cy.get(".App > :nth-child(1) > :nth-child(2)").should(
      "contain",
      "Home Planet: Tatooine"
    );
    cy.get(".App > :nth-child(1) > :nth-child(3)").should(
      "contain",
      "Gender: male"
    );
    cy.get(":nth-child(1) > .CharacterList_links__JnoF3").click();
    cy.url().should("eq", "http://localhost:3000/character/1/");
    cy.get("h1").should("contain", "Luke Skywalker");
  });
  it("displays second character and checks route to character's page when clicks on the link", () => {
    cy.wait(10000);
    cy.get(".App > :nth-child(2)").children().should("have.length", 3);
    cy.get(":nth-child(2) > .CharacterList_links__JnoF3").should(
      "contain",
      "C-3PO"
    );
    cy.get(".App > :nth-child(2) > :nth-child(2)").should(
      "contain",
      "Home Planet: Tatooine"
    );
    cy.get(".App > :nth-child(2) > :nth-child(3)").should(
      "contain",
      "Gender: n/a"
    );
    cy.get(":nth-child(2) > .CharacterList_links__JnoF3").click();
    cy.url().should("eq", "http://localhost:3000/character/2/");
    cy.get("h1").should("contain", "C-3PO");
  });
  it("displays third character and checks route to character's page when clicks on the link", () => {
    cy.wait(10000);
    cy.get(".App > :nth-child(3)").children().should("have.length", 3);
    cy.get(":nth-child(3) > .CharacterList_links__JnoF3").should(
      "contain",
      "R2-D2"
    );
    cy.get(".App > :nth-child(3) > :nth-child(2)").should(
      "contain",
      "Home Planet: Naboo"
    );
    cy.get(".App > :nth-child(3) > :nth-child(3)").should(
      "contain",
      "Gender: n/a"
    );
    cy.get(":nth-child(3) > .CharacterList_links__JnoF3").click();
    cy.url().should("eq", "http://localhost:3000/character/3/");
    cy.get("h1").should("contain", "R2-D2");
  });
  it("displays fourth character and checks route to character's page when clicks on the link", () => {
    cy.wait(10000);
    cy.get(".App > :nth-child(4)").children().should("have.length", 3);
    cy.get(":nth-child(4) > .CharacterList_links__JnoF3").should(
      "contain",
      "Darth Vader"
    );
    cy.get(".App > :nth-child(4) > :nth-child(2)").should(
      "contain",
      "Home Planet: Tatooine"
    );
    cy.get(".App > :nth-child(4) > :nth-child(3)").should(
      "contain",
      "Gender: male"
    );
    cy.get(":nth-child(4) > .CharacterList_links__JnoF3").click();
    cy.url().should("eq", "http://localhost:3000/character/4/");
    cy.get("h1").should("contain", "Darth Vader");
  });
  it("displays fifth character and checks route to character's page when clicks on the link", () => {
    cy.wait(10000);
    cy.get(".App > :nth-child(5)").children().should("have.length", 3);
    cy.get(":nth-child(5) > .CharacterList_links__JnoF3").should(
      "contain",
      "Leia Organa"
    );
    cy.get(".App > :nth-child(5) > :nth-child(2)").should(
      "contain",
      "Home Planet: Alderaan"
    );
    cy.get(".App > :nth-child(5) > :nth-child(3)").should(
      "contain",
      "Gender: female"
    );
    cy.get(":nth-child(5) > .CharacterList_links__JnoF3").click();
    cy.url().should("eq", "http://localhost:3000/character/5/");
    cy.get("h1").should("contain", "Leia Organa");
  });
  it("displays sixth character and checks route to character's page when clicks on the link", () => {
    cy.wait(10000);
    cy.get(".App > :nth-child(6)").children().should("have.length", 3);
    cy.get(":nth-child(6) > .CharacterList_links__JnoF3").should(
      "contain",
      "Owen Lars"
    );
    cy.get(".App > :nth-child(6) > :nth-child(2)").should(
      "contain",
      "Home Planet: Tatooine"
    );
    cy.get(".App > :nth-child(6) > :nth-child(3)").should(
      "contain",
      "Gender: male"
    );
    cy.get(":nth-child(6) > .CharacterList_links__JnoF3").click();
    cy.url().should("eq", "http://localhost:3000/character/6/");
    cy.get("h1").should("contain", "Owen Lars");
  });
  it("displays seventh character and checks route to character's page when clicks on the link", () => {
    cy.wait(10000);
    cy.get(".App > :nth-child(7)").children().should("have.length", 3);
    cy.get(":nth-child(7) > .CharacterList_links__JnoF3").should(
      "contain",
      "Beru Whitesun lars"
    );
    cy.get(".App > :nth-child(7) > :nth-child(2)").should(
      "contain",
      "Home Planet: Tatooine"
    );
    cy.get(".App > :nth-child(7) > :nth-child(3)").should(
      "contain",
      "Gender: female"
    );
    cy.get(":nth-child(7) > .CharacterList_links__JnoF3").click();
    cy.url().should("eq", "http://localhost:3000/character/7/");
    cy.get("h1").should("contain", "Beru Whitesun lars");
  });
  it("displays eighth character and checks route to character's page when clicks on the link", () => {
    cy.wait(10000);
    cy.get(".App > :nth-child(8)").children().should("have.length", 3);
    cy.get(":nth-child(8) > .CharacterList_links__JnoF3").should(
      "contain",
      "R5-D4"
    );
    cy.get(".App > :nth-child(8) > :nth-child(2)").should(
      "contain",
      "Home Planet: Tatooine"
    );
    cy.get(".App > :nth-child(8) > :nth-child(3)").should(
      "contain",
      "Gender: n/a"
    );
    cy.get(":nth-child(8) > .CharacterList_links__JnoF3").click();
    cy.url().should("eq", "http://localhost:3000/character/8/");
    cy.get("h1").should("contain", "R5-D4");
  });
  it("displays ninth character and checks route to character's page when clicks on the link", () => {
    cy.wait(10000);
    cy.get(".App > :nth-child(9)").children().should("have.length", 3);
    cy.get(":nth-child(9) > .CharacterList_links__JnoF3").should(
      "contain",
      "Biggs Darklighter"
    );
    cy.get(".App > :nth-child(9) > :nth-child(2)").should(
      "contain",
      "Home Planet: Stewjon"
    );
    cy.get(".App > :nth-child(9) > :nth-child(3)").should(
      "contain",
      "Gender: male"
    );
    cy.get(":nth-child(9) > .CharacterList_links__JnoF3").click();
    cy.url().should("eq", "http://localhost:3000/character/9/");
    cy.get("h1").should("contain", "Biggs Darklighter");
  });
  it("displays tenth character and checks route to character's page when clicks on the link", () => {
    cy.wait(10000);
    cy.get(".App > :nth-child(10)").children().should("have.length", 3);
    cy.get(":nth-child(10) > .CharacterList_links__JnoF3").should(
      "contain",
      "Obi-Wan Kenobi"
    );
    cy.get(".App > :nth-child(10) > :nth-child(2)").should(
      "contain",
      "Home Planet: Tatooine"
    );
    cy.get(".App > :nth-child(10) > :nth-child(3)").should(
      "contain",
      "Gender: male"
    );
    cy.get(":nth-child(10) > .CharacterList_links__JnoF3").click();
    cy.url().should("eq", "http://localhost:3000/character/10/");
    cy.get("h1").should("contain", "Obi-Wan Kenobi");
  });
});
