'use client';

import dynamic from 'next/dynamic';

const Header = dynamic(() => import('./Header'), { ssr: false });
const Footer = dynamic(() => import('./Footer'), { ssr: false });
const PromoBanner = dynamic(() => import('../PromoBanner'), { ssr: false });

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PromoBanner />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
