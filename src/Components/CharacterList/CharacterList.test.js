import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { server } from "../../mocks/server";
import { MemoryRouter } from "react-router-dom";
import CharacterList from "./index";

describe("Render CharacterList component", () => {
  it("should render character name for Luke Skywalker when api responses", async () => {
    render(<CharacterList />, { wrapper: MemoryRouter });
    expect(await screen.findByText("Luke Skywalker")).toBeInTheDocument();
  });
  it("should render gender male for character Luke Skywalker when api responses", async () => {
    render(<CharacterList />, { wrapper: MemoryRouter });
    expect(await screen.findByText("Gender: male")).toBeInTheDocument();
  });
  it("should render home planet Tatooine for character Luke Skywalker when api responses", async () => {
    render(<CharacterList />, { wrapper: MemoryRouter });
    expect(
      await screen.findByText("Home Planet: Tatooine")
    ).toBeInTheDocument();
  });
  it("should render error message when fetch fails", async () => {
    server.use(
      rest.get("https://swapi.dev/api/", (req, res, ctx) => {
        return res(ctx.status(400));
      })
    );
    render(<CharacterList />, { wrapper: MemoryRouter });
    expect(await screen.findByText("Loading...")).toBeInTheDocument();
  });
});
