// src/app/layout.tsx
import Script from 'next/script';

import '../../public/assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../public/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../../public/assets/vendor/glightbox/css/glightbox.min.css';
import '../../public/assets/vendor/swiper/swiper-bundle.min.css';
import '../../public/assets/vendor/aos/aos.css'; // import AOS CSS
import "./globals.css";
import { AuthProvider } from './context/AuthContext';

export const metadata = {
  title: 'FlairCast',
  description: 'Generated by Next.js',
  icons:{
    icon: ['./favicon-32x32.png'],
    apple: [ './apple-touch-icon.png' ],
    android: [ './android-chrome-192x192.png' ],
    manifest: [ 
      './site.webmanifest'
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Roboto:100,300,400,500,700|Philosopher:400,400i,700,700i' rel='stylesheet' />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
        
        <Script src="assets/js/main.js" />
        <Script src="assets/vendor/aos/aos.js" />
        <Script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js" />
        <Script src="assets/vendor/swiper/swiper-bundle.min.js" />
      </body>
    </html>
  );
}
