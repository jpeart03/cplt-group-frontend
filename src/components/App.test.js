import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const cardTitle = screen.getByText(/Example react-bootstrap card/i);
  expect(cardTitle).toBeInTheDocument();
});
