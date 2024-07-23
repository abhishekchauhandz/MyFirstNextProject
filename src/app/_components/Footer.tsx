'use client'

import React from 'react';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row d-flex justify-content-center align-items-center gap-4'>
          {/* Logo and Description */}
          <div className='col-md-12 col-lg-4 mb-4 mb-lg-0'>
            <div className='footer-logo'>
              <a className='navbar-brand' href='#'>FlairCast</a>
              <p>
                Our innovative on-screen technology lets you surround your standard lobby or waiting room TV content with a customizable frame.
              </p>
            </div>
          </div>

          {/* About Us */}
          <div className='col-sm-6 col-md-4 col-lg-2 mb-4 mb-md-0'>
            <div className='list-menu'>
              <h4>About Us</h4>
              <ul className='list-unstyled'>
                <li><a href='#about-us'>About Us</a></li>
                <li><a href='#features'>Features</a></li>
                <li><a href='#'>Live Streaming</a></li>
                <li><a href='#'>Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Support */}
          <div className='col-sm-6 col-md-4 col-lg-2 mb-4 mb-md-0'>
            <div className='list-menu'>
              <h4>Support</h4>
              <ul className='list-unstyled'>
                <li><a href='#faq'>FAQ</a></li>
                <li><a href='#'>Editor Help</a></li>
                <li><a href='#contact'>Contact Us</a></li>
                <li><a href='#'>Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Additional Links */}
          {/* <div className='col-md-4 col-lg-2 mb-4 mb-md-0'>
            <div className='list-menu'>
              <h4>Additional Links</h4>
              <ul className='list-unstyled'>
                <li><a href='#'>Careers</a></li>
                <li><a href='#'>Partners</a></li>
                <li><a href='#'>News</a></li>
                <li><a href='#'>Terms of Service</a></li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>

      <div className='copyrights'>
        <div className='container'>
          <p>&copy; {new Date().getFullYear()} FlairCast. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
