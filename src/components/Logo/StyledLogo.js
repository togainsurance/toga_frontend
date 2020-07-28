import Styled from "styled-components";

const Logo = Styled.div`
  color: #6b1587;
  font-family: Roboto, "san-serif";
  font-style: bold;
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;
  display: block;
  position: relative;
  .logo-text {
    display: inline-block;
    position: absolute;
    bottom: 8%;
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
      bottom: 8%;
    }

    img {
      width: 40px;
      height: 43px;
    }
  }
`;

export default Logo;
