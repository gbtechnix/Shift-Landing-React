import React from 'react'

import PropTypes from 'prop-types'

import './enter-button.css'

const EnterButton = (props) => {
  return (
    <div className={`enter-button-container ${props.rootClassName} `}>
      <button className="enter-button-button ButtonSmall">
        {props.button}
      </button>
    </div>
  )
}

EnterButton.defaultProps = {
  rootClassName: '',
  button: 'Enter',
}

EnterButton.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default EnterButton
