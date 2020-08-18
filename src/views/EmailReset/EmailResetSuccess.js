import React from 'react';
import { EmailSuccessStyle } from './Style';

const SignupSuccessPage = () => {
  return (
    <EmailSuccessStyle>
      <h1>
        Welcome To <em>Toga Insurance</em>
      </h1>
      <h4>There is a final step!</h4>
      <p>
        {' '}
        Head to your email, click on the reset password button, it's in the mail
        from us to complete this process.
      </p>

      <p>Check your spam folder if you can't find it!</p>
      <p>
        If you use Gmail, also check the Updates/Promotions tab, the email might
        be there!
      </p>
    </EmailSuccessStyle>
  );
};

export default SignupSuccessPage;
