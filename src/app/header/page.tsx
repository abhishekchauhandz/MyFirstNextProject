"use client";
import { useEffect } from 'react';

export default function Header() {
  useEffect(() => {
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }

    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }

    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }

    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
      let position = window.scrollY + 200
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active')
        } else {
          navbarlink.classList.remove('active')
        }
      })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)

    const scrollto = (el) => {
      let header = select('#header')
      let offset = header.offsetHeight

      if (!header.classList.contains('header-scrolled')) {
        offset -= 16
      }

      let elementPos = select(el).offsetTop
      window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth'
      })
    }

    let selectHeader = select('#header')
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add('header-scrolled')
        } else {
          selectHeader.classList.remove('header-scrolled')
        }
      }
      window.addEventListener('load', headerScrolled)
      onscroll(document, headerScrolled)
    }

    let backtotop = select('.back-to-top')
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active')
        } else {
          backtotop.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
    }

    on('click', '.mobile-nav-toggle', function(e) {
      select('#navbar').classList.toggle('navbar-mobile')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
    })

    on('click', '.navbar .dropdown > a', function(e) {
      if (select('#navbar').classList.contains('navbar-mobile')) {
        e.preventDefault()
        this.nextElementSibling.classList.toggle('dropdown-active')
      }
    }, true)

    on('click', '.scrollto', function(e) {
      if (select(this.hash)) {
        e.preventDefault()

        let navbar = select('#navbar')
        if (navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile')
          let navbarToggle = select('.mobile-nav-toggle')
          navbarToggle.classList.toggle('bi-list')
          navbarToggle.classList.toggle('bi-x')
        }
        scrollto(this.hash)
      }
    }, true)

    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }

    // Cleanup function
    return () => {
      // Remove event listeners here if needed
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      <header id='header' className='header fixed-top d-flex align-items-center'>
        <div className='container d-flex align-items-center justify-content-between'>
          <div id='logo'>
            <h1><a href='index.html'><span>flair</span>Cast</a></h1>
          </div>

          <nav id='navbar' className='navbar'>
            <ul>
              <li><a className='nav-link scrollto active' href='#hero'>Home</a></li>
              <li><a className='nav-link scrollto' href='#about-us'>About</a></li>
              <li><a className='nav-link scrollto' href='#features'>Features</a></li>
              <li><a className='nav-link scrollto' href='#screenshots'>Screenshots</a></li>
              <li><a className='nav-link scrollto' href='#team'>Team</a></li>
              <li><a className='nav-link scrollto' href='#pricing'>Pricing</a></li>
              <li className='dropdown'><a href='#'><span>Drop Down</span> <i className='bi bi-chevron-down'></i></a>
                <ul>
                  <li><a href='#'>Drop Down 1</a></li>
                  <li className='dropdown'><a href='#'><span>Deep Drop Down</span> <i className='bi bi-chevron-right'></i></a>
                    <ul>
                      <li><a href='#'>Deep Drop Down 1</a></li>
                      <li><a href='#'>Deep Drop Down 2</a></li>
                      <li><a href='#'>Deep Drop Down 3</a></li>
                      <li><a href='#'>Deep Drop Down 4</a></li>
                      <li><a href='#'>Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href='#'>Drop Down 2</a></li>
                  <li><a href='#'>Drop Down 3</a></li>
                  <li><a href='#'>Drop Down 4</a></li>
                </ul>
              </li>
              <li><a className='nav-link scrollto' href='#contact'>Contact</a></li>
            </ul>
            <i className='bi bi-list mobile-nav-toggle'></i>
          </nav>
        </div>
      </header>
    </>
  )
}