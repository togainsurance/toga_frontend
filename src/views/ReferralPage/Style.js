import Styled from "styled-components";

const ReferralPageStyle = Styled.div`
  width: 100%;
  font-size: 16px;
  @media only screen and (max-width: 756px) {
    font-size: 12px;
  }
  .top-section {
    width: 70%;
    margin: 130px auto;
    line-height: 24px;
    text-align: center;
    word-spacing: 0.25em;
    @media only screen and (max-width: 756px) {
      width: 90%;
      font-size: 12px;
      word-spacing: 0.05em;
      margin: 115px auto;
    }
    h2 {
      font-size: 32px;
      word-spacing: 0.15em;
      margin-bottom: 0.8em;
      @media only screen and (max-width: 756px) {
        font-size: 24px;
        word-spacing: 0.05em;
        margin-bottom: 0.5em;
      }
    }
    img {
      width: 60%;
      margin: 10px auto;
      display: block;
      @media only screen and (max-width: 756px) {
        width: 40%;
      }
    }
    .btn {
      width: 40%;
      margin: 30px auto;
      @media only screen and (max-width: 756px) {
        width: 55%;
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
  .plan-info {
    background: #f7f7f7;
    width: 100%;
    margin: 150px 0 90px 0;
    padding: 30px 0;
    position: relative;
    @media only screen and (max-width: 756px) {
      margin: 90px 0;
      padding: 10px 0;
    }
    img {
      width: 60%;
      margin: 0 auto;
      display: block;
      position: absolute;
      top: -20%;
      left: 20%;
      @media only screen and (max-width: 756px) {
        top: -7%;
        width: 80%;
        left: 10%;
      }
    }
    .first {
      padding-top: 15px;
      @media only screen and (max-width: 756px) {
        padding-top: 5px;
      }
    }
    div{
      width: 60%;
      margin: 30px auto;
      text-align: center;
      @media only screen and (max-width: 756px) {
        width: 95%;
      }
      h2 {
        font-size: 32px;
        @media only screen and (max-width: 756px) {
          font-size: 18px;
        }
      }
    }
  }
`;

export default ReferralPageStyle;
