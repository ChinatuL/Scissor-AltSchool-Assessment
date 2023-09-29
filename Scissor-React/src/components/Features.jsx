import { statistics, line, features } from "../data";
import "../assets/css/features.css";
const Features = () => {
    return (
        <section className='section section-features' id='features'>
            <section className='sub-section1'>
                <h2 className='sub-heading'>
                    One Stop. <br />
                    Four <span className='highlight'>Possibilities</span>.
                </h2>
                <div className='statistics'>
                    {statistics.map((item) => {
                        const { id, heading, text } = item;
                        return (
                            <div key={id}>
                                <h3 className='sub-heading2'>{heading}</h3>
                                <p>{text}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
            <section className='sub-section2'>
                <div>
                    <div className='heading-flex'>
                        <img src={line} alt='line' />
                        <h2 className='sub-heading'>
                            Why choose
                {" "}<span className='highlight'>Scissors</span>
                        </h2>
                    </div>
                    <p>
                        Scissors is the hub of everything that has to do with
                        your link management. We shorten your URLs, allow you
                        creating custom ones for your personal, business, event
                        usage. Our swift QR code creation, management and usage
                        tracking with advance analytics for all of these is
                        second to none.
                    </p>
                </div>
                <div className='feature-flex'>
                    {features.map((feature) => {
                      const { id, src, alt, heading, text } = feature;
                      return (
                          <div className='feature' id={id} key={id}>
                              <img
                                  src={src}
                                  alt={alt}
                                  className='feature-icon'
                              />
                              <h3 className='sub-heading2'>{heading}</h3>
                              <p>
                                  {text}
                              </p>
                          </div>
                      );
                    })}
                </div>
            </section>
        </section>
    );
};
export default Features;
