import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

describe("Renders App component", () => {
  it("renders correctly", () => {
    render(<App />, { wrapper: MemoryRouter });
    expect(screen.getByTestId("test-app")).toBeInTheDocument();
  });
});
