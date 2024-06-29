"use client";

import React, { useEffect } from 'react';
import '../../../public/assets/vendor/swiper/swiper-bundle.min.css';
import '../../../public/assets/css/style.css';

declare global {                   //declare global is special typescript syntax
  interface Window {                  //The Window interface represents the global window object in a web browser. 
    Swiper: any;                       //This interface includes properties and methods that are available on the window object,
  }                                     //such as window.location or window.alert.                  
}

const Screenshots = () => {
  useEffect(() => {
        if (typeof window !== 'undefined' && window.Swiper) {
            new window.Swiper('.screens-slider', {
              loop: true,  // Enable looping
              autoplay: {
                delay: 2500,  // Auto slide delay in ms
                disableOnInteraction: false,  // Continue autoplay after user interaction
              },
              spaceBetween: 30,
              slidesPerView: 4,
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
            //   navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            //   },
            });
          }
  }, []);

  return (
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
  );
};

export default Screenshots;
