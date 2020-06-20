import Styled from "styled-components";

const StyledNav = Styled.nav`
  position: fixed;
  right: 0;
  top: 0;
  width: 25%;
  background: #FFFFFF;
  z-index: 999;
  padding: 30px;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  text-align: right;
  min-height: 527px;
  transform: translateX(100%);
  transition: all 0.3s;
  ${(props) => props.open && `transform: translateX(0);`};
  @media only screen and (max-width: 756px) {
    width: 50%;
    padding: 10px;
    min-height: 100%;
  }
}
  .closeButton {
    font-weight: 900;
    &:hover {
      cursor: pointer;
    }
  }
  ul {
    list-style: none;
    li {
      padding: 10px;
      @media only screen and (max-width: 756px) {
        font-size: 14px;
      }
      &:hover {
        cursor: pointer;
        font-weight: bolder;
      }
    }
  }
`;

export default StyledNav;
