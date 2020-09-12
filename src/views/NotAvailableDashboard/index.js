import React from 'react';
import Nav from '../../components/DashboardNav';
import NotAvailable from '../ComingSoonPage';
import StyledNotAvailableDashboard from './Style';

const NotAvailableDashboard = ({ history }) => {
  return (
    <StyledNotAvailableDashboard className='Dashboard'>
      <Nav history={history} />
      <div className='body'>
        <NotAvailable />
      </div>
    </StyledNotAvailableDashboard>
  );
};

export default NotAvailableDashboard;
