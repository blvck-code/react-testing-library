import { fireEvent, render, screen } from "@testing-library/react";
import Todo from "../Todo";
import { BrowserRouter } from "react-router-dom";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });

  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

describe("Todo", () => {
  it("should render todo added on the screen", async () => {
    render(<MockTodo />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(inputElement, { target: { value: "Do dishes" } });
    fireEvent.click(buttonElement);

    const divElement = screen.getByText(/Do dishes/i);
    expect(divElement).toBeInTheDocument();
  });

  it("should render todos list added on the screen", async () => {
    render(<MockTodo />);
    addTask(["Go grocery shopping", "Do dishes", "Take a shower"]);
    const divElement = screen.getAllByTestId("task-container");
    expect(divElement.length).toBe(3);
  });
});
