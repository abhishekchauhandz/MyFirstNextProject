import Pricing from "./pricing/page";
import About from "./about/page";
import Features from "./features/page";
import GetStarted from "./getStarted/page";
import HeroSection from "./heroSection/page";
import Screenshot from "./screenshot/page";
import TeamSection from "./team/page";
import Testimonials from "./testimonials/page";
import VideoSection from "./video/page";
import Blog from "./blog/page";
import NewsLetter from "./newsLetter/page";
import Contact from "./contact/page";

export default function Home () {
    return (
        <>
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
        </>
    )
}