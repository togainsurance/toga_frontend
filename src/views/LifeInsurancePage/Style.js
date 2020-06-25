import Styled from "styled-components";

const LifeInsuranceStyle = Styled.div`
  width: 100%;
  margin: 70px 0;
  @media only screen and (max-width: 756px) {
    font-size: 12px;
    margin: 30px 0;
  }
  font-size: 18px;
  .top-section{
    width: 50%;
    margin: 20px auto;
    text-align: center;
    line-height: 32px;
    @media only screen and (max-width: 756px) {
      width: 90%;
      font-size: 12px;
    }
    img {
      width: 60%;
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
  .benefit-info {
    width: 90%;
    margin: 70px auto;
    h2 {
      margin: 10px 0;
    }
    .title {
      color: #6b1587;
    }
  }
`;

export default LifeInsuranceStyle;
