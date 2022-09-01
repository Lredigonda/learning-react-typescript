import React from "react";
import { render, screen } from "@testing-library/react";
import ToDoForm from "./ToDoForm";

test("renders learn react link", () => {
  render(<ToDoForm />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
