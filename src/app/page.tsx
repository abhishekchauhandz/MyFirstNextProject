// app/page.tsx
'use client'

import { useEffect } from 'react';
import aos from '../../public/assets/vendor/aos/aos';
import Link from 'next/link';

import Header from './_components/Header';
import Pricing from './_components/Pricing';
import About from './_components/About';
import Features from './_components/Features';
import GetStarted from './_components/GetStarted';
import HeroSection from './_components/Hero';
import Screenshot from './_components/Screenshot';
import TeamSection from './_components/Team';
import Testimonials from './_components/Testimonials';
import VideoSection from './_components/Video';
import Blog from './_components/Blog';
import NewsLetter from './_components/NewsLetter';
import Contact from './_components/Contact';
import Footer from './_components/Footer';
import { AuthProvider } from '@/app/context/AuthContext';

export default function Home () {
  useEffect (() => {
    aos.init();
  }, []);
  
  return (
    <>
    <AuthProvider>
      <Header />
      <HeroSection />
      <GetStarted />
      <About />
      <Features />
      <Screenshot />
      <VideoSection />
      <TeamSection />
      <Testimonials />
      <Pricing />
      <Blog />
      <NewsLetter />
      <Contact />
      <Footer />
    </AuthProvider>
    <Link href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></Link>
    </>
  );
}
