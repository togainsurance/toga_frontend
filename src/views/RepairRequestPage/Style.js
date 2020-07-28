import Styled from 'styled-components';

const RepairRequestStyle = Styled.section`
  width: 90%;
  margin: 130px auto;
  display: grid;
  grid-template-columns: auto 30%;

  h2 {
    color: #6b1587;
    font-size: 24px;
    text-align: center;
  }

  form {
    margin: 30px 0;
    label {
      width: 80%;
      display: grid;
      margin: 30px auto;
      grid-template-columns: 30% 60%;
      grid-gap: 10px;
      width: 10px auto;
    }
    input {
      height: 40px;
    }
    textarea, input{
      display: block;
      border-radius: 4px;
      padding-left: 10px;
      border: 1px solid #ccc;
    }
    textarea {
      resize: none;
      min-height: 100px;
      padding-top: 10px;
    }
    span {
      color: red;
    }
  }
`;

export default RepairRequestStyle;
