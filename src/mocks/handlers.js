import { rest } from "msw";

export const handler = [
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
        ],
      })
    );
  }),

  rest.get("https://swapi.dev/api/people/:id", (req, res, ctx) => {
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

  rest.get("https://swapi.dev/api/planets/1/", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: "Tatooine",
      })
    );
  }),

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
