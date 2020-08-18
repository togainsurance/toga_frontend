import Styled from 'styled-components';

const StyledDashbord = Styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 25% auto;
  background: #F7F7F7;
  .body{
    width: 90%;
    margin: 130px auto 0 auto;
    .bulk-user {
      display: grid;
      grid-template-columns: 1fr 30%;
      grid-gap: 20px;
      text-align: center;
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
      }
      .btn {
        max-height: 50%;
        border-radius: 9px;
        font-size: 2em;
      }
    }
    .add-device-btn {
      width: 50%;
      display: block;
      margin: 20px auto;
      font-size: 1.8em;
      text-align: center;
    }
    .analytics {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 30px;
      margin: 40px auto;
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
