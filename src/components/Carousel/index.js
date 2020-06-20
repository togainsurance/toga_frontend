import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselComponent = () => {
  return (
    <Carousel
      infiniteLoop={true}
      showStatus={false}
      showIndicators={false}
      showArrows={true}
      autoPlay={true}
      showThumbs={false}
      swipeable={true}
    >
      <div
        key="slide1"
        style={{ padding: 30, height: 300 }}
        className="carousel-container"
      >
        <div className="carousel-item">
          <h3>policy</h3>
          <hr />
          <p>
            A policy is a contract (generally a standard form contract) between
            the insurer and the insured. A policy is created once a plan is
            purchased.
          </p>
        </div>
        <div className="carousel-item">
          <h3>Insured</h3>
          <hr />
          <p>The person(s) covered by the insurance policy.</p>
        </div>
      </div>
      <div
        key="slide2"
        style={{ padding: 20, height: 300 }}
        className="carousel-container"
      >
        <div className="carousel-item">
          <h3>Deductible</h3>
          <hr />
          <p>
            The annual amount of money that you must pay out of pocket for
            medical expenses before your insurance kicks in and starts to make
            payments
          </p>
        </div>
        <div className="carousel-item">
          <h3>Benefit</h3>
          <hr />
          <p>
            Payments of services provided under stated circumstances under the
            terms of an insurance plan or policy.
          </p>
        </div>
      </div>
      <div
        key="slide3"
        style={{ padding: 20, height: 300 }}
        className="carousel-container"
      >
        <div className="carousel-item">
          <h3>Premiums</h3>
          <hr />
          <p>
            The monthly or annual amount that you must pay in order to have the
            insurance coverage.
          </p>
        </div>
        <div className="carousel-item">
          <h3>Co-payment</h3>
          <hr />
          <p>
            A flat fee that you must pay toward the cost of medical visits, your
            insurance provider pays the remaining balance. For example, you
            could be responsible for a ₦2,000 co-pay for each visit to the
            doctor.
          </p>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
