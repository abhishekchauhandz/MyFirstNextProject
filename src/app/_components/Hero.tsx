
export default function HeroSection() {
    return (
    <>
            <section id='hero'>
                <div className='hero-container' data-aos='fade-in'>
                    <h1>Welcome to flairCast</h1>
                    <h2>Elegant Bootstrap Template for Startups, Apps &amp; more...</h2>
                    <img src='assets/img/hero-img.png' alt='Hero Imgs' data-aos='zoom-out' data-aos-delay='100' />
                        <a href='#get-started' className='btn-get-started scrollto'>Get Started</a>
                        <div className='btns'>
                            <a href='#'><i className='fa fa-apple fa-3x'></i> App Store</a>
                            <a href='#'><i className='fa fa-play fa-3x'></i> Google Play</a>
                            <a href='#'><i className='fa fa-windows fa-3x'></i> windows</a>
                        </div>
                </div>
            </section>

            
            </>
            )
}