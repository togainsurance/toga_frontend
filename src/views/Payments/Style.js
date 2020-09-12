import Styled from 'styled-components';

const StyledPayments = Styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 20% auto;
  background: #F7F7F7;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 25% auto;
    font-size: 12px;
  }
  .body {
    width: 90%;
    margin: 110px auto 0 auto;
    overflow: hidden;
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
      @media only screen and (max-width: 600px) {
        width: 60%;
      }
    }

    .device-info-box-container {
      overflow-Y: scroll;
      max-height: 530px;
      width: 100%;
      /* Hide scrollbar for Chrome, Safari and Opera */
      &::-webkit-scrollbar {
        display: none;
      }

      /* Hide scrollbar for IE, Edge and Firefox */

      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */

    }

  }
`;

export default StyledPayments;
