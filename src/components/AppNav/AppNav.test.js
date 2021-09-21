import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { AuthProvider } from "../../contexts/AuthContext";
import AppNav from "./AppNav";

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
    render(
      <AuthProvider>
        <AppNav />
      </AuthProvider>,
      container
    );
  });
  // With no currentUser set, should conditionally render "Log in" button.
  expect(container.textContent).toContain("Log in");
});
