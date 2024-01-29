import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

it("should render 'task' when the number of incomplete tasks is one", async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toBeInTheDocument();
});

it("should render the correct amount of incomplete tasks", async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5} />);
  const paragraphElement = screen.getByText(/5 tasks left/i);
  expect(paragraphElement).toBeInTheDocument();
});

it("should render to be visible to user", async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5} />);
  const paragraphElement = screen.getByText(/5 tasks left/i);
  expect(paragraphElement).toBeVisible();
});

// it("should render to be not visible to user", async () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={5} />);
//   const paragraphElement = screen.getByText(/5 tasks left/i);
//   expect(paragraphElement).not.toBeVisible();
// });

it("should render toContain", async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5} />);
  const paragraphElement = screen.getByText(/5 tasks left/i);
  expect(paragraphElement).toContainHTML("p");
});

it("should render toHaveTextContent", async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByTestId("paragraph");
  // const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toHaveTextContent("1 task left");
});

it("should render toBe", async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByTestId("paragraph");
  // const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement.textContent).toBe("1 task left");
});
