import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { rest } from "msw";
import { server } from "../../mocks/server";
import CharacterDetails from "./index";
import { MemoryRouter } from "react-router-dom";

describe("Renders CharacterDetails component", () => {
  it("renders correctly", async () => {
    render(<CharacterDetails propId={1} />, { wrapper: MemoryRouter });

    await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));
    expect(
      await screen.findByRole("heading", { level: 1 })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("heading", { level: 2 })
    ).toBeInTheDocument();
  });
  it("displays character's details when fetches data", async () => {
    render(<CharacterDetails propId={1} />, { wrapper: MemoryRouter });
    await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));
    expect(await screen.findByText(/Luke Skywalker/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/Home planet: Tatooine/i)
    ).toBeInTheDocument();
    expect(await screen.findByText(/Hair colour: blond/i)).toBeInTheDocument();
    expect(await screen.findByText(/Gender: male/i)).toBeInTheDocument();
  });
  it("displays character's films when fetches data", async () => {
    render(<CharacterDetails propId={1} />, { wrapper: MemoryRouter });
    await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));
    expect(await screen.findByText(/A New Hope/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/Home planet: Tatooine/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/The Empire Strikes Back/i)
    ).toBeInTheDocument();
    expect(await screen.findByText(/Return of the Jedi/i)).toBeInTheDocument();
    expect(await screen.findByText(/Revenge of the Sith/i)).toBeInTheDocument();
  });
  it("displays loading message before fetches data", () => {
    render(<CharacterDetails propId={1} />, { wrapper: MemoryRouter });
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
  it("displays error message when fetch fails", async () => {
    server.use(
      rest.get("https://swapi.dev/api/people/1", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(<CharacterDetails propId={1} />, { wrapper: MemoryRouter });
    await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));
    expect(
      await screen.findByText("Failed trying to fetch data")
    ).toBeInTheDocument();
  });
});
