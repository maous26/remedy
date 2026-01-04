'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import CartDrawer from '@/components/cart/CartDrawer';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openCart, getItemCount } = useCartStore();
  const itemCount = getItemCount();

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
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo3.png"
                alt="RootsRemedy"
                width={150}
                height={60}
                className="h-14 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-earth-600 hover:text-sage-600 transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Cart Button */}
            <div className="flex items-center gap-4">
              <button
                onClick={openCart}
                className="relative p-2 text-earth-600 hover:text-sage-600 transition-colors"
                aria-label="Ouvrir le panier"
              >
                <ShoppingBag className="h-6 w-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-terracotta-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-earth-600"
                aria-label="Menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-earth-100">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-earth-600 hover:text-sage-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </header>

      <CartDrawer />
    </>
  );
}
