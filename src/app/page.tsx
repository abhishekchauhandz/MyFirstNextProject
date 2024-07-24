// app/page.tsx
'use client'

import { useEffect } from 'react';
import aos from '../../public/assets/vendor/aos/aos';

import Header from './_components/Header';
import Pricing from './_components/Pricing';
import About from './_components/About';
import GetStarted from './_components/GetStarted';
import HeroSection from './_components/Hero';
import Screenshot from './_components/Screenshot';
import Testimonials from './_components/Testimonials';
import Faq from './_components/Faq';
import NewsLetter from './_components/NewsLetter';
import Contact from './_components/Contact';
import Footer from './_components/Footer';
import BackToTop from './_components/BackToTop';
import HowFlaircastWorks from './_components/HowFlaircastWorks';
import WhatDoYouGet from './_components/WhatDoYouGet';
import Features from './_components/Features';


export default function Home () {
  useEffect (() => {
    aos.init();
  }, []);
  
  return (
    <>
    
      <Header />
      <HeroSection />
      <GetStarted />
      <About />
      <WhatDoYouGet />
      <Screenshot />
      <Testimonials />
      <HowFlaircastWorks />
      <Features />
      <Pricing />
      <Faq />
      <NewsLetter />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}
