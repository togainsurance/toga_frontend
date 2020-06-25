import Styled from "styled-components";

const FooterStyle = Styled.footer`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  padding: 20px 20px 5px 20px;
  background: #f7f7f7;
  .footer-top {
    display: flex;
    justify-content: space-between;
    padding-right: 5%;
    @media only screen and (max-width: 856px) {
      padding-right: 2%;
    }
  }

.footer-middle,
.footer-top,
.footer-bottom {
  width: 90%;
  margin-left: 5%;
  @media only screen and (max-width: 856px) {
    width: 95%;
    font-size: 10px;
  }
}

.footer-top__left {
  min-width: 514px;
  box-sizing: border-box;
  @media only screen and (max-width: 856px) {
    min-width: 30%;
  }
}

.footer-top__right {
  margin-right: 4%;
}

.footer-top__left .msg-body {
  width: 94%;
  display: block;
  height: 172px;
  border: none;
  margin-bottom: 20px;
  padding: 10px 15px;
  resize: none;
  @media only screen and (max-width: 856px) {
    height: 60px;
    width: 70%;
  }
}

.footer-top__left .msg-body,
.footer-top__left__bottom input,
.footer-top__left__bottom button {
  border-radius: 21px;
  outline: none;
}

.footer-top__left__bottom input,
.footer-top__left__bottom button {
  @media only screen and (max-width: 856px) {
    width: 100%;
    display: block;
    margin-bottom: 10px;
  }
}

.footer-top__left__bottom {
  display: flex;
  justify-items: space-between;
  margin-top: 5px;
  @media only screen and (max-width: 856px) {
    display: block;
  }
}

.footer-top__left__bottom input {
  width: 65%;
  border-radius: 21px;
  display: inline-block;
  padding: 10px 15px;
  border: none;
}

.footer-top__left__bottom button {
  width: 35%;
  justify-self: flex-end;
  margin-left: 5%;
}

.footer-items {
  width: 90%;
  padding-left: 40%;
}

.footer-item {
  list-style: none;
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 10px;
  @media only screen and (max-width: 856px) {
    font-size: 10px;
  }
}

.footer-line {
  border: 1px solid #888888;
  width: 95%;
  margin: 10px auto;
}
`;

export default FooterStyle;
