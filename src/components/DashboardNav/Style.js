import Styled from 'styled-components';

const DashboardNavStyle = Styled.div`
  display: grid;
  min-height: 100%;
  grid-template-rows: auto 10%;
  font-weight: bold;
  text-transform: capitalize;
  background: #fff;
  text-align: center;
  font-size: 18px;
  .nav {
    padding: 120px 0 100px 0;
    margin: 0 auto;
    width: 100%;
    .nav-item {
      margin: 30px auto;
      padding: 10px 0 10px 20%;
      text-align: left;
      display: block;
      
      &:hover {
        background: #f7f7f7;
        cursor: pointer;
      }
    }
    .active {
      color: #6B1687;
      width: 100%;
      border-left: 3px solid #6B1687;
      background: #f7f7f7;
      box-shadow: inset 0 2 10px #6B1687;
    }
  }
  .footer {
    width: 100%;
    .footer-item {
      width: 100%;
      padding: 10px 0 10px 20%;
      &:hover {
        background: #FCECEC;
        color: red;
        cursor: pointer;
      }
      .icon {
        color: red;
        font-size: 1.2em;
        margin-right: 10px;
      }
    }
    color: black;
    text-align: left;
  }
`;

export default DashboardNavStyle;
