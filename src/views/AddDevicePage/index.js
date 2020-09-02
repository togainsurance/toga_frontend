import React from 'react';
import Nav from '../../components/DashboardNav';
import Select from 'react-select';
import selectStyle from '../selectStyle';
import Style from './Style';

const AddDevicePage = ({ history }) => {
  return (
    <Style>
      <Nav history={history} />
      <div className='body'>
        <h2>Add Devices</h2>
        <p>Fill the form below to register a new device.</p>
        <form>
          <div className='top-select-fields'>
            <Select
              styles={selectStyle}
              required
              placeholder='Device Type'
              name='deviceType'
            />
            <Select
              styles={selectStyle}
              required
              placeholder='Device Brand'
              name='deviceBrand'
            />
            <Select
              styles={selectStyle}
              required
              placeholder='Device Value'
              name='deviceValue'
            />
          </div>
          <div className='input-fields-container'>
            <div className='top-section'>
              <label className='input-container' htmlFor='deviceOwnerName'>
                <span>Name of device user: </span>
                <input
                  id='device-user'
                  type='text'
                  placeholder='Name of the device owner'
                  required
                  name='deviceOwnerName'
                  // value={state.confirmPassword}
                  // onChange={handleChange}
                />
              </label>
              <label className='input-container' htmlFor='deviceName'>
                <span>Device Name: </span>
                <input
                  id='device-name'
                  type='text'
                  placeholder='Name of device'
                  required
                  name='deviceName'
                  // value={state.confirmPassword}
                  // onChange={handleChange}
                />
              </label>
            </div>
            <div className='bottom-section'>
              <label className='input-container' htmlFor='serialNumber'>
                <span>Serial Number: </span>
                <input
                  id='serial-number'
                  type='text'
                  required
                  name='serialNumber'
                  // value={state.confirmPassword}
                  // onChange={handleChange}
                />
              </label>
              <label className='input-container' htmlFor='imeiNumber'>
                <span>IMEI: </span>
                <input
                  id='imei-number'
                  type='text'
                  required
                  name='imeiNumber'
                  // value={state.confirmPassword}
                  // onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <div className='bottom-section'>
            <label htmlFor='purchaseDate'>
              <span>Date of purchase</span>
              <input type='date' />
            </label>
            <div className='radio-input-container'>
              <p>Has it been fixed before?</p>
              <label htmlFor='yes'>
                <span>Yes</span>
                <input type='radio' value='yes' name='fixedBefore' id='yes' />
              </label>
              <label htmlFor='no'>
                <span>No</span>
                <input type='radio' value='yes' id='no' name='fixedBefore' />
              </label>
            </div>
            <div className='radio-input-container'>
              <p>Condition of purchase?</p>
              <label htmlFor='new'>
                <span>New</span>
                <input
                  type='radio'
                  value='new'
                  name='purchaseCondition'
                  id='new'
                />
              </label>
              <label htmlFor='old'>
                <span>Old</span>
                <input
                  type='radio'
                  value='yes'
                  id='old'
                  name='purchaseCondition'
                />
              </label>
            </div>
          </div>
          <button className='btn'>Submit</button>
        </form>
      </div>
    </Style>
  );
};

export default AddDevicePage;
