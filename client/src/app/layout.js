'use client';
import { Provider } from 'react-redux';
import store from '../redux/store'; // Adjust the path if necessary
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Provider store={store}>
          <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
          <header className="p-4 bg-gray-800 text-white flex items-center justify-between">
              <div className="flex items-center">
                {/* Company Logo */}
                <Link href="/">
                  <img src="https://static.wixstatic.com/media/cf83c9_72a1f255167a4937ab112637b060a6d4~mv2.png/v1/crop/x_32,y_0,w_320,h_300/fill/w_89,h_84,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cf83c9_72a1f255167a4937ab112637b060a6d4~mv2.png" alt="Company Logo" className="h-8 mr-4" />
                </Link>
                <nav>
                  <ul className="flex gap-4">
                    <li><Link href="/insights">Insights</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/case-studies">Case Studies</Link></li>
                    <li><Link href="/career">Careers</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/about">About us</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                  </ul>
                </nav>
              </div>
          </header>

            <main className="flex flex-col items-center justify-center ">
              {children}
            </main>
            <footer className="p-4 bg-gray-800 text-white text-center">
              © 2025 AAS One
            </footer>
          </div>
        </Provider>
      </body>
    </html>
  );
}
