import {
  screen,
  render,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { server } from "../../mocks/server";
import { rest } from "msw";
import CharacterList from "./index";

describe("Renders CharacterList component", () => {
  it("renders correctly", async () => {
    render(<CharacterList />, { wrapper: MemoryRouter });
    await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));
    expect(await screen.findAllByRole("link", { current: false })).toHaveLength(
      10
    );
  });

  it("displays character's name when fetches data", async () => {
    render(<CharacterList />, { wrapper: MemoryRouter });
    await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));
    expect(await screen.findByText(/Luke Skywalker/i)).toBeInTheDocument();
    expect(await screen.findByText(/C3-PO/i)).toBeInTheDocument();
    expect(await screen.findByText(/R2-D2/i)).toBeInTheDocument();
    expect(await screen.findByText(/Darth Vader/i)).toBeInTheDocument();
    expect(await screen.findByText(/Leia Organa/i)).toBeInTheDocument();
    expect(await screen.findByText(/Owen Lars/i)).toBeInTheDocument();
    expect(await screen.findByText(/Beru Whitesun lars/i)).toBeInTheDocument();
    expect(await screen.findByText(/R5-D4/i)).toBeInTheDocument();
    expect(await screen.findByText(/Biggs Darklighter/i)).toBeInTheDocument();
    expect(await screen.findByText(/Obi-Wan Kenobi/i)).toBeInTheDocument();
  });

  it("displays character's gender when fetches data", async () => {
    render(<CharacterList />, { wrapper: MemoryRouter });
    await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));
    expect(await screen.findAllByText(/Gender: male/i)).toHaveLength(5);
    expect(await screen.findAllByText(/Gender: female/i)).toHaveLength(2);
    expect(await screen.findAllByText("Gender: n/a")).toHaveLength(3);
  });

  it("displays character's home planets when fetches data", async () => {
    render(<CharacterList />, { wrapper: MemoryRouter });
    await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));
    expect(
      await screen.findByText(/Home Planet: Tatooine/i)
    ).toBeInTheDocument();
    expect(await screen.findByText(/Home Planet: Naboo/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/Home Planet: Stewjon/i)
    ).toBeInTheDocument();
    expect(await screen.findByText(/Home Planet: Naboo/i)).toBeInTheDocument();
  });

  it("displays loading message before fetches data", async () => {
    render(<CharacterList />, { wrapper: MemoryRouter });
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("displays error message when fetch fails", async () => {
    server.use(
      rest.get("https://swapi.dev/api/people/", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(<CharacterList />, { wrapper: MemoryRouter });
    await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));
    expect(
      await screen.findByText("Failed trying to fetch data")
    ).toBeInTheDocument();
  });
});
