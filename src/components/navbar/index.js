import { Fragment, useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/images/logo.svg'
import './navbar.scss'

const Navbar = () => {


  const Menu = () => {
    return (
      <Fragment>
        <p><a href='#home'>Home</a></p>
        <p><a href='#wgpt3'>What is GPT3?</a></p>
        <p><a href='#possibility'>Open AI</a></p>
        <p><a href='#features'>Case Studies</a></p>
        <p><a href='#blog'>Library</a></p>
      </Fragment>
    )

  }
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='navbar'>
      <div className='navbar__links'>
        <div className="navbar__links--logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar__links--container">
          <Menu />
        </div>

      </div>
      <div className="navbar__sign">
        <p>Sign in</p>
        <button className='navbar__sign--btn'> Sign up</button>
      </div>
      <div className="navbar__menu">
        {
          toggleMenu ? <RiCloseLine color='#fff' size={27} onClick={() => { setToggleMenu(false) }} />
            : <RiMenu3Line color='#fff' size={27} onClick={() => { setToggleMenu(true) }} />
        }

        {toggleMenu &&
          <div className="navbar__menu--container scale-up-center">
            <div className="navbar__menu--container-links">
              <Menu />
              <div className="navbar__menu--container-links-sign ">
                <p>Sign in</p>
                <button className='navbar__sign--btn'> Sign up</button>
              </div>
            </div>
          </div>
        }

      </div>

    </div>
  )
}

export default Navbar
