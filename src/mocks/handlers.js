import { rest } from "msw";

export const handler = [
  //responses to fetch by people
  rest.get("https://swapi.dev/api/people/", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: [
          {
            name: "Luke Skywalker",
            gender: "male",
            homeworld: "https://swapi.dev/api/planets/1/",
            url: "https://swapi.dev/api/people/1/",
          },
          {
            name: "C3-PO",
            gender: "n/a",
            homeworld: "https://swapi.dev/api/planets/1/",
            url: "https://swapi.dev/api/people/2/",
          },
          {
            name: "R2-D2",
            gender: "n/a",
            homeworld: "https://swapi.dev/api/planets/8/",
            url: "https://swapi.dev/api/people/3/",
          },
          {
            name: "Darth Vader",
            gender: "male",
            homeworld: "https://swapi.dev/api/planets/1/",
            url: "https://swapi.dev/api/people/4/",
          },
          {
            name: "Leia Organa",
            gender: "female",
            homeworld: "https://swapi.dev/api/planets/2/",
            url: "https://swapi.dev/api/people/5/",
          },
          {
            name: "Owen Lars",
            gender: "male",
            homeworld: "https://swapi.dev/api/planets/1/",
            url: "https://swapi.dev/api/people/6/",
          },
          {
            name: "Beru Whitesun lars",
            gender: "female",
            homeworld: "https://swapi.dev/api/planets/1/",
            url: "https://swapi.dev/api/people/7/",
          },
          {
            name: "R5-D4",
            gender: "n/a",
            homeworld: "https://swapi.dev/api/planets/1/",
            url: "https://swapi.dev/api/people/8/",
          },
          {
            name: "Biggs Darklighter",
            gender: "male",
            homeworld: "https://swapi.dev/api/planets/1/",
            url: "https://swapi.dev/api/people/9/",
          },
          {
            name: "Obi-Wan Kenobi",
            gender: "male",
            homeworld: "https://swapi.dev/api/planets/20/",
            url: "https://swapi.dev/api/people/10/",
          },
        ],
      })
    );
  }),

  //responses to fetch by people id
  rest.get("https://swapi.dev/api/people/1", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: "Luke Skywalker",
        hair_color: "blond",
        eye_color: "blue",
        gender: "male",
        homeworld: "https://swapi.dev/api/planets/1/",
        films: [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/2/",
          "https://swapi.dev/api/films/3/",
          "https://swapi.dev/api/films/6/",
        ],
      })
    );
  }),
  rest.get("https://swapi.dev/api/people/2", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: "C-3PO",
        hair_color: "n/a",
        eye_color: "yellow",
        gender: "n/a",
        homeworld: "https://swapi.dev/api/planets/1/",
        films: [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/2/",
          "https://swapi.dev/api/films/3/",
          "https://swapi.dev/api/films/4/",
          "https://swapi.dev/api/films/5/",
          "https://swapi.dev/api/films/6/",
        ],
      })
    );
  }),
  rest.get("https://swapi.dev/api/people/3", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: "R2-D2",
        hair_color: "n/a",
        eye_color: "red",
        gender: "n/a",
        homeworld: "https://swapi.dev/api/planets/8/",
        films: [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/2/",
          "https://swapi.dev/api/films/3/",
          "https://swapi.dev/api/films/4/",
          "https://swapi.dev/api/films/5/",
          "https://swapi.dev/api/films/6/",
        ],
      })
    );
  }),
  rest.get("https://swapi.dev/api/people/4", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: "Darth Vader",
        hair_color: "none",
        eye_color: "yellow",
        gender: "male",
        homeworld: "https://swapi.dev/api/planets/1/",
        films: [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/2/",
          "https://swapi.dev/api/films/3/",
          "https://swapi.dev/api/films/6/",
        ],
      })
    );
  }),
  rest.get("https://swapi.dev/api/people/5", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: "Leia Organa",
        hair_color: "brown",
        eye_color: "brown",
        gender: "female",
        homeworld: "https://swapi.dev/api/planets/2/",
        films: [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/2/",
          "https://swapi.dev/api/films/3/",
          "https://swapi.dev/api/films/6/",
        ],
      })
    );
  }),
  rest.get("https://swapi.dev/api/people/6", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: "Owen Lars",
        hair_color: "brown, grey",
        eye_color: "blue",
        gender: "male",
        homeworld: "https://swapi.dev/api/planets/1/",
        films: [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/5/",
          "https://swapi.dev/api/films/6/",
        ],
      })
    );
  }),
  rest.get("https://swapi.dev/api/people/7", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: "Beru Whitesun lars",
        hair_color: "brown",
        eye_color: "blue",
        gender: "male",
        homeworld: "https://swapi.dev/api/planets/1/",
        films: [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/5/",
          "https://swapi.dev/api/films/6/",
        ],
      })
    );
  }),
  rest.get("https://swapi.dev/api/people/8", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: "R5-D4",
        hair_color: "n/a",
        eye_color: "red",
        gender: "n/a",
        homeworld: "https://swapi.dev/api/planets/1/",
        films: ["https://swapi.dev/api/films/1/"],
      })
    );
  }),
  rest.get("https://swapi.dev/api/people/9", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: "Biggs Darklighter",
        hair_color: "black",
        eye_color: "brown",
        gender: "male",
        homeworld: "https://swapi.dev/api/planets/1/",
        films: ["https://swapi.dev/api/films/1/"],
      })
    );
  }),
  rest.get("https://swapi.dev/api/people/10", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: "Obi-Wan Kenobi",
        hair_color: "auburn, white",
        eye_color: "blue-gray",
        gender: "male",
        homeworld: "https://swapi.dev/api/planets/20/",
        films: [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/2/",
          "https://swapi.dev/api/films/3/",
          "https://swapi.dev/api/films/4/",
          "https://swapi.dev/api/films/5/",
          "https://swapi.dev/api/films/6/",
        ],
      })
    );
  }),
  //responses to fetch by planet id
  rest.get("https://swapi.dev/api/planets/1/", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: "Tatooine",
      })
    );
  }),
  rest.get("https://swapi.dev/api/planets/2/", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: "Alderaan",
      })
    );
  }),
  rest.get("https://swapi.dev/api/planets/8/", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: "Naboo",
      })
    );
  }),
  rest.get("https://swapi.dev/api/planets/20/", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: "Stewjon",
      })
    );
  }),
  //responses to fetch by films id
  rest.get("https://swapi.dev/api/films/1/", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        title: "A New Hope",
      })
    );
  }),
  rest.get("https://swapi.dev/api/films/2/", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        title: "The Empire Strikes Back",
      })
    );
  }),
  rest.get("https://swapi.dev/api/films/3/", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        title: "Return of the Jedi",
      })
    );
  }),
  rest.get("https://swapi.dev/api/films/4/", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        title: "The Phantom Menace",
      })
    );
  }),
  rest.get("https://swapi.dev/api/films/5/", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        title: "Attack of the Clones",
      })
    );
  }),
  rest.get("https://swapi.dev/api/films/6/", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        title: "Revenge of the Sith",
      })
    );
  }),
];
