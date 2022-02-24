import Ai from '../../assets/images/ai.png'
import people from '../../assets/images/people.png'
import './header.scss';

const Header = () => {
  return (
    <div className='header section__padding'>
      <div className="header__content">
        <div className="header__content--text">
          <h1 className='gradient__text'>Let’s Build Something
            amazing with GPT-3
          </h1>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
          </p>
        </div>
        <div className="header__content--input">
          <input type="email" placeholder='Your Email Address' />
          <button type='button' >Get Started</button>
        </div>
        <div className="header__content--people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="header__img">
        <img src={Ai} alt="Ai" />
      </div>
    </div>
  )
}

export default Header