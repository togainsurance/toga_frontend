import Styled from 'styled-components';

const StyledPayments = Styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 25% auto;
  background: #F7F7F7;
  .body {
    width: 90%;
    margin: 110px auto 0 auto;
    .payment-header {
      display: grid;
      grid-template-columns: repeat(3, auto);
      justify-items: center;
      .active {
        font-weight: bold;
        border-bottom: 3px solid purple;
        padding: 0 20px 5px 20px;
      }
    }
    .pay-all-btn {
      width: 40%;
      display: block;
      margin: 20px auto;
      background: #fff;
      color: #6b1587;
      text-transform: capitalize;
      transition: all 0.5 ease-in;
      &:hover{
        background: #6b1587;
        color: #fff;
      }
    }

    .device-info-box-container {
      overflow-Y: scroll;
      max-height: 530px;
      .device-info-box {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        margin: 40px auto;
        grid-gap: 30px;
        .name {
          border: 2px solid #6b1587;
          border-radius: 9px;
          padding: 10px;
          display: grid;
          grid-template-columns: auto;
          justify-items: center;
          align-items: center;
          font-weight: bold;
          hr {
            width: 100%;
          }
        }
        .number-details {
          border: 2px solid;
          border-radius: 9px;
          text-align: center;
          padding: 5px;
          .info-tag {
            color: #6b1587;
            font-weight: bold;
          }
        }
        .cta-container {
          display: grid;
          grid-template-columns: auto;
          grid-gap: 20px;
          .danger {
            background: #D60000;
            border-color: #D60000;
          }
        }
      }
    }

  }
`;

export default StyledPayments;
