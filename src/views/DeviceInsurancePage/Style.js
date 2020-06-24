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
      width: 80%;
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
    margin: 100px 0;
    h3 {
      margin-left: 20px;
      font-size: 24px;
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
    margin: 70px auto;
    text-align: center;
    @media only screen and (max-width: 756px) {
      font-size: 12px;
      width: 90%;
    }
  }
`;

export default StyledDevicePage;
