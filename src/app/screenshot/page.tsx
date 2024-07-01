import { useEffect } from 'react';
import '../../../public/assets/vendor/swiper/swiper-bundle.min.css';
import '../../../public/assets/css/style.css';

const Screenshots = () => {
  useEffect(() => {
    const initSwiper = async () => {
      const { default: Swiper } = await import('swiper/bundle');
      new Swiper('.screens-slider', {
        speed: 400,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          575: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 20
          }
        }
      });
    };

    initSwiper();
  }, []);

  return (
    <>
      <section id="screenshots" className="padd-section text-center">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center">
            <h2>App Gallery</h2>
            <p className="separator">Integer cursus bibendum augue ac cursus .</p>
          </div>

          <div className="screens-slider swiper">
            <div className="swiper-wrapper align-items-center">
              <div className="swiper-slide">
                <img src="/assets/img/screen/1.jpg" className="img-fluid" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="/assets/img/screen/2.jpg" className="img-fluid" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="/assets/img/screen/3.jpg" className="img-fluid" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="/assets/img/screen/4.jpg" className="img-fluid" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="/assets/img/screen/5.jpg" className="img-fluid" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="/assets/img/screen/6.jpg" className="img-fluid" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="/assets/img/screen/7.jpg" className="img-fluid" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="/assets/img/screen/8.jpg" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
      {/* <Script src="/assets/js/main.js" strategy="lazyOnload" /> */}
    </>
  );
};

export default Screenshots;
