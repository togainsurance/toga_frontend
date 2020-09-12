import React, { useState } from 'react';
import Nav from '../../components/DashboardNav';
import Select from 'react-select';
import Creatable from 'react-select/creatable';
import selectStyle from '../selectStyle';
import Style from './Style';
import { deviceValues, deviceTypes } from '../../utils/selectOptions';
import { addSingleDevice } from '../../utils/requests';

const AddDevicePage = ({ history }) => {
  const [deviceValue, setDeviceValue] = useState(deviceTypes[0].valueRange);
  const [deviceBrand, setDeviceBrand] = useState('');
  const [deviceType, setDeviceType] = useState(deviceTypes[0].name);
  const [inputField, setInputField] = useState({
    deviceName: '',
    deviceOwnerName: '',
    serialNumber: '',
    imei: '',
    purchaseDate: '',
    purchaseCondition: '',
    fixedBefore: '',
  });
  const [loading, setLoading] = useState(false);

  const handleInputFieldChange = (event) => {
    const { value, name } = event.target;
    setInputField((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleDeviceTypeChange = (newValue, actionMeta) => {
    if (actionMeta.action !== 'clear') {
      setDeviceType(newValue.value);
    }
  };

  const handleDeviceBrandChange = (newValue, actionMeta) => {
    if (actionMeta.action !== 'clear') {
      setDeviceBrand(newValue.value);
    }
  };
  const handleDeviceValueChange = (newValue, actionMeta) => {
    if (actionMeta.action !== 'clear') {
      setDeviceValue(newValue.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const price = deviceValues.find((item) => item.valueRange === deviceValue)
      .price;
    const data = {
      deviceType: deviceType,
      deviceBrand: deviceBrand,
      deviceValue: deviceValue,
      price: `${price}`,
      ...inputField,
    };
    console.log(data);
    setLoading(true);
    await addSingleDevice(data);
    setLoading(false);
  };

  const type = deviceTypes.find((item) => item.name === deviceType);

  return (
    <Style>
      <Nav history={history} />
      <div className='body'>
        <h2>Add Devices</h2>
        <h4>Fill the form below to register a new device.</h4>
        <form onSubmit={handleSubmit}>
          <div className='top-select-fields'>
            <Creatable
              isClearable
              styles={selectStyle}
              options={deviceTypes.map((item) => {
                return {
                  label: item.name,
                  value: item.name,
                };
              })}
              onChange={handleDeviceTypeChange}
              required
              placeholder='Device Type'
              name='deviceType'
            />
            <Creatable
              isClearable
              styles={selectStyle}
              options={
                type
                  ? type.brands.map((item) => {
                      return {
                        label: item,
                        value: item,
                      };
                    })
                  : ''
              }
              onChange={handleDeviceBrandChange}
              required
              placeholder='Device Brand'
              name='deviceBrand'
            />
            <Select
              styles={selectStyle}
              options={deviceValues.map((item) => {
                return {
                  value: item.valueRange,
                  label: item.valueRange,
                };
              })}
              isOptionSelected
              onChange={handleDeviceValueChange}
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
                  value={inputField.deviceOwnerName}
                  onChange={handleInputFieldChange}
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
                  value={inputField.deviceName}
                  onChange={handleInputFieldChange}
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
                  value={inputField.serialNumber}
                  onChange={handleInputFieldChange}
                />
              </label>
              <label className='input-container' htmlFor='imei'>
                <span>IMEI: </span>
                <input
                  id='imei-number'
                  type='text'
                  required
                  name='imei'
                  value={inputField.imei}
                  onChange={handleInputFieldChange}
                />
              </label>
            </div>
          </div>
          <div className='form-bottom-section'>
            <label htmlFor='purchaseDate'>
              <span>Date of purchase</span>
              <input
                type='date'
                name='purchaseDate'
                onChange={handleInputFieldChange}
              />
            </label>
            <div className='radio-input-container'>
              <p>Has it been fixed before?</p>
              <label htmlFor='yes'>
                <span>Yes</span>
                <input
                  type='radio'
                  value='true'
                  name='fixedBefore'
                  id='yes'
                  onChange={handleInputFieldChange}
                />
              </label>
              <label htmlFor='no'>
                <span>No</span>
                <input
                  type='radio'
                  value='false'
                  id='no'
                  name='fixedBefore'
                  onChange={handleInputFieldChange}
                />
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
                  onChange={handleInputFieldChange}
                />
              </label>
              <label htmlFor='old'>
                <span>Old</span>
                <input
                  type='radio'
                  value='old'
                  id='old'
                  name='purchaseCondition'
                  onChange={handleInputFieldChange}
                />
              </label>
            </div>
          </div>
          <button className='btn' disabled={loading}>
            Submit{loading ? 'ing' : ''}
          </button>
        </form>
      </div>
    </Style>
  );
};

export default AddDevicePage;
