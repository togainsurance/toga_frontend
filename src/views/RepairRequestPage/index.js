import React from 'react';
import Select from 'react-select';
import selectStyle from './selectStyle';
import RepairRequestStyle from './Style';

const RepairRequest = () => {
  return (
    <RepairRequestStyle>
      <div>
        <h2>Place your repair request by filling the below form</h2>
        <form>
          <label htmlFor='firstName'>
            <p>
              First Name<span>*</span>:
            </p>
            <input type='text' placeholder='First Name' required />
          </label>
          <label htmlFor='lastName'>
            <p>
              Last Name<span>*</span>:
            </p>
            <input type='text' placeholder='Last Name' required />
          </label>
          <label htmlFor='email'>
            <p>
              Email address<span>*</span>:
            </p>
            <input type='email' placeholder='Email Address' required />
          </label>
          <label htmlFor='deviceType'>
            <p>
              Device Type<span>*</span>:
            </p>
            <Select
              options={[
                {
                  label: 'Laptop',
                  value: 'laptop',
                },
                {
                  label: 'Phone',
                  value: 'phone',
                },
                {
                  label: 'others',
                  value: 'others',
                },
              ]}
              styles={selectStyle}
              required
              // onChange={this.handleSelectChange}
              placeholder='Select device type'
              name='deviceType'
            />
          </label>
          <label htmlFor='faultDescription'>
            <p>
              Fault Description<span>*</span> :
            </p>
            <textarea
              name='faultDescription'
              placeholder='Describe the device Fault be as descriptive as possible'
              required
              id='faultDescription'
            ></textarea>
          </label>
          <label htmlFor='phoneNumber'>
            <p>
              Phone Number<span>*</span>:
            </p>
            <input type='tel' placeholder='Phone Number' required />
          </label>
          <label htmlFor='secPhoneNumber'>
            <p>Alternate Number:</p>
            <input type='tel' placeholder='Phone Number' />
          </label>
          <label htmlFor='pickUpAddress'>
            <p>
              Pick up Address<span>*</span> :
            </p>
            <textarea
              type='address'
              placeholder='This is where our caurier would pick the device'
              required
            ></textarea>
          </label>
        </form>
      </div>
      <div className='request-info'>
        <h2>The repair request follows 4 simple steps</h2>
        <ol>
          <li>You Place repair order</li>
          <li>We'd pick up device for repair</li>
          <li>We'd repair</li>
          <li>Then we'd deliver </li>
        </ol>
      </div>
    </RepairRequestStyle>
  );
};

export default RepairRequest;
