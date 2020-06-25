import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import Header from "./index";

test("renders default header elements", () => {
  const { getByText } = render(
    <Router>
      <Header />
    </Router>
  );
  expect(getByText("Toga")).toBeInTheDocument();
});
