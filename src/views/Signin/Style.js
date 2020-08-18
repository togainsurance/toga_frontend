import Styled from 'styled-components';

const SignUpStyle = Styled.section`
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
      &:disabled {
        cursor: not-allowed;
      }
    }
  }
  .cta2{
    &:hover {
      color: #6b1587;
    }
  }
  .cta {
    color: #6b1587;
  }
`;

export default SignUpStyle;
