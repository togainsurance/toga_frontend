import React from "react";
import ReferralPageStyle from "./Style";
import { HowItWorksStyle } from "../commonStyle";

const ReferralPage = () => {
  return (
    <ReferralPageStyle>
      <section className="top-section">
        <h2>Earn up to ₦1000 in referral bonuses</h2>
        <p>
          Simply tell your family, friends, neighbors, co-workers, everyone!
          about Toga.
        </p>
        <img
          src="https://res.cloudinary.com/toga-insure/image/upload/v1593086304/CommingSoonPage/referalimg_lclnkm.png"
          alt="Referal Picart"
        />
        <button className="btn">Get Referral Link</button>
      </section>
      <HowItWorksStyle>
        <h2>How it works</h2>
        <div className="sub-section-wrapper">
          <div className="sub-section">
            <img
              src="https://res.cloudinary.com/toga-insure/image/upload/v1592252037/CommingSoonPage/number1_khwrbu.png"
              alt="Number 1"
            />
            <p>
              Create an account, tell us what you would like to protect and pay
              the premium.
            </p>
          </div>
          <div className="sub-section">
            <img
              src="https://res.cloudinary.com/toga-insure/image/upload/v1592252037/CommingSoonPage/number3_xfjgsf.png"
              alt="Number 2"
            />
            <p>
              Create an account, tell us what you would like to protect and pay
              the premium.
            </p>
          </div>
          <div className="sub-section">
            <img
              src="https://res.cloudinary.com/toga-insure/image/upload/v1592252037/CommingSoonPage/number2_shppak.png"
              alt="Number 3"
            />
            <p>
              Get either cash or service benefit within 5 minutes after making a
              request.
            </p>
          </div>
        </div>
      </HowItWorksStyle>
      <div className="plan-info">
        <img
          src="https://res.cloudinary.com/toga-insure/image/upload/v1593086502/CommingSoonPage/referalimg2_brbudk.png"
          alt="Referal depiction"
        />
        <div className="first">
          <h2>WHY?</h2>
          <p>
            Referrals save us advertising money.
            <br /> We'd rather pay you instead.
            <br />
            You earn money. Your friends get covered. Everybody wins.
          </p>
        </div>
        <div>
          <h2>Not sure who to refer?</h2>
          <p>
            Friends with a new house, a young house, or a baby on-the-way are
            often excited to know about Toga (and anyone can apply). Let's help
            them make sure they have the best.
          </p>
        </div>
      </div>
    </ReferralPageStyle>
  );
};

export default ReferralPage;
