import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import PrimaryPinkButton from './primary-pink-button'
import './shift-header.css'

const ShiftHeader = (props) => {
  return (
    <div className={`shift-header-container ${props.rootClassName} `}>
      <div data-role="Header" className="shift-header-header">
        <div data-role="MobileMenu" className="shift-header-mobile-menu">
          <div className="shift-header-top">
            <Link to="/" className="shift-header-navlink Large">
              Soft UI Design System
            </Link>
            <div
              data-role="CloseMobileMenu"
              className="shift-header-close-menu"
            >
              <svg viewBox="0 0 1024 1024" className="shift-header-icon">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="shift-header-mid">
            <div className="shift-header-menu">
              <Link to="/" className="shift-header-navlink1 Large">
                Home
              </Link>
              <span className="shift-header-text Large">Profile</span>
              <span className="shift-header-text1 Large">Coming Soon</span>
            </div>
          </div>
          <div className="shift-header-bot">
            <PrimaryPinkButton button="buy now"></PrimaryPinkButton>
          </div>
        </div>
      </div>
      <img
        alt={props.pastedImage_alt1}
        src={props.pastedImage_src1}
        className="shift-header-pasted-image"
      />
    </div>
  )
}

ShiftHeader.defaultProps = {
  image_alt1: 'image',
  pastedImage_alt: 'pastedImage',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  pastedImage_src1: '/external/pastedimage-eeip-200h-200h.png',
  image_alt: 'image',
  pastedImage_alt1: 'pastedImage',
  pastedImage_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/557844fe-6af7-4cd3-b394-e5c18c004a3f/56543ca0-5096-4aef-922c-f834e53d6e86?org_if_sml=137315',
  text1: 'Shift Technologies',
  link_text: 'https://example.com',
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text: 'Link',
  rootClassName: '',
}

ShiftHeader.propTypes = {
  image_alt1: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  image_src: PropTypes.string,
  pastedImage_src1: PropTypes.string,
  image_alt: PropTypes.string,
  pastedImage_alt1: PropTypes.string,
  pastedImage_src: PropTypes.string,
  text1: PropTypes.string,
  link_text: PropTypes.string,
  image_src1: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ShiftHeader
