'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, ChevronRight } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { useAdminStore } from '@/lib/adminStore';
import CartDrawer from '@/components/cart/CartDrawer';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openCart, getItemCount } = useCartStore();
  const { siteConfig } = useAdminStore();
  const itemCount = getItemCount();

  // Fermer le menu quand on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Empêcher le scroll quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Boutique', href: '/shop' },
    { name: 'Nos Packs', href: '/shop?type=packs' },
    { name: 'Notre Histoire', href: '/about' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-earth-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <Image
                src={siteConfig.logo}
                alt="RootsRemedy"
                width={180}
                height={72}
                className="h-12 sm:h-14 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-earth-600 hover:text-sage-600 transition-colors font-medium text-sm lg:text-base"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Cart & Menu Buttons */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={openCart}
                className="relative p-2 text-earth-600 hover:text-sage-600 transition-colors"
                aria-label="Ouvrir le panier"
              >
                <ShoppingBag className="h-5 w-5 sm:h-6 sm:w-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-terracotta-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount > 9 ? '9+' : itemCount}
                  </span>
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-earth-600 hover:bg-earth-50 rounded-lg transition-colors"
                aria-label="Menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute top-0 left-0 right-0 bg-white shadow-xl max-h-[80vh] overflow-y-auto">
            {/* Header du menu */}
            <div className="flex items-center justify-between p-4 border-b border-earth-100">
              <Image
                src={siteConfig.logo}
                alt="RootsRemedy"
                width={120}
                height={48}
                className="h-10 w-auto"
              />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-earth-600 hover:bg-earth-50 rounded-lg transition-colors"
                aria-label="Fermer le menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="p-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between py-4 px-4 text-earth-700 hover:bg-sage-50 hover:text-sage-700 rounded-lg transition-colors text-lg font-medium"
                >
                  {item.name}
                  <ChevronRight className="h-5 w-5 text-earth-400" />
                </Link>
              ))}
            </nav>

            {/* Contact rapide */}
            <div className="p-4 border-t border-earth-100 bg-earth-50">
              <p className="text-sm text-earth-500 text-center">
                Besoin d'aide ?{' '}
                <a
                  href="mailto:contact@rootsremedy.com"
                  className="text-sage-600 font-medium"
                >
                  Contactez-nous
                </a>
              </p>
            </div>
          </div>
        </div>
      )}

      <CartDrawer />
    </>
  );
}
