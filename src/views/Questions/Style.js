import Styled from 'styled-components';

const QuestionStyle = Styled.div`
  margin: 120px auto 50px auto;
  width: 100%;
  font-size: 18px;
  @media only screen and (max-width: 756px) {
    font-size: 12px;
  }
  h1 {
    font-size: 32px;
    text-align: center;
    @media only screen and (max-width: 756px) {
      font-size: 24px;
    }
  }
  .body {
    width: 80%;
    margin: 70px auto;

    .questionAndAnswer {
      margin: 30px 0;
      em {
        font-style: normal;
        color: #6b1587;
      }
    }
  }

  .bottom-section {
    background: #f7f7f7;
    min-height: 200px;
    text-align: center;
    padding: 10px 0;
    h2 {
      font-size: 24px;  
    }
    .btn {
      background: inherit;
      width: 30%;
      color: #6b1587;
      margin: 20px auto;
      border-radius: 13px;
      transition: all ease-in 0.07s;
      text-transform: capitalize;

      &:hover {
        background: #6b1587;
        color: white;
        cursor: pointer;
      }
    }
  }
`;

export default QuestionStyle;
