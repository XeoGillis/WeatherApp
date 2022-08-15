import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

export default function Navbar() {
  return (
    <nav className='navbar-component'>
      <Link to='' >Today</Link>
      <Link to='' >Forecast</Link>
    </nav>
  )
}
