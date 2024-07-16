'use client'

import Link from 'next/link';
import { useAuth } from '@/app/context/AuthContext';
import "../../../public/assets/css/style.css";

export default function Header() {
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
                <li><span>Welcome, {userName || 'User'}</span></li>
                <li><button onClick={logout} className="btn btn-primary px-4 py-2" style={{ fontSize: "0.7rem", backgroundColor: "#71c55d", marginLeft: "30px" }}>Logout</button></li>
              </>
            ) : (
              <>
                <li><Link href='/login'><button className="btn btn-primary px-4 py-2" style={{ fontSize: "0.7rem", backgroundColor: "#71c55d" }}>Login</button></Link></li>
                <li><Link href='/sign-up'><button className="btn btn-primary px-4 py-2" style={{ fontSize: "0.7rem", backgroundColor: "#71c55d" }}>Sign Up</button></Link></li>
              </>
            )}
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}
