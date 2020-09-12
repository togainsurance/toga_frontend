import Styled from 'styled-components';

const StyledDeviceInfo = Styled.div`

  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  min-width: 100%;
  margin: 40px auto;
  padding: 10px;
  grid-gap: 30px;
  font-size: 14px;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
    padding: 5px;
    border-radius: 4px;  
    -moz-border-radius: 4px;  
    -webkit-border-radius: 4px;  
    box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
    -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
    -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
}
  }
  .name {
    border: 2px solid #6b1587;
    border-radius: 9px;
    padding: 10px;
    display: grid;
    grid-template-columns: auto;
    justify-items: center;
    align-items: center;
    font-weight: bold;
    text-align: center;
    text-transform: capitalize;
    hr {
      width: 100%;
    }
  }
  .number-details {
    border: 2px solid;
    border-radius: 9px;
    text-align: center;
    padding: 5px;
    .info-tag {
      color: #6b1587;
      font-weight: bold;
    }
  }
  .cta-container {
    display: grid;
    grid-template-columns: auto;
    grid-gap: 20px;
    @media only screen and (max-width: 600px) {
      grid-gap: 5px;
    }
    .danger {
      background: #D60000;
      border-color: #D60000;
    }
  }
`;

export default StyledDeviceInfo;
