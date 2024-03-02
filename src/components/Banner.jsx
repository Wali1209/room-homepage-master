import { useState } from "react";
import heroImage1 from "../assets/images/desktop-image-hero-1.jpg";
import heroImage2 from "../assets/images/desktop-image-hero-2.jpg";
import heroImage3 from "../assets/images/desktop-image-hero-3.jpg";
import IconArrow from "../assets/images/icon-arrow.svg";
import arrowLeft from "../assets/images/icon-angle-left.svg";
import arrowRight from "../assets/images/icon-angle-right.svg";

// css
import "./banner.styles.css";
const Banner = () => {
  const [currentSlide, setSlide] = useState(0);

  const handleSlideNext = () => {
    setSlide((prevSlide) => (prevSlide + 1) % 3);
  };
  const handleSlidePrev = () => {
    setSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
  };
  return (
    <main className="banner">
      <div className="slide-image">
        {currentSlide === 0 && <img src={heroImage1} alt="Frist Slide" />}
        {currentSlide === 1 && <img src={heroImage2} alt="Second Slide" />}
        {currentSlide === 2 && <img src={heroImage3} alt="Third Slide" />}
        {/* Carousel button */}
        <div className="slide-buttons">
          <button onClick={handleSlidePrev}>
            <img src={arrowLeft} />
          </button>
          <button onClick={handleSlideNext}>
            <img src={arrowRight} />
          </button>
        </div>
      </div>
      <div className="slide-description">
        {/* heading */}
        {currentSlide === 0 && <h1>Discover innovative ways to decorate</h1>}
        {currentSlide === 1 && <h1>We are available all across the globe</h1>}
        {currentSlide === 2 && <h1>Manufactured with the best materials</h1>}

        {/* paragraph  */}
        {currentSlide === 0 && (
          <p>
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </p>
        )}
        {currentSlide === 1 && (
          <p>
            With stores all over the world, it's easy for you to find furniture
            for your home or place of business. Locally, we’re in most major
            cities throughout the country. Find the branch nearest you using our
            store locator. Any questions? Don't hesitate to contact us today.
          </p>
        )}
        {currentSlide === 2 && (
          <p>
            Our modern furniture store provide a high level of quality. Our
            company has invested in advanced technology to ensure that every
            product is made as perfect and as consistent as possible. With three
            decades of experience in this industry, we understand what customers
            want for their home and office.
          </p>
        )}
        {/* button */}
        <button>
          <span>Shop now</span>
          <img src={IconArrow} />
        </button>
      </div>
    </main>
  );
};

export default Banner;
