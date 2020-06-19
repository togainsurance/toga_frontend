import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import Footer from "./index";

test("renders default header elements", () => {
  const { getByText } = render(
    <Router>
      <Footer />
    </Router>
  );
  expect(getByText("Toga")).toBeInTheDocument();
  expect(getByText("Claims")).toBeInTheDocument();
  expect(getByText("Request Service")).toBeInTheDocument();
  expect(getByText("Message us, let’s talk")).toBeInTheDocument();
  expect(getByText("Toga Micro-Insurance, 2020.")).toBeInTheDocument();
});
