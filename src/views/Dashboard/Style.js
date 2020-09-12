import Styled from 'styled-components';

const StyledDashbord = Styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 20% auto;
  background: #F7F7F7;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 25% auto;
  }
  
  .body{
    width: 90%;
    margin: 130px auto 0 auto;
    @media only screen and (max-width: 600px) {
      margin: 90px auto 0 auto;
      font-size: 12px;
    }
    .bulk-user {
      display: grid;
      grid-template-columns: 1fr 30%;
      grid-gap: 20px;
      text-align: center;
      @media only screen and (max-width: 600px) {
        grid-template-columns: auto;
        grid-gap: 5px;
      }
      input[type="file"] {
        display: none;
      }label {
        .icon {
          color: #6b1587;
        }
        color: black;
        min-height: 80px;
        display: block;
        min-width: 100%;
        border: 2px solid #888888;
        background: white;
        padding: 20px 40px;
        border-radius: 9px;
        font-size: 2em;
        text-align: center;
        @media only screen and (max-width: 600px) {
          font-size: 1.4em;
        }
      }
      .btn {
        max-height: 50%;
        border-radius: 9px;
        font-size: 2em;
        @media only screen and (max-width: 600px) {
          max-height: 100%;
          font-size: 1.4em;
        }
      }
    }
    .add-device-btn {
      width: 50%;
      background: white;
      color: #6b1587;
      border-color: #6b1587;
      display: block;
      margin: 20px auto;
      font-size: 1.8em;
      text-align: center;
      @media only screen and (max-width: 600px) {
        font-size: 1.2em;
        width: 80%;
      }
    }
    .analytics {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 30px;
      margin: 40px auto;
      @media only screen and (max-width: 600px) {
        grid-template-columns: 1fr;
      }
      .analytics-card {
        border: 2px solid #6b1587;
        padding: 5px;
        border-radius: 9px;
        background: #fff;
        text-align: center;
        .icon {
          color: #6b1587;
        }
        .title {
          font-size: 1.2em;
          padding: 10px;
        }
        .count {
          font-size: 6em;
          padding: 30px;
        }
      }
    }
    .search {
      width: 100%;
      .input-container {
        width: 100%;
        display: flex;
        background: #fff;
        margin-bottom: 25px;
        border: 2px solid #888888;
        border-radius: 9px;
        padding: 2px;
        input {
          display: block;
          width: 100%;
          padding: 10px;
          outline: none;
          border: none;
          background: inherit;
          font-size: 1.1em;
        }
        .icon {
          padding: 10px;
          color: black;
          min-width: 50px;
          text-align: center;
        }
      }
      .btn {
        width: 50%;
        display: block;
        margin: 40px auto;
      }
    }
  }

`;

export default StyledDashbord;
