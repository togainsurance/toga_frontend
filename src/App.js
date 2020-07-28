import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './views/HomePage';
import DeviceInsurancePage from './views/DeviceInsurancePage';
import MalariaInsurancePage from './views/MalariaInsurancePage';
import LifeInsurancePage from './views/LifeInsurancePage';
import ReferralPage from './views/ReferralPage';
import ComingSoonPage from './views/ComingSoonPage';
import Questions from './views/Questions';
import RepairRequest from './views/RepairRequestPage';

const App = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      let headerContainer = document.getElementById('header-container');

      if (window.pageYOffset > 0) {
        headerContainer.classList.add('dark-header');
      } else {
        headerContainer.classList.remove('dark-header');
      }
    });
  });
  return (
    <Router>
      <Route component={Header} />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/device' component={DeviceInsurancePage} />
        <Route path='/repair-request' component={RepairRequest} />
        <Route path='/question/:insuranceType' component={Questions} />
        <Route path='/malaria' component={MalariaInsurancePage} />
        <Route path='/basic-life' component={LifeInsurancePage} />
        <Route path='/referral' component={ReferralPage} />
        <Route path='/not-available' component={ComingSoonPage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
