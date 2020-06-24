import Styled from "styled-components";

export const PaymentPlanStyle = Styled.section`
    width: 90%;
    margin: 70px auto;
    @media only screen and (max-width: 756px) {
      width: 100%;
    }
    h2 {
      text-align: center;
      @media only screen and (max-width: 756px) {
        font-size: 18px;
      }
    }
    table {
      border: 1px solid #c4c4c4;
      background: #f7f7f7;
      width: 100%;
      display: grid;
      grid-template-columns: auto;
      overflow-X: scroll;
      tr {
        display: flex;
        width: 100%;
        th,td {
          border: 1px solid #c4c4c4;
          display: inline;
          width: 100%;
          height: 40px;
          padding: 20px 0;
          text-align: center;
          @media only screen and (max-width: 756px) {
            font-size: 12px;
            padding: 10px 0;
          }
        }
        th {
          color: #6b1587;
        }
      }
    }
`;

export const StyledQuestionSection = Styled.section`
  background: #f7f7f7;
  width: 100%;
  padding: 20px 0 30px 0;
  margin: 70px 0;
  h2 {
    text-align: center;
  }
  .content-container {
    display: flex;
    justify-content: space-evenly;
    width: 80%;
    margin: 10px auto;
    div {
      width: 50%;
    }
    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
    }
    .btn2 {
      border-radius: 13px 13px 0 13px;
      display: inline-block;
      padding: 7px 20px;
      min-width: 50%; 
      background: #6b1587;
      color: white;
      font-weight: 700;
      text-align: center;
    }
  }
  @media only screen and (max-width: 756px) {
    font-size: 12px;
    .content-container {
      justify-content: space-between;
      width: 90%;
      margin: 10px auto;
    div {
      width: 60%;
    }
    img {
      width: 130px;
      height: 130px;
      margin-top: 30px;
    }
    .btn2 {
      border-radius: 13px 13px 0 13px;
      display: inline-block;
      padding: 7px 20px;
      min-width: 50%; 
      background: #6b1587;
      color: white;
      font-weight: 700;
      text-align: center;
    }
  }

  }
`;
