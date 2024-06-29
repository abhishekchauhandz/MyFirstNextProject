(function() {
  "use strict";

  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener);
  };

  const toggleMobileNav = () => {
    const navbar = select('#navbar');
    navbar.classList.toggle('navbar-mobile');
    const toggleButton = select('.mobile-nav-toggle');
    toggleButton.classList.toggle('bi-list');
    toggleButton.classList.toggle('bi-x');
  };

  const toggleDropdown = (e, element) => {
    e.preventDefault();
    const dropdown = element.nextElementSibling;
    
    if (dropdown && dropdown.classList.contains('dropdown-active')) {
      dropdown.classList.remove('dropdown-active');
    } else {
      const activeDropdowns = select('.dropdown-active', true);
      activeDropdowns.forEach(active => active.classList.remove('dropdown-active'));
      if (dropdown) {
        dropdown.classList.add('dropdown-active');
      }
    }
  };

  if (typeof window !== 'undefined') {
    on('click', '.mobile-nav-toggle', toggleMobileNav);

    // Handle top-level dropdowns
    on('click', '.navbar .dropdown > a', function(e) {
      if (select('#navbar').classList.contains('navbar-mobile')) {
        toggleDropdown(e, this);
      }
    }, true);

    // Handle deeper nested dropdowns
    on('click', '.navbar .dropdown .dropdown > a', function(e) {
      if (select('#navbar').classList.contains('navbar-mobile')) {
        toggleDropdown(e, this);
      }
    }, true);

    const navbarlinksActive = () => {
      let position = window.scrollY + 200;
      let navbarlinks = select('#navbar .scrollto', true);
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return;
        let section = select(navbarlink.hash);
        if (!section) return;
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active');
        } else {
          navbarlink.classList.remove('active');
        }
      });
    };

    window.addEventListener('load', navbarlinksActive);
    onscroll(document, navbarlinksActive);
  }

})();
