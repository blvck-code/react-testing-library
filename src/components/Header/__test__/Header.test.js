import Header from "../Header";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
  // GET BY TEXT

  it("should render some text passed into title prop", async () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
  });

  // GET BY ROLE

  it("should render by getByRole", async () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByRole("heading", { name: "My Header" });
    expect(headingElement).toBeInTheDocument();
  });

  // GET BY TITLE

  it("should render by title", async () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByTitle("Header");
    expect(headingElement).toBeInTheDocument();
  });

  // GET BY TEST ID

  it("should render by test Id", async () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByTestId("header-1");
    expect(headingElement).toBeInTheDocument();
  });

  // FIND BY

  it("should render by findByText", async () => {
    render(<Header title="My Header" />);
    const headingElement = await screen.findByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
  });

  // GET BY

  it("should render by getByText", async () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
  });

  // QUERY BY

  it("should render by queryByText", async () => {
    render(<Header title="My Header" />);
    const headingElement = screen.queryByText(/dogs/i);
    expect(headingElement).not.toBeInTheDocument();
  });

  // GET ALL BY ROLE

  it("should render by getAllByRole", async () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getAllByRole("heading");
    expect(headingElement.length).toBe(2);
  });
});
