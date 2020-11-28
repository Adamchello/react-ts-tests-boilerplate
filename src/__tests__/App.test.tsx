import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Button from '../components/Button/Button';

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

it("renders button with children", () => {
  const buttonText = "ButtonText"
  act(() => {
    render(<Button>{buttonText}</Button>, container);
  });
  expect(container.textContent).toBe(buttonText);
})

