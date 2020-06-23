import Styled from "styled-components";

const StyledDevicePage = Styled.div`
  width: 100%;
  margin: 20px 0;
  .top-section {
    width: 50%;
    margin: 20px auto;
    text-align: center;
    line-height: 32px;
    @media only screen and (max-width: 756px) {
      width: 90%;
      font-size: 12px;
    }
    img {
      width: 100%;
      @media only screen and (max-width: 756px) {
        width: 60%;
      }
    }
    h2 {
      font-size: 36px;
      letter-spacing: 0.15em;
      @media only screen and (max-width: 756px) {
        font-size: 24px;
      }
    }
    .all-caps {
      text-transform: uppercase;
    }
  }
  .insurance-info {
    width: 100%;
    margin: 50px 0;
    h3 {
      margin-left: 50px;
      @media only screen and (max-width: 756px) {
        font-size: 14px;
        margin-left: 10px;
      }
    }
    .info-grid {
      display: grid;
      grid-template-columns: repeat(3, auto)
    }
    .info-box {
      border: 1px solid #C4C4C4;
      text-align: center;
      padding: 20px 10px;
      @media only screen and (max-width: 756px) {
        font-size: 12px;
      }
    }
  }
  .middle-section {
    width: 60%;
    margin: 30px auto;
    text-align: center;
    @media only screen and (max-width: 756px) {
      font-size: 12px;
      width: 90%;
    }
  }
`;

export const PaymentPlanStyle = Styled.section`

    width: 90%;
    margin: 30px auto;
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
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-gap: 0;
        width: 100%;
        th,td {
          border: 1px solid #c4c4c4;
          display: inline;
          width: 100%;
          height: 40px;
          align-self: end;
          justify-self: start;
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

export default StyledDevicePage;
