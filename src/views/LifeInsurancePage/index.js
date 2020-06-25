import React from "react";
import { Link } from "react-router-dom";
import LifeInsuranceStyle from "./Style";
import { PaymentPlanStyle, StyledQuestionSection } from "../commonStyle";

const LifeInsurancePage = () => {
  return (
    <LifeInsuranceStyle>
      <section className="top-section">
        <h2>Basic Life Insurance</h2>
        <img
          src="https://res.cloudinary.com/toga-insure/image/upload/v1592308720/CommingSoonPage/cardimg4_oxvwnd.png"
          alt="Life Insurance"
        />
        <p className="all-caps">Protecting the present and the future</p>
        <p>
          Toga basic life insurance, offers benefits of protection against
          personal accident, permanent disability and life that the user might
          sustain. This plan offers hospitalization payment for the user and
          compensation payments to the beneficiary of the insured user.
        </p>
      </section>
      <section className="benefit-info">
        <h3>It works in such ways as:</h3>
        <div>
          <p>
            <strong className="title">Personal Accident</strong> - in which a
            sum is paid for medical expense as a result of an accident.
          </p>
          <p>
            <strong className="title">Permanent Disability</strong> - provide
            protection to users who become disabled as a result can no longer
            work.
          </p>
          <p>
            <strong className="title">Life Cover</strong> - A fee is paid to the
            beneficiary of the policyholder as a result of the death of the
            holder.
          </p>
        </div>
      </section>
      <PaymentPlanStyle>
        <h2>Payment Plans</h2>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Monthly</th>
              <th>Yearly</th>
              <th>Benefits (what the plan offers)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Plan 1</td>
              <td>200</td>
              <td>1,000</td>
              <td>10,000 (hospitalization) / 100,000 (life)</td>
            </tr>
            <tr>
              <td>Plan 2</td>
              <td>300</td>
              <td>2,000</td>
              <td>20,000 (hospitalization) / 200,000 (life)</td>
            </tr>
            <tr>
              <td>Plan 3</td>
              <td>500</td>
              <td>5,000</td>
              <td>50,000 (hospitalization) / 500,000 (life)</td>
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
            <Link to="/not-available" className="btn2">
              Get Started
            </Link>
          </div>
          <img
            src="https://res.cloudinary.com/toga-insure/image/upload/v1592922060/CommingSoonPage/questionsimg_xnhh7i.png"
            alt="curious Happy customer"
          />
        </div>
      </StyledQuestionSection>
    </LifeInsuranceStyle>
  );
};

export default LifeInsurancePage;
