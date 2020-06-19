import Styled from "styled-components";

const StyledHomePage = Styled.div`
.top-section {
  width: 50%;
  margin: 30px auto;
  display: grid;
  grid-template-columns: auto;
  margin-left: 25%;
  @media only screen and (max-width: 756px) {
    width: 70%;
    margin: 15px auto;
  }
}

.top-section_title {
  text-align: center;
  justify-self: center;
  font-size: 36px;
  line-height: 45px;
  letter-spacing: 0.15em;
  margin-left: 10px;
  @media only screen and (max-width: 756px) {
    font-size: 18px;
    line-height: 30px;
  }
}

.hero {
  text-align: center;
  width: 50%;
  margin: 5px auto;
  @media only screen and (max-width: 756px) {
    width: 70%;
  }
}

.hero img {
  display: block;
  width: 100%;
}

.appstore-img {
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  @media only screen and (max-width: 756px) {
    width: 100%
  }
}

.appstore-img .android {
  width: 120px;
  height: 65px;
  @media only screen and (max-width: 756px) {
    width: 70px;
    height: 40px;
  }
}

.appstore-img .apple {
  width: 110px;
  height: 130px;
  @media only screen and (max-width: 756px) {
    width: 70px;
    height: 80px;
  }
}

.middle-section {
  width: 100%;
  margin-left: 10%;
  @media only screen and (max-width: 756px) {
   margin-left: 5px;
  }
}

.card {
  display: flex;
  width: 80%;
  margin: 10px;
  font-size: 18px;
  @media only screen and (max-width: 756px) {
   font-size: 12px;
   width: 100%;
   margin: 10px 0;
  }
}

.card h2 {
  font-size: 34px;
  @media only screen and (max-width: 756px) {
   font-size: 16px;
  }
}

.card img {
  width: 250px;
  height: 250px;
  margin: 10px 20px;
  @media only screen and (max-width: 756px) {
    width: 130px;
    height: 130px;
    margin: 5px 10px;
  }
}

.card .description {
  width: 50%;
  font-size: 18px;
  @media only screen and (max-width: 756px) {
   font-size: 12px;
  }
}

.right-card {
  justify-content: flex-end;
}

.how-it-works {
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  background: #f7f7f7;
  margin: 50px auto;
}

.how-it-works h2 {
  text-align: center;
  font-size: 36px;
  margin: 30px auto;
  line-height: 34px;
  @media only screen and (max-width: 756px) {
   font-size: 18px;
   line-height: 20px;
   margin: 15px auto;
  }
}

.sub-section-wrapper {
  width: 90%;
  display: flex;
  margin: 10px auto;
  justify-content: space-between;
  @media only screen and (max-width: 756px) {
   width: 100%;
  }
}

.sub-section {
  display: grid;
  grid-template-columns: auto;
  max-width: 20%;
  text-align: center;
  font-size: 18px;
  @media only screen and (max-width: 756px) {
    max-width: 30%;
   font-size: 12px;
   padding: 5px;
  }
}

.sub-section img {
  justify-self: center;
  @media only screen and (max-width: 756px) {
   width: 70px;
   height: 70px;
  }
}

.sub-section h2 {
  font-size: 24px;
  @media only screen and (max-width: 756px) {
   font-size: 14px;
  }
}

.bottom-section {
  width: 80%;
  display: flex;
  margin: 30px auto;
  justify-content: space-between;
  padding: 5% 5px;
  @media only screen and (max-width: 756px) {
   width: 90%;
   padding: 10px;
  }
}

.card2 {
  background: #f7f7f7;
  padding: 10px 30px;
  width: 30%;
  font-size: 18px;
  text-align: center;
  position: relative;
  display: grid;
  align-items: center;
  @media only screen and (max-width: 756px) {
    font-size: 12px;
    width: 35%;
    padding: 5px 10px;
  }

  img {
  position: absolute;
  width: 40%;
  top: -35%;
  left: 30%;
    @media only screen and (max-width: 756px) {
      top: -10%;
      width: 50%;
    }
  }
}


.card2-content {
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  button {
    width: 70%;
    align-self: center;
    justify-self: flex-end;
    @media only screen and (max-width: 756px) {
      font-size: 12px;
      width: 90%;
      padding: 5px;
    }
  }
}

.carousel-section {
  width: 90%;
  margin: 30px auto;
  @media only screen and (max-width: 756px) {
    width: 100%;
    margin: 10px 0;
  }
  h2 {
    font-size: 36px;
    margin-left: 20px;
    @media only screen and (max-width: 756px) {
      font-size: 18px;
    }
  }
}

.carousel-container {
  background: #ffffff;
  display: flex;
  justify-content: space-between;
}

.carousel-item {
  display: flex;
  flex-direction: column;
  align-content: space-between;
  background: #f7f7f7;
  width: 40%;
  padding: 10px 20px;
  @media only screen and (max-width: 756px) {
    padding: 5px; 
    width: 48%;
    font-size: 12px;
  }

  h3 {
    text-transform: capitalize;
    font-size: 24px;
    @media only screen and (max-width: 756px) {
      font-size: 18px;
    }
  }

  hr {
    border: 1px solid #454545;
    width: 70%;
    margin: 10px auto;
  }
}

`;

export default StyledHomePage;
