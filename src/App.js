import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import Signin from './views/Signin';
import Signup from './views/Signup';
import VerificationPage from './views/AccountVerify';
import RestartVerificationPage from './views/RestartAccountVerify';
import SignupSuccessPage from './views/Signup/signupSuccess';
import EmailReset from './views/EmailReset';
import EmailResetSuccess from './views/EmailReset/EmailResetSuccess';
import PasswordReset from './views/PasswordReset';
import Dashboard from './views/Dashboard';
import Payments from './views/Payments';

const App = () => {
  return (
    <Router>
      <Route component={Header} />
      <ToastContainer transition={Slide} position='top-center' />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/device' component={DeviceInsurancePage} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/payments' component={Payments} />
        <Route path='/signin' component={Signin} />
        <Route path='/signup' component={Signup} />
        <Route path='/verify' component={VerificationPage} />
        <Route
          path='/restart-verification'
          component={RestartVerificationPage}
        />
        <Route path='/signup-success' component={SignupSuccessPage} />
        <Route path='/email-reset' component={EmailReset} />
        <Route path='/email-reset-success' component={EmailResetSuccess} />
        <Route path='/reset-password' component={PasswordReset} />
        <Route path='/repair-request' component={RepairRequest} />
        <Route path='/question/:insuranceType' component={Questions} />
        <Route path='/malaria' component={MalariaInsurancePage} />
        <Route path='/basic-life' component={LifeInsurancePage} />
        <Route path='/referral' component={ReferralPage} />
        <Route path='/not-available' component={ComingSoonPage} />
      </Switch>
      <Route component={Footer} />
    </Router>
  );
};

export default App;
