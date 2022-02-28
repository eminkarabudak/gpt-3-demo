import logo from '../../assets/images/logo.svg'
import './footer.scss'

const Footer = () => {
  return (
    <div className='footer section__padding'>
      <div className="footer__heading">
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
        <div className="footer__button">
          <button>Request Early Access</button>
        </div>
      </div>
      <div className="footer__links">
        <div className="footer__logo">
          <img src={logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
        </div>
        <div className="footer__link">
          <h4>Links</h4>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="footer__link">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="footer__link">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p>@2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer