import { Link, NavLink } from 'react-router-dom';
import Sticky from 'react-stickynode';

type CustomNavbarProps = {
  mClass?: string;
  nClass?: string;
  cClass?: string;
  slogo?: string;
  hbtnClass?: string;
};

export const CustomNavbar = ({
  mClass,
  nClass,
  cClass,
  slogo,
  hbtnClass,
}: CustomNavbarProps) => {
  return (
    <Sticky top={0} innerZ={9999} activeClass='navbar_fixed'>
      <header className='header_area'>
        <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
          <div className={`container ${cClass}`}>
            <Link className={`navbar-brand ${slogo}`} to='/'>
              <img src={require('../../img/logo2.png')} alt='' />
              <img src={require('../../img/logo.png')} alt='logo' />
            </Link>
            <button
              className='navbar-toggler collapsed'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='menu_toggle'>
                <span className='hamburger'>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <span className='hamburger-cross'>
                  <span></span>
                  <span></span>
                </span>
              </span>
            </button>

            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className={`navbar-nav menu ms-auto ${nClass}`}>
                <li className='nav-item'>
                  <NavLink title='Home' className='nav-link' to='/'>
                    Beranda
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink title='About' className='nav-link' to='/about'>
                    Tentang Trusman
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    title='Portofolio'
                    className='nav-link'
                    to='/contact'
                  >
                    Portofolio
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink title='Career' className='nav-link' to='/contact'>
                    Karir
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink title='Contact' className='nav-link' to='/contact'>
                    Hubungi Kami
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </Sticky>
  );
};
