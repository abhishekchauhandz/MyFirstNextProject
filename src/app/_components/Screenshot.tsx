'use client';
import { SetStateAction, useEffect, useState } from 'react';
import Modal from 'react-modal';
import '../../../public/assets/vendor/swiper/swiper-bundle.min.css';

const Screenshots = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

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

  const openModal = (imageSrc: SetStateAction<string>) => {
    setCurrentImage(imageSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage('');
  };

  return (
    <>
      <section id='screenshots' className='padd-section text-center'>
        <div className='container' data-aos='fade-up'>
          <div className='section-title text-center'>
            <h2>Gallery</h2>
            {/* <p className='separator'>Integer cursus bibendum augue ac cursus.</p> */}
          </div>

          <div className='screens-slider swiper'>
            <div className='swiper-wrapper align-items-center'>
              {['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '1.jpg', '2.jpg'].map((img, index) => (
                <div className='swiper-slide' key={index}>
                  <img
                    src={`/assets/img/screen/${img}`}
                    className='img-fluid'
                    alt=''
                    onClick={() => openModal(`/assets/img/screen/${img}`)}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              ))}
            </div>
            <div className='swiper-pagination'></div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex: 1000
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            maxHeight: '90vh',
            maxWidth: '90vw',
            padding: 0,
            border: 'none',
            background: 'none',
            overflow: 'hidden'
          }
        }}
      >
        <button
          onClick={closeModal}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'transparent',
            border: 'none',
            fontSize: '24px',
            color: '#fff',
            cursor: 'pointer',
            zIndex: 1001
          }}
        >
          &times;
        </button>
        <img src={currentImage} alt='' style={{ width: '100%', height: 'auto' }} />
      </Modal>
    </>
  );
};

export default Screenshots;
