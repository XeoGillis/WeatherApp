import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import './spinner.scss'

export default function Spinner() {
  return (
    <div className="spinner_component">
      <FontAwesomeIcon icon={faSun} />
    </div>
  )
}
