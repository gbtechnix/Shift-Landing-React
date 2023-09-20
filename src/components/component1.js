import React from 'react'

import PropTypes from 'prop-types'

import './component1.css'

const Component1 = (props) => {
  return (
    <div className="component1-container">
      <button type="button" className="component1-button button">
        {props.button}
      </button>
    </div>
  )
}

Component1.defaultProps = {
  button: 'Enter',
}

Component1.propTypes = {
  button: PropTypes.string,
}

export default Component1
