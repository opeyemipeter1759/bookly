import React from 'react';
import { CustomBtn } from './btn'

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg container'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='*'>
          <img src='/images/navIcon.svg' alt="nav-icon"/>
        </a>
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
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='*'>
              About
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='*'>
              Dashboard
              </a>
            </li>
      
            <li className='nav-item'>
              <a className='nav-link' href='*'>Contact</a>
            </li>
          </ul>
          <div className='d-flex' >
                      <CustomBtn label='Login' style={{
                          border:'1px solid red'
                      }} />
                          <CustomBtn label='Sign Up' style={{
                          border:'1px solid blue'
                      }}/>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
