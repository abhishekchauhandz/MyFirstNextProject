'use client'

import { useEffect } from 'react';
import Link from 'next/link';

const BackToTop = () => {
  useEffect(() => {
    const handleScroll = () => {
      const backToTopButton = document.querySelector('.back-to-top');
      if (window.scrollY > 100) {
        backToTopButton?.classList.add('active');
      } else {
        backToTopButton?.classList.remove('active');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Link href="#" className="back-to-top d-flex align-items-center justify-content-center" onClick={handleClick}>
      <i className="bi bi-arrow-up-short"></i>
    </Link>
  );
};

export default BackToTop;
