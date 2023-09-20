import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import PrimaryPinkButton from './primary-pink-button'
import './header.css'

const Header = (props) => {
  return (
    <div data-role="Header" className={`header-header ${props.rootClassName} `}>
      <div className="header-container">
        <nav className="header-nav">
          <div className="header-container1">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="header-image"
            />
            <div className="header-menu">
              <Link to="/" className="header-navlink Large">
                Home
              </Link>
              <span className="header-text Large">Profile</span>
              <span className="header-text1 Large">Coming Soon</span>
            </div>
            <div className="header-container2">
              <div className="header-container3">
                <PrimaryPinkButton button="buy now"></PrimaryPinkButton>
              </div>
              <div data-role="BurgerMenu" className="header-burger-menu">
                <svg viewBox="0 0 1024 1024" className="header-icon">
                  <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                </svg>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div data-role="MobileMenu" className="header-mobile-menu">
        <div className="header-top">
          <Link to="/" className="header-navlink1 Large">
            Soft UI Design System
          </Link>
          <div data-role="CloseMobileMenu" className="header-close-menu">
            <svg viewBox="0 0 1024 1024" className="header-icon2">
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </div>
        </div>
        <div className="header-mid">
          <div className="header-menu1">
            <Link to="/" className="header-navlink2 Large">
              Home
            </Link>
            <span className="header-text2 Large">Profile</span>
            <span className="header-text3 Large">Coming Soon</span>
          </div>
        </div>
        <div className="header-bot">
          <PrimaryPinkButton button="buy now"></PrimaryPinkButton>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {
  image_alt: 'image',
  rootClassName: '',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Header.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
}

export default Header
