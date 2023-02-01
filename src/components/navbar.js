import React from 'react';
import { CustomLink } from './btn';
import { RouteLinks } from '../routes/route-links';
import { Link } from 'react-router-dom';

function Navbar() {
  const navdata = [
    {
      title: 'About',
      path: RouteLinks.about,
    },
    {
      title: 'Dashboard',
      path: RouteLinks.home,
    },
    {
      title: 'Contact',
      path: RouteLinks.contact,
    },
  ];

  const navAuthData = [
    {
      title: 'Login',
          path: RouteLinks.login,
      className:"btn-trans"
    },
    {
      title: 'Register',
        path: RouteLinks.signup,
      className:"btn-green"
    },
  ];
  return (
    <nav className='navbar navbar-expand-lg container'>
      <div className='container-fluid'>
        <Link to={RouteLinks.home}>
          <img src='/images/navIcon.svg' alt='nav-icon' />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto ms-auto mb-2 mb-lg-0'>
            {navdata.map((item, index) => {
              return (
                <li className='nav-item' key={index}>
                  <Link to={item.path} className='nav-link' key={index}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className='d-flex'>
            {navAuthData.map((item, index) => {
                return <CustomLink key={index} label={item.title} to={item.path} className={ item.className} />;
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
