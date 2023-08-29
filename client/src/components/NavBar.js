import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className = "navbar">
            <NavLink to = "/" exact = "true">Home</NavLink>
            <NavLink to = "/boulder_problems" exact = "true">Boulder Problems</NavLink>
    </div>
  )
}

export default NavBar;