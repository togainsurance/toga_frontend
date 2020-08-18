import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/DashboardNav';
import StyledDashbord from './Style';
import { store } from '../../index';
import { setUser } from '../Auth/Auth.actions';

const Dashboard = ({ history }) => {
  if (localStorage.userToken) {
    // get user object
    const userToken = JSON.parse(localStorage.userToken);
    if (userToken) {
      store.dispatch(setUser(userToken, history));
    }
  } else {
    history.push('/signin');
  }

  return (
    <StyledDashbord className='Dashboard'>
      <Nav history={history} />
      <div className='body'>
        <form className='bulk-user'>
          <div className='input-field'>
            <input type='file' id='file' accept='.csv' />
            <label htmlFor='file'>
              <i className='icon fa fa-cloud-upload'></i>
              &nbsp; Import Excel csv file
            </label>
            <p className='input-info'>
              Must contain device information, serial or imei number, value of
              device, name and user of the device, if the device has been fixed
              before.
            </p>
          </div>
          <button className='btn'>Submit</button>
        </form>
        <Link to='/not-available' className='btn add-device-btn'>
          <i className='icon fa fa-plus-circle'></i>
          &nbsp; Add devices
        </Link>
        <div className='analytics'>
          <div className='analytics-card'>
            <div className='title'>
              <i className='icon fa fa-book'></i>
              &nbsp;
              <span>Registered Devices</span>
            </div>
            <hr />
            <p className='count'>0</p>
          </div>
          <div className='analytics-card'>
            <div className='title'>
              <i className='icon fa fa-credit-card'></i>
              &nbsp;
              <span>Pending Payments</span>
            </div>
            <hr />
            <p className='count'>0</p>
          </div>
          <div className='analytics-card'>
            <div className='title'>
              <i className='icon fa fa-exchange'></i>
              &nbsp;
              <span>Claims Made</span>
            </div>
            <hr />
            <p className='count'>0</p>
          </div>
        </div>
        <form className='search'>
          <div className='input-container'>
            <i className='icon fa fa-search'></i>
            <input
              id='search-query'
              type='search'
              placeholder='Search by username or serial/IMEI number'
              name='search'
            />
          </div>
          <button className='btn'>Submit</button>
        </form>
        <div className='result'></div>
      </div>
    </StyledDashbord>
  );
};

export default Dashboard;
