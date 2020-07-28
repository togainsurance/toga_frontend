import Styled from "styled-components";

const StyledNav = Styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(100%);
  z-index: 999;
  transition: background ease-in-out 0.5s;
  background: rgba(0,0,0,0.1);;
  ${(props) =>
    props.open && `transform: translateY(0); background: rgba(0,0,0,0.5);`};
  .nav {
    position: fixed;
    right: 0;
    top: 0;
    width: 40%;
    background: #FFFFFF;
    padding: 30px;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
    text-align: right;
    min-height: 100%;
    transition: all 0.5s;
    transform: translateX(100%);
    ${(props) => props.open && `transform: translateX(0);`};
    .mobile-only{
      display: none;
    }
    @media only screen and (max-width: 756px) {
      width: 60%;
      padding: 10px;
      .mobile-only{
        display: block;
      }
    }
    
    .closeButton {
      font-weight: 500;
      font-size: 32px;
      padding-right: 10px;
      width: 1.2em;
      display: inline;
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
    footer {
      position: fixed;
      bottom: 10%;
      width: 100%;
    }
  }
`;

export default StyledNav;
