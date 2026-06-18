import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { CartProvider } from '@/contexts/CartContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'The Foodies 10 – Authentic Vietnamese Restaurant in Hoc Mon',
  description:
    'The Foodies 10 serves authentic Vietnamese cuisine – Cơm Tấm, Bún Thịt Nướng, Bánh Mì – in Hoc Mon, Ho Chi Minh City. Open daily 6AM–9PM. Order online or reserve a table.',
  keywords: [
    'Vietnamese restaurant Hoc Mon',
    'Com Tam Hoc Mon',
    'Bun Thit Nuong Hoc Mon',
    'Banh Mi Hoc Mon',
    'Vietnamese Food Ho Chi Minh City',
    'The Foodies 10',
    'nhà hàng Hóc Môn',
    'cơm tấm Hóc Môn',
  ],
  openGraph: {
    title: 'The Foodies 10 – Authentic Vietnamese Restaurant',
    description: 'Feeding You Like Family. Authentic Vietnamese cuisine in Hoc Mon, HCMC.',
    url: 'https://thefoodies10.com',
    siteName: 'The Foodies 10',
    images: [{ url: '/foodie_logo.jpg', width: 800, height: 600 }],
    locale: 'vi_VN',
    type: 'website',
  },
  metadataBase: new URL('https://thefoodies10.com'),
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://thefoodies10.com' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Restaurant',
              name: 'The Foodies 10',
              description: 'Authentic Vietnamese restaurant in Hoc Mon, Ho Chi Minh City.',
              url: 'https://thefoodies10.com',
              telephone: '0792229040',
              email: 'huflit.thefoodies10@gmail.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '806 Le Quang Dao, National Highway 22',
                addressLocality: 'Tan Xuan Commune, Hoc Mon District',
                addressRegion: 'Ho Chi Minh City',
                addressCountry: 'VN',
              },
              openingHours: 'Mo-Su 06:00-21:00',
              servesCuisine: 'Vietnamese',
              priceRange: '₫',
            }),
          }}
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <LanguageProvider>
          <CartProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
