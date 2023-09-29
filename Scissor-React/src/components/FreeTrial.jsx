import wandIcon from "../assets/images/icon-wand.svg"
import "../assets/css/free-trial.css"
const FreeTrial = () => {
  return (
      <section className='section section-free-trial' id='free-trial'>
          <div className='bg'></div>
          <form action='#' className='form'>
              <div className='form-control'>
                  <input
                      type='text'
                      id='url'
                      className='form-input url-input'
                      placeholder='Paste URL here...'
                      required
                  />
              </div>
              <div className='form-control form-flex'>
                  <select
                      name='domain'
                      id='domain'
                      className='form-input select-domain'
                      required
                  >
                      <option value=''>Choose Domain</option>
                      <option value='Domain 1'>Domain 1</option>
                      <option value='Domain 2'>Domain 2</option>
                      <option value='Domain 3'>Domain 3</option>
                  </select>
                  <input
                      type='text'
                      id='alias'
                      className='form-input alias-input'
                      placeholder='Type Alias here'
                  />
              </div>
              <button type='submit' className='submit-btn'>
                  <span>Trim URL</span>
                  <img src={wandIcon} alt='wand' />
              </button>
              <p>
                  By clicking TrimURL, I agree to the
                  <a href='#' rel="noreferrer">Terms of Service</a>,
                  <a href='#' rel="noreferrer">Privacy Policy</a> and Use of Cookies.
              </p>
          </form>
      </section>
  );
}
export default FreeTrial