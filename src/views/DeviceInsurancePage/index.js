import React from "react";
import StyledDevicePage from "./Style";
import { Link } from "react-router-dom";
import { PaymentPlanStyle, StyledQuestionSection } from "../commonStyle";

const DeviceInsurance = () => {
  return (
    <StyledDevicePage>
      <section className="top-section">
        <h2>Device Insurance</h2>
        <img
          src="https://res.cloudinary.com/toga-insure/image/upload/v1592308720/CommingSoonPage/cardimg2_exvz2t.png"
          alt="Device Insurance"
        />
        <p className="all-caps">
          Protection for the devices that keep us connected
        </p>
        <p>
          Your mobile phone, computer, tablet or iPad might be new or used or
          even given to you by a loved one. We use it to connect to family and
          friends get work done or even to just watch a video or read a book. No
          matter what you use it for we can all agree that they are important.
        </p>
        <p>
          Most devices come with a warranty from the manufacturer when purchased
          new, but it’s good to look into getting added protection for your new
          device.
        </p>
      </section>
      <section className="insurance-info">
        <h3>
          Toga mobile insurance offers the following services for new and in use
          devices:
        </h3>
        <div className="info-grid">
          <div className="info-box">
            <img
              className="info-image"
              src="https://res.cloudinary.com/toga-insure/image/upload/v1592665981/CommingSoonPage/dropletIcon_rxra8r.png"
              alt="Droplet"
            />
            <p className="info-text">You’re protected from water damage</p>
          </div>
          <div className="info-box">
            <img
              className="info-image"
              src="https://res.cloudinary.com/toga-insure/image/upload/v1592665981/CommingSoonPage/screenIcon_wyeszk.png"
              alt="Smart Phone"
            />
            <p className="info-text">You’re protected from screen damage</p>
          </div>
          <div className="info-box">
            <img
              className="info-image"
              src="https://res.cloudinary.com/toga-insure/image/upload/v1592665982/CommingSoonPage/wifiIcon_mip8gi.png"
              alt="Wifi Symbol"
            />
            <p className="info-text">
              You get coverage immediately, everywhere you go in Nigeria
            </p>
          </div>
          <div className="info-box">
            <img
              className="info-image"
              src="https://res.cloudinary.com/toga-insure/image/upload/v1592665981/CommingSoonPage/locationIcon_mdqkzi.png"
              alt="Locator Icon"
            />
            <p className="info-text">
              Device tracking for search in case of a stolen or misplaced phone
            </p>
          </div>
          <div className="info-box">
            <img
              className="info-image"
              src="https://res.cloudinary.com/toga-insure/image/upload/v1592665981/CommingSoonPage/compassIcon_c6cxsz.png"
              alt="Compass Icon"
            />
            <p className="info-text">
              Pick up of damaged device and return of repaired device
            </p>
          </div>
          <div className="info-box">
            <img
              className="info-image"
              src="https://res.cloudinary.com/toga-insure/image/upload/v1592665982/CommingSoonPage/databaseIcon_e3d0q1.png"
              alt="Database Icon"
            />
            <p className="info-text">Cheap cost to repair little fixes</p>
          </div>
          <div></div>
          <div className="info-box">
            <img
              className="info-image"
              src="https://res.cloudinary.com/toga-insure/image/upload/v1592665981/CommingSoonPage/cpuIcon_culpxq.png"
              alt="CPU icon"
            />
            <p className="info-text">Future upgrade assistance</p>
          </div>
          <div></div>
        </div>
      </section>
      <div className="middle-section">
        <p>
          The insurance plan pays for damage to devices from water and screen
          damages. We do not ask for extra fees from you for any of our
          services.
        </p>
        <p>
          The future upgrade assistance means that once you decide to change
          your device we help search for the device within the budget you have
          and also help migrate your insurance to that new device without any
          extra cost.
        </p>
      </div>
      <PaymentPlanStyle>
        <h2>Payment Plans Per Year</h2>
        <table>
          <thead>
            <tr>
              <th>Device Value</th>
              <th>Per-Month</th>
              <th>6-times Payment</th>
              <th>3-times Payment</th>
              <th>2-times Payment</th>
              <th>One time Payment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0-40,000</td>
              <td>250</td>
              <td>500</td>
              <td>1,000</td>
              <td>1,500</td>
              <td>3,000</td>
            </tr>
            <tr>
              <td>40,001-100,000</td>
              <td>600</td>
              <td>1,200</td>
              <td>2,500</td>
              <td>3,500</td>
              <td>7,000</td>
            </tr>
            <tr>
              <td>100,001-350,000</td>
              <td>1,700</td>
              <td>3,500</td>
              <td>7,000</td>
              <td>10,000</td>
              <td>20,500</td>
            </tr>
            <tr>
              <td>350,000- 600,000</td>
              <td>3,000</td>
              <td>6,000</td>
              <td>12,000</td>
              <td>18,000</td>
              <td>36,000</td>
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
            <Link className="btn2">Get Started</Link>
          </div>
          <img
            src="https://res.cloudinary.com/toga-insure/image/upload/v1592922060/CommingSoonPage/questionsimg_xnhh7i.png"
            alt="curious Happy customer"
          />
        </div>
      </StyledQuestionSection>
    </StyledDevicePage>
  );
};

export default DeviceInsurance;
