import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <button type="button" className="button">
        {props.button}
      </button>
    </div>
  )
}

AppComponent.defaultProps = {
  button: 'Enter',
}

AppComponent.propTypes = {
  button: PropTypes.string,
}

export default AppComponent
