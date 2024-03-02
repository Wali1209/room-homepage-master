import imgAboutDark from "../assets/images/image-about-dark.jpg";
import imgAboutLight from "../assets/images/image-about-light.jpg";
import "./aboutSection.styles.css";
const AboutSection = () => {
  return (
    <div className="about-section">
      <img src={imgAboutDark} alt="About Image 1" />
      <div className="about-section-description">
        <h1>About our furniture</h1>
        <p>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <img src={imgAboutLight} alt="About Image 2" />
    </div>
  );
};

export default AboutSection;
