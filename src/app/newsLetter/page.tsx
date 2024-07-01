export default function NewsLetter () {
 return <>
         <section id='newsletter' className='newsletter text-center'>
      <div className='overlay padd-section'>
        <div className='container' data-aos='zoom-in'>

          <div className='row justify-content-center'>
            <div className='col-md-9 col-lg-6'>
              <form className='d-flex' method='POST' action='#'>
                <input type='email' className='form-control ' placeholder='Email Adress' name='email'/>
                <button type='submit' className='btn btn-default'><i className='bi bi-location-arrow'></i>Subscribe</button>
              </form>
            </div>
          </div>

          <ul className='list-unstyled'>
            <li><a href='#'><i className='bi bi-facebook'></i></a></li>
            <li><a href='#'><i className='bi bi-twitter'></i></a></li>
            <li><a href='#'><i className='bi bi-instagram'></i></a></li>
            <li><a href='#'><i className='bi bi-linkedin'></i></a></li>
          </ul>

        </div>
      </div>
    </section>
        </>
}