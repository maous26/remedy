import type { Metadata } from 'next';
import ClientLayout from '@/components/layout/ClientLayout';
import './globals.css';

// Force dynamic rendering to avoid SSR issues with Zustand
export const dynamic = 'force-dynamic';

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
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Playfair+Display:wght@400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
