import React from 'react'
import "./index.scss";

const Header = () => {

    // let darkmode = true;

    // const headerStyle = {
    //     backgroundColor: darkmode ? "#000" : "#fff",
    //     color: darkmode ? "#fff" : "#000"
    // }


  return (
    <header >
      <div className='container'>
        <nav className='nav'>
          <a href='#' className='nav__brand'>
            REACT.JS
          </a>
          <ul className='nav__list'>
            <li className='nav__list--item'>
              <a href='#' className='nav__list--item-link'>
                link-001
              </a>
            </li>
            <li className='nav__list--item'>
              <a href='#' className='nav__list--item-link'>
                link-002
              </a>
            </li>
            <li className='nav__list--item'>
              <a href='#' className='nav__list--item-link'>
                link-003
              </a>
            </li>
            <li className='nav__list--item'>
              <a href='#' className='nav__list--item-link'>
                link-004
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
