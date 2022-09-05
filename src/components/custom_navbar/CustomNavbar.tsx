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
}: CustomNavbarProps) => {
  return (
    <Sticky top={0} innerZ={9999} activeClass='navbar_fixed'>
      <header className='header_area'>
        <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
          <div className={`container ${cClass}`}>
            <Link className={`navbar-brand ${slogo}`} to='/'>
              <img
                src={require('../../img/trusman_global_investama_w.png')}
                alt=''
                width={80}
                height={80}
              />
              <img
                src={require('../../img/trusman_global_investama.png')}
                alt='logo'
                width={80}
                height={80}
              />
            </Link>
            <button
              className='navbar-toggler collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
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
