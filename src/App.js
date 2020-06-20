import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./views/HomePage";

const App = () => {
  return (
    <Router>
      <Route component={Header} />
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
