import React from "react";
import MalariaStyle from "./Style";
import { PaymentPlanStyle, StyledQuestionSection } from "../commonStyle";

const MalariaPage = () => {
  return (
    <MalariaStyle>
      <section className="top-section">
        <h2>Malaria Insurance</h2>
        <img
          src="https://res.cloudinary.com/toga-insure/image/upload/v1592308720/CommingSoonPage/cardimg3_mekcty.png"
          alt="Device Insurance"
        />
        <p className="all-caps">
          Treat yourself and family members against malaria for as low as ₦400 a
          month
        </p>
        <p>
          Malaria is a common illness experienced in Nigeria with an estimated
          rate of one in every five Nigerians having malaria every month
        </p>
      </section>
      <section className="benefit-info">
        <h3>The benefits of this plan include:</h3>
        <ol>
          <li>Testing for malaria and other ailments</li>
          <li>Comprehensive malaria treatment</li>
          <li>Health tips on how to recover and prevent malaria</li>
        </ol>
      </section>
      <section className="howitworks-info">
        <h3>How it works :</h3>
        <div className="details">
          <p>Sign Up</p>
          <span>
            <img
              src="https://res.cloudinary.com/toga-insure/image/upload/v1592920447/CommingSoonPage/arrow_xravhq.png"
              alt="Arrow"
            />
          </span>
          <p>Feel ill</p>
          <span>
            <img
              src="https://res.cloudinary.com/toga-insure/image/upload/v1592920447/CommingSoonPage/arrow_xravhq.png"
              alt="Arrow"
            />
          </span>
          <p>Request Treatment</p>
          <span>
            <img
              src="https://res.cloudinary.com/toga-insure/image/upload/v1592920447/CommingSoonPage/arrow_xravhq.png"
              alt="Arrow"
            />
          </span>
          <p>Run a test to confirm it's malaria</p>
          <span>
            <img
              src="https://res.cloudinary.com/toga-insure/image/upload/v1592920447/CommingSoonPage/arrow_xravhq.png"
              alt="Arrow"
            />
          </span>
          <p>Visit the nearest pharmacy</p>
          <span>
            <img
              src="https://res.cloudinary.com/toga-insure/image/upload/v1592920447/CommingSoonPage/arrow_xravhq.png"
              alt="Arrow"
            />
          </span>
          <p>Get free drugs</p>
        </div>
      </section>
      <PaymentPlanStyle>
        <h2>Payment Plans</h2>
        <table>
          <thead>
            <tr>
              <th>Family Size</th>
              <th>1 Month</th>
              <th>3 Months</th>
              <th>6 Months</th>
              <th> 1 Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Single cover</td>
              <td>400</td>
              <td>1,200</td>
              <td>2,400</td>
              <td>4,800</td>
            </tr>
            <tr>
              <td>2 person family</td>
              <td>700</td>
              <td>2,100</td>
              <td>4,200</td>
              <td>8,400</td>
            </tr>
            <tr>
              <td>3 person family</td>
              <td>1,000</td>
              <td>3,000</td>
              <td>6,000</td>
              <td>12,000</td>
            </tr>
            <tr>
              <td>4 person family</td>
              <td>1,500</td>
              <td>4,500</td>
              <td>9,000</td>
              <td>18,000</td>
            </tr>
            <tr>
              <td>5 person family</td>
              <td>1,900</td>
              <td>5,700</td>
              <td>11,400</td>
              <td>22,800</td>
            </tr>
          </tbody>
        </table>
      </PaymentPlanStyle>
      <StyledQuestionSection className="questions">
        <h2>Some Questions & Answers</h2>
        <div className="content-container">
          <div>
            <h3>We understand, you’re busy.</h3>
            <p>
              We’ll cover you instantly once your payment is complete. No
              waiting period, no shenanigans.
            </p>
            <p>Simply get answers from the mostly asked questions.</p>
            <a className="btn2">Get Started</a>
          </div>
          <img
            src="https://res.cloudinary.com/toga-insure/image/upload/v1592922060/CommingSoonPage/questionsimg_xnhh7i.png"
            alt="curious Happy customer"
          />
        </div>
      </StyledQuestionSection>
    </MalariaStyle>
  );
};

export default MalariaPage;
