import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from "../App";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders login button", () => {
  act(() => {
    render(<App />, container);
  });
  // With no currentUser set, should conditionally render "Log in" button.
  expect(container.textContent).toContain("Login");
});
