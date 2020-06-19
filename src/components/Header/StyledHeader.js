import Styled from "styled-components";

const StyledHeader = Styled.header`
  position: relative;
  margin: 0;

.header {
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 15px auto;
}

.header-items {
  display: flex;
  width: 100%;
  justify-content: space-between;
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
  .header-item {
    font-size: 12px;
    font-weight: 500;
  }

  .header-line {
    width: 74%;
    left: 18%;
    top: 100%;
  }
}

`;

export default StyledHeader;
