import React from "react";
import { render } from "@testing-library/react";
import Footer from "./index";

test("renders default header elements", () => {
  const { getByText } = render(<Footer />);
  expect(getByText("Toga")).toBeInTheDocument();
  expect(getByText("Claims")).toBeInTheDocument();
  expect(getByText("Request Service")).toBeInTheDocument();
  expect(getByText("Message us, let’s talk")).toBeInTheDocument();
  expect(getByText("Toga Micro-Insurance, 2020.")).toBeInTheDocument();
});
