import Styled from 'styled-components';

const LifeInsuranceStyle = Styled.div`
  width: 100%;
  @media only screen and (max-width: 756px) {
    font-size: 12px;
  }
  font-size: 16px;
  .top-section{
    width: 70%;
    margin: 130px auto;
    text-align: center;
    line-height: 32px;
    @media only screen and (max-width: 756px) {
      width: 90%;
      font-size: 12px;
      margin: 115px auto;
    }
    img {
      width: 40%;
      margin: 10px auto;
      @media only screen and (max-width: 756px) {
        width: 50%;
      }
    }
    h2 {
      font-size: 32px;
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
    @media only screen and (max-width: 756px) {
      margin: 40px auto;
    }
    h2 {
      margin: 10px 0;
    }
    .title {
      color: #6b1587;
    }
  }
`;

export default LifeInsuranceStyle;
