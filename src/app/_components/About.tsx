export default function About() {
  return (
    <>
      <section id='about-us' className='about-us padd-section'>
        <div className='container' data-aos='fade-up'>
          <div className='column-layout'>
            <div className='image-container'>
              <img src='assets/img/about-img.png' alt='About' data-aos='zoom-in' data-aos-delay='100' />
            </div>

            <div className='zones' data-aos='fade-up' data-aos-delay='100'>
              <div className='zone'>
                <div className='zone-title' style={{ color: '#fff',borderRadius: "6px", background: "red", display: "inline-block"}}>Zone 1</div>
                <div className='zone-content'>
                  <p>Continuously displays <b>“Top News-Sports-Entertainment”</b> Videos dynamically selected from <b>YouTube</b> branded channels popular in your region to <b>Entertain</b> your Patients or it can display your existing TV channels</p>
                  <p><span style={{color: "red", fontWeight: "600"}}>Zone 1</span> can also be used for <b>Top Videos</b> interspersed with <b>Your Own Videos</b> such as Doctor&apos;s Bios, Patient Testimonials, Hospital Services, Educational Programs, Relevant Content, etc.</p>
                </div>
              </div>
              <div className='zone'>
                <div className='zone-title' style={{ color: '#fff',borderRadius: "6px", background: "#5084bc", display: "inline-block" }}>Zone 2</div>
                <div className='zone-content'>
                  <p>Displays <b>Customized Slides</b> promoting your Services with Doctor&apos;s Bios, Service Specials, Testimonials, and more, to <b>Educate</b> your Patients about your Practice or Hospital System</p>
                  <p><span style={{color: "#3c99dc", fontWeight: "600"}}>Zone 2</span> can also be used to add <b>Seasonal Slides</b> to <b>Engage</b> your Patients in their healthcare.</p>
                </div>
              </div>
              <div className='zone'>
                <div className='zone-title' style={{ color: '#fff',borderRadius: "6px", background: "#c30010", display: "inline-block" }}>Zone 3</div>
                <div className='zone-content'>
                  <p>Displays <b>Current Region-specific News</b> in a text-based crawling format or it can be used to insert timely Patient Announcements via secure online local access over the web/phone.</p>
                </div>
              </div>
              <div className='zone'>
                <div className='zone-title' style={{ color: '#fff',borderRadius: "6px", background: "#08b454", display: "inline-block" }}>Zone 4</div>
                <div className='zone-content'>
                  <p>Displays date and time for your area.</p>
                </div>
              </div>
              <div className='zone'>
                <div className='zone-title' style={{ color: '#fff',borderRadius: "6px", background: "#3c99dc", display: "inline-block" }}>Zone 5</div>
                <div className='zone-content'>
                  <p>Displays <b>Your Logo</b> for that professional, customized, and <b>Branded</b> look and also helps create brand promotion and brand awareness.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
