const Header = () => {
  return (
    <>

      <header>
        <div className='container'>
          <nav className='nav'>
            <a href='#' className='nav__logo'>
              React.JS
            </a>
            <ul className='nav__ul'>
              <li className='nav__ul--list'>
                <a href='#' className='nav__ul--list-item'>
                  link-1
                </a>
              </li>
              <li className='nav__ul--list'>
                <a href='#' className='nav__ul--list-item'>
                  link-2
                </a>
              </li>
              <li className='nav__ul--list'>
                <a href='#' className='nav__ul--list-item'>
                  link-3
                </a>
              </li>
              <li className='nav__ul--list'>
                <a href='#' className='nav__ul--list-item'>
                  link-4
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}


export default Header;