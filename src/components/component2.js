import React from 'react'

import PropTypes from 'prop-types'

import './component2.css'

const Component2 = (props) => {
  return (
    <div className="component2-container">
      <img
        src="https://play.teleporthq.io/static/svg/default-img.svg"
        className="component2-image"
      />
    </div>
  )
}

Component2.defaultProps = {
  image_alt: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Component2.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default Component2
