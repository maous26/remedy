import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: {
    default: 'RootsRemedy - Plantes Traditionnelles pour le Bien-être Féminin',
    template: '%s | RootsRemedy',
  },
  description:
    'Découvrez les plantes traditionnelles africaines pour le bien-être féminin. Savoirs ancestraux transmis de génération en génération.',
  keywords: [
    'plantes traditionnelles',
    'bien-être féminin',
    'plantes africaines',
    'rituels ancestraux',
    'hygiène intime naturelle',
    'cycle menstruel',
  ],
  authors: [{ name: 'RootsRemedy' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'RootsRemedy',
    title: 'RootsRemedy - Plantes Traditionnelles pour le Bien-être Féminin',
    description:
      'Découvrez les plantes traditionnelles africaines pour le bien-être féminin.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
