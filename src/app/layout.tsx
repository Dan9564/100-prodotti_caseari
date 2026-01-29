import type { Metadata } from 'next';
import { Playfair_Display, Lato } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-serif',
  display: 'swap',
});

const lato = Lato({ 
  weight: ['300', '400', '700', '900'], 
  subsets: ['latin'], 
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | 100% Prodotti Italiani',
    default: '100% Prodotti Italiani - Eccellenza Casearia',
  },
  description: 'Distributeurs laitiers et produits Italiens en France. Importazione diretta dalla Piana del Sele.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${playfair.variable} ${lato.variable}`}>
      <body className="antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
