import React from 'react';
import StyledHomePage from './StyledHomePage';
import Carousel from '../../components/Carousel';
import { Link } from 'react-router-dom';
import { HowItWorksStyle } from '../commonStyle';

const HomePage = () => {
  return (
    <StyledHomePage>
      <section className='top-section'>
        <h2 className='top-section_title'>
          INSTANT PROTECTION
          <br /> FOR
          <br />
          EVERYTHING YOU LOVE
        </h2>
        <div className='hero'>
          <img
            src='https://res.cloudinary.com/toga-insure/image/upload/v1592249356/CommingSoonPage/homePageHero_ullonc.png'
            alt='Protected famiy'
          />
          <p>
            Get insurance for devices, health, family and life form as low as
            N200
          </p>
          <div className='mobile-app-link'>
            Available
            <div className='appstore-img'>
              <Link to='/not-available'>
                <img
                  src='https://res.cloudinary.com/toga-insure/image/upload/v1592250120/CommingSoonPage/appleStore_thn5jy.png'
                  alt='Apple App Store'
                  className='apple'
                />
              </Link>
              <Link to='/not-available'>
                <img
                  src='https://res.cloudinary.com/toga-insure/image/upload/v1592307417/CommingSoonPage/googleStore_lhe8fy.png'
                  alt='Android App Store'
                  className='android'
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className='middle-section'>
        <div className='left-card card'>
          <img
            src='https://res.cloudinary.com/toga-insure/image/upload/v1592308720/CommingSoonPage/cardimg1_mgtfoz.png'
            alt='Card 1'
          />
          <div className='description'>
            <h2>Insurance made easy just for you</h2>
            <p>
              From protecting your devices to helping you protect your health
              and life, Toga Insurance offers insurance plans that reduce your
              worries
            </p>
          </div>
        </div>
        <div className='right-card card'>
          <div className='description'>
            <h2>Device Insurance</h2>
            <p>
              Get protection for your mobile phones, computers, tablets and
              iPads.{' '}
              <Link className='more' to='/device'>
                Find out more
              </Link>
            </p>
          </div>
          <img
            alt='Card 2'
            src='https://res.cloudinary.com/toga-insure/image/upload/v1592308720/CommingSoonPage/cardimg2_exvz2t.png'
          />
        </div>
        <div className='left-card card'>
          <img
            src='https://res.cloudinary.com/toga-insure/image/upload/v1592308720/CommingSoonPage/cardimg3_mekcty.png'
            alt='Card 3'
          />
          <div className='description'>
            <h2>Malaria Insurance Plan</h2>
            <p>
              Receive testing treatment and after-care for malaria without any
              extra cost.{' '}
              <Link className='more' to='/malaria'>
                Find out more
              </Link>
            </p>
          </div>
        </div>
        <div className='right-card card'>
          <div className='description'>
            <h2>Basic Life Insurance</h2>
            <p>
              Get hospitalization and life benefits whenever an accident or
              health challenge occurs.{' '}
              <Link className='more' to='/basic-life'>
                Find out more
              </Link>
            </p>
          </div>
          <img
            src='https://res.cloudinary.com/toga-insure/image/upload/v1592308720/CommingSoonPage/cardimg4_oxvwnd.png'
            alt='Card 4'
          />
        </div>
        <div className='left-card card'>
          <img
            src='https://res.cloudinary.com/toga-insure/image/upload/v1595432408/CommingSoonPage/4376-removebg-preview_kin7ca.png'
            alt='Card 3'
          />
          <div className='description'>
            <h2>Want to partner with us?</h2>
            <p>
              You can start conversations with us via your mail by clicking on
              the link that follows.{' '}
              <a
                className='more'
                href='mailto:info@toga.com.ng?Subject=Would%20like%20to%20patner%20with%20you!'
              >
                Mail us
              </a>
            </p>
          </div>
        </div>
      </div>
      <HowItWorksStyle>
        <h2>How it works</h2>
        <div className='sub-section-wrapper'>
          <div className='sub-section'>
            <img
              src='https://res.cloudinary.com/toga-insure/image/upload/v1592252037/CommingSoonPage/number1_khwrbu.png'
              alt='Number 1'
            />
            <h2>Sign Up</h2>
            <p>
              Create an account, tell us what you would like to protect and pay
              the premium.
            </p>
          </div>
          <div className='sub-section'>
            <img
              src='https://res.cloudinary.com/toga-insure/image/upload/v1592252037/CommingSoonPage/number3_xfjgsf.png'
              alt='Number 2'
            />
            <h2>Make a claim request</h2>
            <p>
              Create an account, tell us what you would like to protect and pay
              the premium.
            </p>
          </div>
          <div className='sub-section'>
            <img
              src='https://res.cloudinary.com/toga-insure/image/upload/v1592252037/CommingSoonPage/number2_shppak.png'
              alt='Number 3'
            />
            <h2>Receive payment or service</h2>
            <p>
              Get either cash or service benefit within 5 minutes after making a
              request.
            </p>
          </div>
        </div>
      </HowItWorksStyle>
      <div className='bottom-section'>
        <div className='card2'>
          <img
            src='https://res.cloudinary.com/toga-insure/image/upload/v1592252476/CommingSoonPage/card2_art1_gkkwu3.png'
            alt='Label'
          />
          <div className='card2-content'>
            <p>Tell us how we can help</p>
            <Link to='/not-available' className='btn'>
              Make a claim
            </Link>
          </div>
        </div>
        <div className='card2'>
          <img
            src='https://res.cloudinary.com/toga-insure/image/upload/v1592252476/CommingSoonPage/card2_art2_dgb9cb.png'
            alt='Label'
          />
          <div className='card2-content'>
            <p>
              Request a repair of a device from guaranteed repair service
              provider
            </p>
            <Link className='btn' to='/not-available'>
              Request a repair
            </Link>
          </div>
        </div>
      </div>
      <section className='carousel-section'>
        <h2>Insurance Dictionary</h2>
        <Carousel />
      </section>
    </StyledHomePage>
  );
};

export default HomePage;
