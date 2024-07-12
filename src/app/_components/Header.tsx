'use client'

import React, { useEffect } from "react";
import Link from 'next/link';
import { useAuth } from '@/app/context/AuthContext';
import "../../../public/assets/css/style.css";

export default function Header() {
  const { user, userName, logout } = useAuth();

  useEffect(() => {
    const select = (selector: string, all = false): HTMLElement | HTMLElement[] | null => 
      all ? Array.from(document.querySelectorAll(selector)) as HTMLElement[] : document.querySelector(selector) as HTMLElement;

    const mobileNavToggleBtn = select(".mobile-nav-toggle") as HTMLElement;
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener("click", () => {
        const navbar = select("#navbar") as HTMLElement;
        if (navbar) {
          navbar.classList.toggle("navbar-mobile");
        }
        mobileNavToggleBtn.classList.toggle("bi-list");
        mobileNavToggleBtn.classList.toggle("bi-x");
      });
    }

    let navbarlinks = select('#navbar .scrollto', true) as HTMLElement[];
    const navbarlinksActive = () => {
      let position = window.scrollY + 200;
      navbarlinks.forEach(navbarlink => {
        const anchor = navbarlink as HTMLAnchorElement;
        if (!anchor.hash) return;
        const section = document.querySelector(anchor.hash) as HTMLElement;
        if (!section) return;
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          anchor.classList.add('active');
        } else {
          anchor.classList.remove('active');
        }
      });
    };

    window.addEventListener('load', navbarlinksActive);
    window.addEventListener('scroll', navbarlinksActive);

    return () => {
      window.removeEventListener('load', navbarlinksActive);
      window.removeEventListener('scroll', navbarlinksActive);
    };
  }, []);

  return (
    <header id='header' className='header fixed-top d-flex align-items-center'>
      <div className='container d-flex align-items-center justify-content-between'>
        <div id='logo'>
          <h1><a href='#'><span>flair</span>Cast</a></h1>
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
                <li><span style={{ marginLeft: "3rem", fontWeight: "500" }}>Welcome, {userName || 'User'}</span></li>
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
