import Styled from "styled-components";

const FooterStyle = Styled.footer`
  padding: 20px 0;
  background: #e2d6cc;
  /* background: #717171; */
  @media only screen and (max-width: 856px) {
   text-align: center;
   .footer-bottom, .footer-middle {
     text-align: left;
   }
  }
  .footer-top {
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 856px) {
      flex-direction: column-reverse;
      padding: 0;
      .footer-top__left-title {
        text-align: center;
      }
    }
  }

.footer-middle,
.footer-top,
.footer-bottom {
  width: 90%;
  margin: 10px auto;
  font-size: 14px;
  @media only screen and (max-width: 856px) {
    width: 95%;
    font-size: 12px;
    margin: 5px auto;
  }
}

.footer-top__left {
  min-width: 514px;
  @media only screen and (max-width: 856px) {
    min-width: 100%;
  }
}

.footer-top__right {
  padding: 10px;
  @media only screen and (max-width: 856px) {
    margin: 0 auto 0 auto;
    .footer-logo {
      margin-left: -50px;
    }
  }
}

.footer-top__left-title {
  font-size: 24px;
  font-weight: 700;
  padding-left: 10px;
  @media only screen and (max-width: 856px) {
    font-size: 16px;
  }
}

.footer-top__left__bottom input,
.footer-top__left__bottom button {
  @media only screen and (max-width: 856px) {
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
  display: inline-block;
  padding: 10px 15px;
  border: none;
}

.footer-top__left__bottom button {
  width: 35%;
  justify-self: flex-end;
}

.footer-top__left__bottom input{
  border-radius: 13px 0 0 13px;
}
.footer-top__left .msg-body,
.footer-top__left__bottom input,
.footer-top__left__bottom button {
  outline: none;
  @media only screen and (max-width: 856px) {
    width: 90%;
    display: block;
    margin: 10px auto;
  }
}

.footer-top__left__bottom button {
    border-radius: 0 13px 13px 0;
  @media only screen and (max-width: 856px) {
    width: 90%;
    border-radius: 0 8px 8px 0;
  }
}



.footer-items {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  @media only screen and (max-width: 856px) {
    padding: 5px;
    margin: 5px 0;
  }
}

.footer-item {
  list-style: none;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
    font-weight: bolder;
  }
  @media only screen and (max-width: 856px) {
    font-size: 12px;
  }
}

.footer-line {
  border: 1px solid #888888;
  width: 95%;
  margin: 10px auto;
  @media only screen and (max-width: 856px) {
    width: 100%;
  }
}
`;

export default FooterStyle;
