import Styled from 'styled-components';

const StyledHeader = Styled.header`
  position: fixed;
  top: 0;
  display:flex;
  margin: 0 0 50px 0;
  box-sizing: border-box;
  width: 100%;
  transition: background 0.5s;
  min-height: 10%;
  min-width: 100%;
  z-index: 999;

  .companyName {
    text-transform: uppercase;
    font-size: 24px;
    @media only screen and (max-width: 600px) {
      font-size: 14px;
    }
  }

  .second-header {
    width: 100%;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
    padding-left: 20px;
  }

.header {
  width: 90%;
  display: flex;
  margin: 15px auto;
  justify-content: space-between;
  align-items: center;
}

.header-items {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  min-width: 350px;
}

.header-item {
  list-style: none;
  font-size: 21px;
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }
}

@media only screen and (max-width: 756px) {
  .header {
    width: 90%;
  }
  .header-items {
    min-width: 100%;
  }
  .header-item {
    font-size: 12px;
    font-weight: 500;
  }
  .desktop-only{
    display: none;
  }
}

`;

export default StyledHeader;
