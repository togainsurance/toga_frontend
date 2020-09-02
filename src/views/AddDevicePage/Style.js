import Styled from 'styled-components';

const Style = Styled.section`
  display: grid;
  height: 100vh;
  grid-template-columns: 25% auto;
  background: #F7F7F7;
  .body {
    width: 90%;
    margin: 130px auto 0 auto;
    h2 {
      text-align: center;
      font-size: 24px;
      margin: 0 auto 50px auto;
    }
    form {
      width: 100%;
      display: grid;
      grid-template-columns: auto;
      grid-gap: 10%;
      .top-select-fields{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10%;
      }
      .input-fields-container {
        display: grid;
        grid-template-columns: auto;
        grid-gap: 20px;
        .top-section,
        .bottom-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px;
          .input-container {
            display: grid;
            grid-gap: auto 70%;
            span {
              margin-left: 10px;
            }
            input {
              width: 100%;
              padding: 10px;
              outline: none;
              border-radius: 9px;
              background: inherit;
              font-size: 1.1em;
            }
          }
        }
      }

    }
  }
`;

export default Style;
