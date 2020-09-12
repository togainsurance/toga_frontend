import React, { useEffect, useState } from 'react';
import { PaystackButton } from 'react-paystack';
import { connect } from 'react-redux';
import StylePayments from './Style';
import Nav from '../../components/DashboardNav';
import Payment from '../../components/Payment';
import { fetchPendingPayments } from '../../utils/requests';
import { calculateTotalPrice } from '../../utils/helper';

const Payments = ({ auth }) => {
  const [pendingDevices, setPendingDevices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    fetchPendingPayments().then((initialValue) => {
      if (!initialValue) {
        setError('Unable to fetch Devices');
        return;
      }
      if (initialValue.length < 1) {
        setError('You do not have Pending devices');
      }
      setPendingDevices(initialValue);
      setLoading(false);
    });
  }, []);

  const handlePayment = (res) => {
    console.log(res);
  };

  console.log(calculateTotalPrice(pendingDevices));

  return (
    <StylePayments>
      <Nav />

      <div className='body'>
        <div className='payment-header'>
          <p>Approved</p>
          <p className='active'>Pending</p>
          <p>Canceled</p>
        </div>
        {error || !auth.user ? (
          <div className='body'>{error && 'Loading...'}</div>
        ) : (
          <div>
            <PaystackButton
              className='btn pay-all-btn'
              text='Pay all'
              reference={new Date().getTime()}
              onSuccess={handlePayment}
              email={auth.user.email}
              amount={calculateTotalPrice(pendingDevices) * 100}
              label={`pay for all pending devices`}
              publicKey='pk_test_cfc00971a4b643f9b66a5c090bc8c6f2f911c268'
              logo='https://res.cloudinary.com/toga-insure/image/upload/v1589798290/CommingSoonPage/TogaLogo_2x_xhi9a1.png'
            />
            <div className='device-info-box-container'>
              {loading ? (
                <h1>Loding...</h1>
              ) : (
                pendingDevices.map((device) => (
                  <Payment key={device.deviceId} auth={auth} {...device} />
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </StylePayments>
  );
};

const mapStateToProps = (state) => ({
  auth: state.user,
});

export default connect(mapStateToProps, {})(Payments);
