import Styled from 'styled-components';

const SigninStyle = Styled.section`
  width: 90%;
  margin: 150px auto;
  text-align: center;
  h2 {
    font-size: 24px;
  }
  .top-decor {
    display: flex;
    width: 100%;
    hr {
      display: block;
      border: 3px solid #f7f7f7
    }
  }
  form {
    width: 40%;
    margin: 30px auto;
    .input-container {
      width: 100%;
      display: flex;
      background: #f7f7f7;
      margin-bottom: 25px;
      border: 1px solid #6b1587;
      border-radius: 9px;
      padding: 2px;
      input {
        width: 100%;
        padding: 10px;
        outline: none;
        border: none;
        background: inherit;
        font-size: 1.1em;
      }
      .icon {
        padding: 10px;
        color: black;
        min-width: 50px;
        text-align: center;
      }
    }
    .btn {
      width: 60%;
      border-radius: 9px;
    }
  }
  .terms-of-service {
    margin: 10px auto;
  }
  .cta {
    color: #6b1587;
  }
`;

export const SignupSuccessStyle = Styled.div`
width: 90%;
margin: 150px auto;
text-align: center;
font-size: 18px;
min-height: 200px;
h1 {
  font-size: 32px;
  em {
    color: #6b1587;
    font-style: normal;
    text-transform: capitalize;
  }
}
`;

export default SigninStyle;
