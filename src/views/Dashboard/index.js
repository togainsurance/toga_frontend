import React from 'react';
import { Link } from 'react-router-dom';
import csvParser from 'papaparse'
import { toast } from 'react-toastify';
import pick  from 'lodash.pick'
import { addDevices } from './addDevices'
import Nav from '../../components/DashboardNav';
import StyledDashbord from './Style';
import { store } from '../../index';
import { setUser } from '../Auth/Auth.actions';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.handleFileSubmit = this.handleFileSubmit.bind(this);
    this.fileInput = React.createRef();
  }
  state = {
    fileName: "",
    file: [],
    loading: false
  }
  componentDidMount(){
    if (localStorage.userToken) {
      // get user object
      const userToken = JSON.parse(localStorage.userToken);
      if (userToken) {
        store.dispatch(setUser(userToken, this.props.history));
      }
    } else {
      this.props.history.push('/signin');
    
    }
  }
  handleFileSubmit = async (e) => {
    e.preventDefault();
    this.setState({loading: true})
   const devices = this.state.file
    await addDevices(devices)
    this.setState({loading: false})
  }
  convertToArrayOfObjects = (data) =>  {
    let newKeys = data.shift();
    let keys = newKeys.splice(0, newKeys.length-1)
    data = data.map((row) => {
    return keys.reduce((obj, key, i) => {
      
      obj[key] = row[i];
     
      return obj;
    }, {});
});
return data
 
}

  handleChange = (e) => {
  e.preventDefault();
   if(!this.fileInput.current.files[0].name.endsWith('.csv')){
     return toast.error('Only .csv files are allowed. Please try Again');
   }
   csvParser.parse(this.fileInput.current.files[0], {
    complete: (results) => {
     const payload = this.convertToArrayOfObjects(results.data)
      this.setState({ fileName: this.fileInput.current.files[0].name, file: payload.splice(0, payload.length-1)})
    }
  });
  }

  render() {

  
  return (
    <StyledDashbord className='Dashboard'>
      <Nav history={this.props.history} />
      <div className='body'>
        <form className='bulk-user'>
          <div className='input-field'>
            <input type='file' id='file' ref={this.fileInput} accept='.csv' onSubmit={(e) => this.handleFileSubmit(e)} onChange={this.handleChange} />
            <label htmlFor='file'>
              <i className='icon fa fa-cloud-upload'></i>
              &nbsp; {this.state.fileName || 'Import Excel csv file'}
            </label>
            <p className='input-info'>
              Must contain device information, serial or imei number, value of
              device, name and user of the device, if the device has been fixed
              before.
            </p>
          </div>
          <button onClick={(e) => this.handleFileSubmit(e)} type="submit" className='btn'>{this.state.loading ? "Submitting" :"Submit"}</button>
        </form>
        <Link to='/dashboard/add-device' className='btn add-device-btn'>
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
  }
};



export default Dashboard;
