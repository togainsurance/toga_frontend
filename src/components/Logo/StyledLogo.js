import Styled from 'styled-components';

const Logo = Styled.div`
  color: #6b1587;
  font-family: Roboto, "san-serif";
  font-style: bold;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .logo-text {
    display: inline-block;
    text-transform: uppercase;
  }
  img {
  display: inline-block;
  width: 50px;
  height: 53px;
  margin-right: 10px;
}

  @media only screen and (max-width: 600px) {
    font-size: 24px;
    line-height: 30px;
    .logo-text {
      display: none;
      bottom: 8%;
    }

    img {
      width: 40px;
      height: 43px;
    }
  }
`;

export default Logo;
