import Styled from 'styled-components';

const StyledNotAvailableDashboard = Styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 20% auto;
  background: #F7F7F7;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 25% auto;
  }
  .body{
    width: 90%;
    margin: 110px auto 0 auto;
  }
`;

export default StyledNotAvailableDashboard;
