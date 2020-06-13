import React from "react";
import { render } from "@testing-library/react";
import Header from "./index";

test("renders default header elements", () => {
  const { getByText } = render(<Header />);
  expect(getByText("Toga")).toBeInTheDocument();
  expect(getByText("Claims")).toBeInTheDocument();
  expect(getByText("Request Service")).toBeInTheDocument();
});
