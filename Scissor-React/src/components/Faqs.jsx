import {faqs, line} from "../data"
import icon from "../assets/images/icon-plus.svg"
import "../assets/css/faqs.css"
const Faqs = () => {
  return (
      <section className='section section-faq' id='faqs'>
          <div className='heading-flex'>
              <img src={line} alt='' />
              <h2 className='sub-heading'>FAQs</h2>
          </div>
      <ul className='accordion'>
        {faqs.map((faq) => {
          const { id, question, answer } = faq
          return (
              <li key={id}>
                  <input type='checkbox'/>
                  <img src={icon} alt=""/>
              <p className='question'>{question}</p>
                  <p className='answer'>
                      {answer}
                  </p>
              </li>
          );
        })}
          </ul>
      </section>
  );
}
export default Faqs