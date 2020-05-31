import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(
    /check number of times that word exists in the given url page/i
  );
  expect(linkElement).toBeInTheDocument();
});
