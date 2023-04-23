import P from 'prop-types'
import React from 'react'

import './styles.css'

export const Button = ({ children, onHandleClick, disabled }) => {
  return (
    <button disabled={disabled} onClick={onHandleClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: P.node.isRequired,
  onHandleClick: P.func.isRequired,
  disabled: P.bool,
}
