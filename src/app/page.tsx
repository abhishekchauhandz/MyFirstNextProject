'use client'
import { useEffect } from 'react';
import aos from '../../public/assets/vendor/aos/aos'
import Link from 'next/link';

import Header from './header/page';
import Pricing from './pricing/page';
import About from './about/page';
import Features from './features/page';
import GetStarted from './getStarted/page';
import HeroSection from './heroSection/page';
import Screenshot from './screenshot/page';
import TeamSection from './team/page';
import Testimonials from './testimonials/page';
import VideoSection from './video/page';
import Blog from './blog/page';
import NewsLetter from './newsLetter/page';
import Contact from './contact/page';
import Footer from './footer/page';


export default function Home () {
    useEffect (() => {
        aos.init();
    },[])
    return (
        <>
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
         <Link href='#' id='back-to-top' className='back-to-top d-flex align-items-center justify-content-center'>
            <i className='bi bi-arrow-up-short'></i>
         </Link>
        </>
    )
}