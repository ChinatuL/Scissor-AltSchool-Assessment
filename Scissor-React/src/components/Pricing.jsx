import { plans, line} from "../data";
import "../assets/css/pricing.css";

const Pricing = () => {
    return (
        <section className='section section-pricing' id='pricing'>
            <div>
                <div className='heading-flex'>
                    <img src={line} alt='' />
                    <h2>
                        A <span className='highlight'>price perfect</span> for your
                        needs.
                    </h2>
                </div>
                <p>
                    From catering for your personal, business, event, socials
                    needs, you can be rest assured we have you in mind in our
                    pricing.
                </p>
            </div>
            <div className='pricing-cards'>
                {plans.map((plan) => {
                    const { id, heading, type, text, planFeatures, classValue } = plan;
                    return (
                        <div className={classValue} key={id}>
                            <h4 className='sub-heading3'>{heading}</h4>
                            <p className='plan'>{type}</p>
                            <h5>{text}</h5>
                            <ul className='plan-features'>
                                {plan.planFeatures.map((feature, index) => {
                                    return <li key={index}>{feature}</li>;
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
            <div className='section-pricing-btns'>
                <button type='button' className='btn-custom'>
                    Get Custom Pricing
                </button>
                <button type='button' className='btn-pricing'>
                    Select Pricing
                </button>
            </div>
        </section>
    );
};
export default Pricing;
