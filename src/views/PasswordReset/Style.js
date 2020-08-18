import Styled from 'styled-components';

const EmailResetStyle = Styled.section`
  width: 90%;
  margin: 150px auto;
  text-align: center;
  h2 {
    font-size: 24px;
  }
  form {
    width: 40%;
    margin: 30px auto;
    label {
      span {
        display: block;
        text-align: left;
        margin: 5px 0 10px 10px;
      }
      .input-requirements {
        font-size: .8rem;
        font-style: italic;
        text-align: left;
        list-style: disc;
        list-style-position: inside;
        max-width: 400px;
        margin: 10px auto;
        color: rgb(150,150,150);
        transition: display 1s ease-in;
        overflow: hidden;
        max-height: 0;
        transition: max-height 1s ease-out;
      }
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
      &:hover .input-requirements,
      &:active .input-requirements,
      &:focus .input-requirements{
        max-height: 1000px; /* any large number (bigger then the .input-requirements list) */
        transition: max-height 1s ease-in;
      } 
    }
    .btn {
      width: 60%;
      border-radius: 9px;
    }
  }
  .cta {
    color: #6b1587;
  }
`;

export default EmailResetStyle;
