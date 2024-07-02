import Script from 'next/script';

import "../../public/assets/css/style.css"; // global css
import '../../public/assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../public/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../../public/assets/vendor/glightbox/css/glightbox.min.css';
import '../../public/assets/vendor/swiper/swiper-bundle.min.css';
import '../../public/assets/vendor/aos/aos.css'; // import AOS CSS


export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Roboto:100,300,400,500,700|Philosopher:400,400i,700,700i' rel='stylesheet' />
      </head>
      <body>
        
        {children}
        
        <Script src="assets/vendor/aos/aos.js" />
        <Script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js" />
        <Script src="assets/vendor/glightbox/js/glightbox.min.js" />
        <Script src="assets/vendor/swiper/swiper-bundle.min.js" />
        {/* <Script src="assets/vendor/php-email-form/validate.js" /> */}

        <Script src="assets/js/main.js" />
      </body>
    </html>
  )
}
