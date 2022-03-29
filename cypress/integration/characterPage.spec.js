describe("Render CharacterDetails component", () => {
  it("renders CharacterDetails component fetching data from /character/1/ endpoint", () => {
    cy.visit("http://localhost:3000/character/1/");
    cy.wait(20000);
    cy.get(".CharacterDetails_characterContainer__0pgFq")
      .children()
      .should("have.length", 7);
    cy.get("h1").should("contain", "Luke Skywalker");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(2)"
    ).should("contain", "Home planet: Tatooine");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(3)"
    ).should("contain", "Hair colour: blond");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(4)"
    ).should("contain", "Eye colour: blue");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(5)"
    ).should("contain", "Gender: male");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(6)"
    ).should("contain", "Character Films:");
    cy.get("ul").children().should("have.length", 4);
    cy.contains("A New Hope").should("exist");
    cy.contains("The Empire Strikes Back").should("exist");
    cy.contains("Return of the Jedi").should("exist");
    cy.contains("Revenge of the Sith").should("exist");
  });
  it("renders CharacterDetails component fetching data from /character/2/ endpoint", () => {
    cy.wait(20000);
    cy.visit("http://localhost:3000/character/2/");
    cy.get(".CharacterDetails_characterContainer__0pgFq")
      .children()
      .should("have.length", 7);
    cy.get("h1").should("contain", "C-3PO");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(2)"
    ).should("contain", "Home planet: Tatooine");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(3)"
    ).should("contain", "Hair colour: n/a");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(4)"
    ).should("contain", "Eye colour: yellow");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(5)"
    ).should("contain", "Gender: n/a");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(6)"
    ).should("contain", "Character Films:");
    cy.get("ul").children().should("have.length", 6);
    cy.contains("A New Hope").should("exist");
    cy.contains("The Empire Strikes Back").should("exist");
    cy.contains("Return of the Jedi").should("exist");
    cy.contains("Revenge of the Sith").should("exist");
    cy.contains("Attack of the Clones").should("exist");
    cy.contains("Revenge of the Sith").should("exist");
  });
  it("renders CharacterDetails component fetching data from /character/3/ endpoint", () => {
    cy.wait(20000);
    cy.visit("http://localhost:3000/character/3/");
    cy.get(".CharacterDetails_characterContainer__0pgFq")
      .children()
      .should("have.length", 7);
    cy.get("h1").should("contain", "R2-D2");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(2)"
    ).should("contain", "Home planet: Naboo");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(3)"
    ).should("contain", "Hair colour: n/a");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(4)"
    ).should("contain", "Eye colour: red");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(5)"
    ).should("contain", "Gender: n/a");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(6)"
    ).should("contain", "Character Films:");
    cy.get("ul").children().should("have.length", 6);
    cy.contains("A New Hope").should("exist");
    cy.contains("The Empire Strikes Back").should("exist");
    cy.contains("Return of the Jedi").should("exist");
    cy.contains("The Phantom Menace").should("exist");
    cy.contains("Attack of the Clones").should("exist");
    cy.contains("Revenge of the Sith").should("exist");
  });
  it("renders CharacterDetails component fetching data from /character/4/ endpoint", () => {
    cy.wait(20000);
    cy.visit("http://localhost:3000/character/4/");
    cy.get(".CharacterDetails_characterContainer__0pgFq")
      .children()
      .should("have.length", 7);
    cy.get("h1").should("contain", "Darth Vader");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(2)"
    ).should("contain", "Home planet: Tatooine");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(3)"
    ).should("contain", "Hair colour: none");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(4)"
    ).should("contain", "Eye colour: yellow");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(5)"
    ).should("contain", "Gender: male");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(6)"
    ).should("contain", "Character Films:");
    cy.get("ul").children().should("have.length", 4);
    cy.contains("A New Hope").should("exist");
    cy.contains("The Empire Strikes Back").should("exist");
    cy.contains("Return of the Jedi").should("exist");
    cy.contains("Revenge of the Sith").should("exist");
  });
  it("renders CharacterDetails component fetching data from /character/5/ endpoint", () => {
    cy.wait(20000);
    cy.visit("http://localhost:3000/character/5/");
    cy.get(".CharacterDetails_characterContainer__0pgFq")
      .children()
      .should("have.length", 7);
    cy.get("h1").should("contain", "Leia Organa");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(2)"
    ).should("contain", "Home planet: Alderaan");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(3)"
    ).should("contain", "Hair colour: brown");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(4)"
    ).should("contain", "Eye colour: brown");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(5)"
    ).should("contain", "Gender: female");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(6)"
    ).should("contain", "Character Films:");
    cy.get("ul").children().should("have.length", 4);
    cy.contains("A New Hope").should("exist");
    cy.contains("The Empire Strikes Back").should("exist");
    cy.contains("Return of the Jedi").should("exist");
    cy.contains("Revenge of the Sith").should("exist");
  });
  it("renders CharacterDetails component fetching data from /character/6/ endpoint", () => {
    cy.wait(20000);
    cy.visit("http://localhost:3000/character/6/");
    cy.get(".CharacterDetails_characterContainer__0pgFq")
      .children()
      .should("have.length", 7);
    cy.get("h1").should("contain", "Owen Lars");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(2)"
    ).should("contain", "Home planet: Tatooine");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(3)"
    ).should("contain", "Hair colour: brown, grey");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(4)"
    ).should("contain", "Eye colour: blue");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(5)"
    ).should("contain", "Gender: male");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(6)"
    ).should("contain", "Character Films:");
    cy.get("ul").children().should("have.length", 3);
    cy.contains("A New Hope").should("exist");
    cy.contains("Attack of the Clones").should("exist");
    cy.contains("Revenge of the Sith").should("exist");
  });
  it("renders CharacterDetails component fetching data from /character/7/ endpoint", () => {
    cy.wait(20000);
    cy.visit("http://localhost:3000/character/7/");
    cy.get(".CharacterDetails_characterContainer__0pgFq")
      .children()
      .should("have.length", 7);
    cy.get("h1").should("contain", "Beru Whitesun lars");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(2)"
    ).should("contain", "Home planet: Tatooine");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(3)"
    ).should("contain", "Hair colour: brown");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(4)"
    ).should("contain", "Eye colour: blue");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(5)"
    ).should("contain", "Gender: female");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(6)"
    ).should("contain", "Character Films:");
    cy.get("ul").children().should("have.length", 3);
    cy.contains("A New Hope").should("exist");
    cy.contains("Attack of the Clones").should("exist");
    cy.contains("Revenge of the Sith").should("exist");
  });
  it("renders CharacterDetails component fetching data from /character/8/ endpoint", () => {
    cy.wait(20000);
    cy.visit("http://localhost:3000/character/8/");
    cy.get(".CharacterDetails_characterContainer__0pgFq")
      .children()
      .should("have.length", 7);
    cy.get("h1").should("contain", "R5-D4");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(2)"
    ).should("contain", "Home planet: Tatooine");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(3)"
    ).should("contain", "Hair colour: n/a");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(4)"
    ).should("contain", "Eye colour: red");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(5)"
    ).should("contain", "Gender: n/a");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(6)"
    ).should("contain", "Character Films:");
    cy.get("ul").children().should("have.length", 1);
    cy.contains("A New Hope").should("exist");
  });
  it("renders CharacterDetails component fetching data from /character/9/ endpoint", () => {
    cy.wait(20000);
    cy.visit("http://localhost:3000/character/9/");
    cy.get(".CharacterDetails_characterContainer__0pgFq")
      .children()
      .should("have.length", 7);
    cy.get("h1").should("contain", "Biggs Darklighter");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(2)"
    ).should("contain", "Home planet: Tatooine");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(3)"
    ).should("contain", "Hair colour: black");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(4)"
    ).should("contain", "Eye colour: brow");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(5)"
    ).should("contain", "Gender: male");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(6)"
    ).should("contain", "Character Films:");
    cy.get("ul").children().should("have.length", 1);
    cy.contains("A New Hope").should("exist");
  });
  it("renders CharacterDetails component fetching data from /character/10/ endpoint", () => {
    cy.wait(20000);
    cy.visit("http://localhost:3000/character/10/");
    cy.get(".CharacterDetails_characterContainer__0pgFq")
      .children()
      .should("have.length", 7);
    cy.get("h1").should("contain", "Obi-Wan Kenobi");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(2)"
    ).should("contain", "Home planet: Stewjon");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(3)"
    ).should("contain", "Hair colour: auburn, white");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(4)"
    ).should("contain", "Eye colour: blue-gray");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(5)"
    ).should("contain", "Gender: male");
    cy.get(
      ".CharacterDetails_characterContainer__0pgFq > :nth-child(6)"
    ).should("contain", "Character Films:");
    cy.get("ul").children().should("have.length", 6);
    cy.contains("A New Hope").should("exist");
    cy.contains("The Empire Strikes Back").should("exist");
    cy.contains("Return of the Jedi").should("exist");
    cy.contains("The Phantom Menace").should("exist");
    cy.contains("Attack of the Clones").should("exist");
    cy.contains("Revenge of the Sith").should("exist");
  });
});
