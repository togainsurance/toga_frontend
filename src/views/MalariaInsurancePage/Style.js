import Styled from 'styled-components';

const MalariaStyle = Styled.div`
  width: 100%;
  font-size: 16px;
  @media only screen and (max-width: 756px) {
    font-size: 12px;
  }
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
    h2 {
      margin: 10px 0;
    }
    ol {
      padding: 0;
      list-style: none; 
      counter-reset: li;
      li::before {
        content: counter(li); 
        color: #6b1587;
        display: inline-block; 
        width: 1em;
        margin-right: 5px;
      }
      li {
        padding: 5px 0;
        counter-increment: li
      }
    }
    @media only screen and (max-width: 756px) {
      margin: 40px auto;
    }
  }

  .howitworks-info {
    width: 90%;
    margin: 70px auto 70px 5%;
    .details {
      display: flex;
      flex-flow: wrap;
      align-items: center;
      justify-items: space-evenly;
      span,p {
        display: block;
        margin: 5px 5px 5px 0;
        padding: 5px;
        img {
          width: 80%;
          padding-top: 5px;
        }
      }
      p {
        padding-bottom: 10px;
        
      }
    }
    
    @media only screen and (max-width: 756px) {
      min-width: 90%;
      margin: 40px auto 40px 5%;
      .details {
        justify-items: space-between;
        span,p {
          display: inline;
          margin: 2px 2px 2px 0;
          padding: 2px;
          
        img {
          width: 30%;
        }
      }
     
      }
    }
  }
`;

export default MalariaStyle;
