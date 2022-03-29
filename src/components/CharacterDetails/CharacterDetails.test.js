import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { server } from "../../mocks/server";
import CharacterDetails from "./index";

describe("Render CharacterDetails component", () => {
  it("should render character name for C-3PO when api responses", async () => {
    render(<CharacterDetails />);
    expect(await screen.findByText("C-3PO")).toBeInTheDocument();
  });
  it("should render hair colour n/a for character C-3PO when api responses", async () => {
    render(<CharacterDetails />);
    expect(await screen.findByText("Hair colour: n/a")).toBeInTheDocument();
  });
  it("should render eye colour yellow for character C-3PO when api responses", async () => {
    render(<CharacterDetails />);
    expect(await screen.findByText("Eye colour: yellow")).toBeInTheDocument();
  });
  it("should render gender n/a for character C-3PO when api responses", async () => {
    render(<CharacterDetails />);
    expect(await screen.findByText("Gender: n/a")).toBeInTheDocument();
  });
  it("should render home planet Tatooine for character C-3PO when api responses", async () => {
    render(<CharacterDetails />);
    expect(
      await screen.findByText("Home planet: Tatooine")
    ).toBeInTheDocument();
  });
  it("should render list of films for character C-3PO when api responses", async () => {
    render(<CharacterDetails />);
    expect(await screen.findByText("Return of the Jedi")).toBeInTheDocument();
  });
  it("should render error message when fetch fails", async () => {
    server.use(
      rest.get("https://swapi.dev/api/people/:id", (req, res, ctx) => {
        const { id } = req.params;
        return res(ctx.status(400));
      })
    );
    render(<CharacterDetails />);
    expect(await screen.findByText("Loading...")).toBeInTheDocument();
  });
});
