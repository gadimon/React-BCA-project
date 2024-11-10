import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>Business</h1>
      <div className='nav-link'>
        <NavLink to={"users/home"}>HOME</NavLink>
        <NavLink to={"users/about"}>ABOUT</NavLink>
        <NavLink to={"users/card"}>CARD</NavLink>
        <NavLink to={"/users"}>USERS</NavLink>
      </div>
    </header>
  )
}

export default Header
