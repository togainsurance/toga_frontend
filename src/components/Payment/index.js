import React from 'react';
import { PaystackButton } from 'react-paystack';
import StyledDeviceInfo from './Style';

const Payment = ({
  deviceId,
  deviceType,
  deviceName,
  deviceBrand,
  deviceValue,
  imei,
  serialNumber,
  price,
  deviceOwnerName,
  auth,
}) => {
  const { user } = auth;
  const handlePayment = (response) => {
    console.log(response);
  };
  return (
    <StyledDeviceInfo key={deviceId} className='device-info-box'>
      <div className='name'>
        <div className='device-type'>{deviceType}</div>
        <hr />
        <div className='device-model'>{`${deviceBrand} ${deviceName}`}</div>
      </div>
      <div className='number-details'>
        <p>
          <span className='info-tag'>Serial Number: </span>
          {serialNumber}
        </p>
        <p>
          <span className='info-tag'>IMEI Number: </span>
          {imei}
        </p>
        <p>
          <span className='info-tag'>Value Range: </span>
          {deviceValue}
        </p>
      </div>
      <div className='cta-container'>
        <PaystackButton
          className='btn'
          text='Pay Now'
          reference={new Date().getTime()}
          onSuccess={handlePayment}
          email={user.email}
          amount={price * 100}
          label={`pay for user ${deviceOwnerName}`}
          publicKey='pk_test_cfc00971a4b643f9b66a5c090bc8c6f2f911c268'
          logo='https://res.cloudinary.com/toga-insure/image/upload/v1589798290/CommingSoonPage/TogaLogo_2x_xhi9a1.png'
        />
        <button className='btn danger'>Remove Device</button>
      </div>
    </StyledDeviceInfo>
  );
};

export default Payment;
