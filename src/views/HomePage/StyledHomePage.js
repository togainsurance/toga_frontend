import Styled from 'styled-components';

const StyledHomePage = Styled.div`
  .top-section {
    width: 70%;
    margin: 130px auto;
    display: grid;
    grid-template-columns: auto;
    font-size: 16px;
    @media only screen and (max-width: 756px) {
      width: 100%;
      margin: 115px auto;
      font-size: 12px;
    }
    .top-section_title {
      text-align: center;
      justify-self: center;
      font-size: 32px;
      line-height: 45px;
      letter-spacing: 0.15em;
      margin-left: 10px;
      @media only screen and (max-width: 756px) {
        font-size: 24px;
        line-height: 30px;
      }
    }
    .hero {
      text-align: center;
      width: 50%;
      margin: 5px auto;
      @media only screen and (max-width: 756px) {
        width: 90%;
      }
      img {
        display: block;
        margin: 10px auto;
        width: 60%;
        @media only screen and (max-width: 756px) {
          width: 50%;
        }
      }
      .appstore-img {
        display: flex;
        width: 80%;
        justify-content: space-between;
        align-items: center;
        margin: -20px auto;
        @media only screen and (max-width: 756px) {
          width: 70%
        }
        .android {
          width: 120px;
          height: 65px;
          @media only screen and (max-width: 756px) {
            width: 110px;
            height: 60px;
          }
        }
        .apple {
          width: 110px;
          height: 130px;
          @media only screen and (max-width: 756px) {
            width: 100px;
            height: 110px;
          }
        }
      }
    }
  }

  .middle-section {
    width: 90%;
    margin: 70px auto;
    @media only screen and (max-width: 756px) {
      margin-left: 5px;
    }
    .card {
      display: flex;
      width: 100%;
      margin: 20px auto;
      font-size: 16px;
      .more {
        color: #6b1587;
      }
      @media only screen and (max-width: 756px) {
      font-size: 12px;
      width: 100%;
      margin: 20px 0;
      }
      h2 {
        font-size: 24px;
        @media only screen and (max-width: 756px) {
          font-size: 18px;
        }
      }
      img {
        width: 200px;
        height: 200px;
        margin: 10px 20px;
        @media only screen and (max-width: 756px) {
          width: 100px;
          height: 100px;
          margin: 5px 10px;
        }
      }
      .description {
        width: 50%;
        font-size: 16px;
        @media only screen and (max-width: 756px) {
          font-size: 12px;
        }
      }
    }
    .right-card {
      justify-content: flex-end;
    }
  }


  .bottom-section {
    width: 80%;
    display: flex;
    margin: 120px auto;
    justify-content: space-between;
    padding: 5px;
    @media only screen and (max-width: 756px) {
      width: 90%;
      flex-direction: column;
      padding: 15px;
      margin: 60px auto;
    }
    .card2 {
      background: #f7f7f7;
      padding: 10px 30px;
      width: 40%;
      font-size: 16px;
      text-align: center;
      position: relative;
      display: grid;
      align-items: center;
      @media only screen and (max-width: 756px) {
        font-size: 12px;
        width: 90%;
        padding: 5px;
        margin: 20px auto;
      }

      img {
        position: absolute;
        width: 40%;
        top: -50%;
        left: 30%;
        @media only screen and (max-width: 756px) {
          position: relative;
        }
      }
    }
    .card2-content {
      display: flex;
      flex-direction: column;
      margin: 30px auto;
      @media only screen and (max-width: 756px) {
        margin: 5px auto;
      }
      .btn {
        width: 100%;
        align-self: center;
        justify-self: flex-end;
        @media only screen and (max-width: 756px) {
          font-size: 12px;
          width: 90%;
          padding: 5px;
        }
      }
    }
  }

  .carousel-section {
    width: 90%;
    margin: 30px auto;
    @media only screen and (max-width: 756px) {
      width: 100%;
      margin: 10px 0;
    }
    h2 {
      font-size: 24px;
      margin-left: 20px;
      @media only screen and (max-width: 756px) {
        font-size: 18px;
      }
    }
    .carousel-container {
      background: #ffffff;
      display: flex;
      justify-content: space-between;
      .carousel-item {
        display: flex;
        flex-direction: column;
        align-content: space-between;
        background: #f7f7f7;
        width: 40%;
        padding: 10px 20px;
        @media only screen and (max-width: 756px) {
          padding: 5px; 
          width: 49%;
          font-size: 12px;
        }

        h3 {
          text-transform: capitalize;
          font-size: 24px;
          @media only screen and (max-width: 756px) {
            font-size: 18px;
          }
        }

        hr {
          border: 1px solid #454545;
          width: 70%;
          margin: 10px auto;
        }
      }
    }
  }
`;

export default StyledHomePage;
