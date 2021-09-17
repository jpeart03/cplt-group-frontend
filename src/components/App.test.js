import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app layout", () => {
  render(<App />);
  const navTitle = screen.getByText(/Appreciation/i);
  expect(navTitle).toBeInTheDocument();
});
