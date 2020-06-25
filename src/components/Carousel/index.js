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
        style={{ padding: 10, height: 300 }}
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
          <h3>Claims</h3>
          <hr />
          <p>
            A claim is a request by an insurance-plan or policy holder to an
            insurance company for compensation for a covered loss or event.
          </p>
        </div>
      </div>
      <div
        key="slide2"
        style={{ padding: 20, height: 300 }}
        className="carousel-container"
      >
        <div className="carousel-item">
          <h3>Insurance ID</h3>
          <hr />
          <p>This is a unique number that comes with each insurance plan.</p>
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
          <h3>Premium</h3>
          <hr />
          <p>
            This is the recurring fee paid for an insurance plan either monthly,
            yearly or bi-anually.
          </p>
        </div>
        <div className="carousel-item">
          <h3>Policy Number</h3>
          <hr />
          <p>This is a unique number that comes with each insurance plan.</p>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
