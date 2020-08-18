import Styled from 'styled-components';

const StyledDevicePage = Styled.div`
  width: 100%;
  font-size: 16px;
  @media only screen and (max-width: 756px) {
    font-size: 12px;
  }
  .top-section {
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
  .plan-card__container {
    width: 90%;
    margin: 40px auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: center;
  }
  .plan-card {
    text-align: center;
    background: #F7F7F7;
    padding: 5px 30px 20px 30px;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
    h2 {
      font-size: 24px;
    }
    img {
      width: 100px;
    }
    .btn {
      width: 70%;
      border-radius: 9px;
      display: block;
      margin: 10px auto;
    }
  }
  .insurance-info {
    width: 100%;
    margin: 70px 0;
    @media only screen and (max-width: 756px) {
      margin: 70px 0;
    }
    h3 {
      margin-left: 20px;
      font-size: 24px;
      @media only screen and (max-width: 756px) {
        font-size: 18px;
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
