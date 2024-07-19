'use client'
import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/app/context/AuthContext';

const Header: React.FC =() => {

  const { user, userName, logout } = useAuth()

  return (
    <header id='header' className='header fixed-top d-flex align-items-center'>
      <div className='container d-flex align-items-center justify-content-between'>
        <div id='logo'>
          <h1><a href='#'><span>Flair</span>Cast</a></h1>
        </div>
        <nav id='navbar' className='navbar'>
          <ul>
            <li><a className='nav-link scrollto active' href='#hero'>Home</a></li>
            <li><a className='nav-link scrollto' href='#about-us'>About</a></li>
            <li><a className='nav-link scrollto' href='#features'>Features</a></li>
            <li><a className='nav-link scrollto' href='#screenshots'>Screenshots</a></li>
            <li><a className='nav-link scrollto' href='#team'>Team</a></li>
            <li><a className='nav-link scrollto' href='#pricing'>Pricing</a></li>
            <li><a className='nav-link scrollto' href='#contact'>Contact</a></li>
            {user ? (
                            <>
                                <li className="dropdown"><a href="#"><span>Welcome, {userName || 'Abhishek'}</span> <i className="bi bi-chevron-down"></i></a>
                                    <ul>
                                        <li><a href="/dashboard">Go to dashboard</a></li>
                                        <li><a style={{cursor: 'pointer'}} onClick={logout}>Logout</a></li>
                                    </ul>
                                </li>
                            </>
                        ) : (
                            <>
                                <li><a className="nav-link scrollto" href="/admin">Login</a></li>

                            </>
                        )}
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}

export default Header;
