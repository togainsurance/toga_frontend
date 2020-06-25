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

export const HowItWorksStyle = Styled.section`

  width: 100%;
  display: grid;
  grid-template-columns: auto;
  background: #f7f7f7;
  margin: 50px auto;
  
  h2 {
  text-align: center;
  font-size: 32px;
  margin: 30px auto;
  line-height: 34px;
    @media only screen and (max-width: 756px) {
      font-size: 18px;
      line-height: 20px;
      margin: 15px auto;
    }
  }

  .sub-section-wrapper {
    width: 90%;
    display: flex;
    margin: 10px auto;
    justify-content: space-between;
    @media only screen and (max-width: 756px) {
      width: 100%;
    }
    .sub-section {
      display: grid;
      grid-template-columns: auto;
      max-width: 20%;
      text-align: center;
      font-size: 18px;
      @media only screen and (max-width: 756px) {
        max-width: 30%;
        font-size: 12px;
        padding: 5px;
      }
      img {
        justify-self: center;
        margin-bottom: 20px;
        @media only screen and (max-width: 756px) {
          width: 70px;
          height: 70px;
        } 
      }
      h2 {
        font-size: 24px;
        @media only screen and (max-width: 756px) {
          font-size: 14px;
        }
      }
    }
  }
`;
