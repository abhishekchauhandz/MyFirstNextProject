
export default function HeroSection() {
    return (
        <>
            <section id='hero'>
                <div className='hero-container' data-aos='fade-in'>
                    <div className="heading">
                        <div className="heading-notes">
                            <h1>Welcome to Flair Cast</h1>
                            <h2>Use your TV for Business</h2>
                        </div>
                        <div className="get-btn">
                            <a href='#get-started' className='btn-get-started scrollto'>Get Started</a>
                        </div>
                        <h3>Waiting Room Engagement Platform For Clinics</h3>
                    </div>
                    <div className="frontBg">
                        <img src='assets/img/TV.png' alt='Hero Imgs' data-aos='zoom-out' data-aos-delay='100' />
                    </div>                    {/* <div className='btns'>
                        <a href='#'><i className='fa fa-apple fa-3x'></i> App Store</a>
                        <a href='#'><i className='fa fa-play fa-3x'></i> Google Play</a>
                        <a href='#'><i className='fa fa-windows fa-3x'></i> windows</a>
                    </div> */}
                </div>
            </section>


        </>
    )
}