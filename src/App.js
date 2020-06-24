import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./views/HomePage";
import DeviceInsurancePage from "./views/DeviceInsurancePage";
import MalariaInsurancePage from "./views/MalariaInsurancePage";

const App = () => {
  return (
    <Router>
      <Route component={Header} />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/device" component={DeviceInsurancePage} />
        <Route path="/malaria" component={MalariaInsurancePage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
