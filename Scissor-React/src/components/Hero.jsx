import Navbar from "./Navbar";
import underline from "../assets/images/icon-underline.svg"
import heroLinks from "../assets/images/hero-links.svg"
import heroStone from "../assets/images/stone.svg"
import heroEllipse from "../assets/images/hero-rect-ellipse.svg";
import '../assets/css/hero.css'
const Hero = () => {
  return (
      <div className='hero-gradient'>
          <Navbar />
          <section className='hero-section'>
              <div className='heading-container'>
                  <h1 className='heading'>
                      Optimize Your Online Experience with Our Advanced{" "}
                      <span className='highlight'>URL Shortening</span>{" "}
                      Solution
                  </h1>
                  <img
                      src={underline}
                      alt='underline'
                      className='underline'
                  />
              </div>
              <p className='description'>
                  Personalize your shortened URLs to align with your brand
                  identity. Utilize custom slugs, branded links, and domain
                  customization options to reinforce your brand presence and
                  enhance user engagement.
              </p>
              <div className='call-to-action'>
                  <button type='button' className='signup-btn'>
                      Sign up
                  </button>
                  <button type='button' className='learn-btn'>
                      Learn more
                  </button>
              </div>
              <div className='hero-images'>
                  <div className='hero-img1'>
                      <img
                          src={heroLinks}
                          alt='hero image'
                          className='img-links'
                      />
                      <img
                          src={heroStone}
                          alt='hero image'
                          className='img-stone'
                      />
                  </div>
                  <div className='hero-img2'>
                      <img
                          src={heroEllipse}
                          alt='hero image'
                          className='img-rectangle'
                      />
                  </div>
              </div>
          </section>
      </div>
  );
}
export default Hero