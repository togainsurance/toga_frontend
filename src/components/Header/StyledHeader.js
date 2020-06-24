import Styled from "styled-components";

const StyledHeader = Styled.header`
  position: relative;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  /* border: 1px solid red; */

.header {
  width: 95%;
  display: grid;
  grid-template-columns: 10% 50%;
  grid-column-gap: 65%;
  margin: 15px auto;
}

.header-items {
  display: flex;
  width: 50%;
  justify-content: space-between;
  box-sizing: border-box;
  justify-self: end;
}

.header-item {
  list-style: none;
  font-size: 21px;
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }
}

.header-line {
  width: 85%;
  margin: auto;
  border: 1px solid #a3a3a3;
  position: absolute;
  left: 9.8%;
  top: 100%;
}

@media only screen and (max-width: 756px) {
  .header {
    display: flex;
    justify-content: space-between;
  }

  .header-items {
    width: 98%;
    justify-content: space-between;
    justify-self: end;
  }
  .header-item {
    font-size: 12px;
    font-weight: 500;
  }

  .header-line {
    width: 74%;
    left: 18%;
    top: 100%;
  }
  .desktop-only{
    display: none;
  }
}

`;

export default StyledHeader;
