import React from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom'

const Header = () => {
  // let darkmode = true;

  // const headerStyle = {
  //     backgroundColor: darkmode ? "#000" : "#fff",
  //     color: darkmode ? "#fff" : "#000"
  // }

  return (
    <header>
      <div className='container'>
        <nav className='nav'>
          <a to='#' className='nav__brand'>
            REACT.JS
          </a>

          <ul className='nav__list'>
            <li className='nav__list--item'>
              <NavLink to='/' className='nav__list--item-link'>
                Home
              </NavLink>
            </li>
            <li className='nav__list--item'>
              <NavLink to='/users' className='nav__list--item-link'>
                Users
              </NavLink>
            </li>
            <li className='nav__list--item'>
              <NavLink to='/posts' className='nav__list--item-link'>
                Posts
              </NavLink>
            </li>
            <li className='nav__list--item'>
              <NavLink to='/todos' className='nav__list--item-link'>
                Todo
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
