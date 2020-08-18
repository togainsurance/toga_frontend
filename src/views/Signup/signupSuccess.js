import React from 'react';
import { SignupSuccessStyle } from './Style';

const SignupSuccessPage = () => {
  return (
    <SignupSuccessStyle>
      <h1>
        Welcome To <em>Toga Insurance</em>
      </h1>
      <h4>There is a final step!</h4>
      <p>
        {' '}
        Head to your email and click on the verify button in the email from us
        to start enjoying our service.
      </p>

      <p>Pro-tip: Check your spam folder if you can't find it.</p>
    </SignupSuccessStyle>
  );
};

export default SignupSuccessPage;
