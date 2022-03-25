import { render, screen } from "@testing-library/react";
import CharacterList from "./index";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { MemoryRouter } from "react-router-dom";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const server = setupServer(
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
  })
);

describe("render characters", () => {
  it("should render character name for Luke Skywalker when api responses", async () => {
    render(<CharacterList />, { wrapper: MemoryRouter });
    expect(await screen.findByText("Luke Skywalker")).toBeInTheDocument();
  });
  it("should render gender male for character Luke Skywalker when api responses", async () => {
    render(<CharacterList />, { wrapper: MemoryRouter });
    expect(await screen.findByText("Gender: male")).toBeInTheDocument();
  });
  it("should render home planet for character Luke Skywalker when api responses", async () => {
    render(<CharacterList />, { wrapper: MemoryRouter });
    expect(
      await screen.findByText("Home planet: https://swapi.dev/api/planets/1/")
    ).toBeInTheDocument();
  });
  it("should render error message when fetch fails", async () => {
    const server = setupServer(
      rest.get("https://swapi.dev/api/people/", (req, res, ctx) => {
        return res(ctx.status(400));
      })
    );
    render(<CharacterList />, { wrapper: MemoryRouter });
    expect(await screen.findByText("Loading...")).toBeInTheDocument();
  });
});
