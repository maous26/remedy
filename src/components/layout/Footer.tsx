import Link from 'next/link';
import Image from 'next/image';
import { Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    boutique: [
      { name: 'Tous les produits', href: '/shop' },
      { name: 'Nos packs', href: '/shop?type=packs' },
      { name: 'Nouveautés', href: '/shop?sort=newest' },
    ],
    informations: [
      { name: 'Notre histoire', href: '/about' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Livraison', href: '/legal/cgv#livraison' },
    ],
    legal: [
      { name: 'Mentions légales', href: '/legal/mentions' },
      { name: 'CGV', href: '/legal/cgv' },
      { name: 'Confidentialité', href: '/legal/confidentialite' },
      { name: 'Usage responsable', href: '/legal/avertissement' },
    ],
  };

  return (
    <footer className="bg-earth-800 text-earth-100">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4 bg-white rounded-lg p-2">
              <Image
                src="/logo3.png"
                alt="RootsRemedy"
                width={130}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-earth-300 text-sm mb-4">
              Plantes traditionnelles africaines pour le bien-être féminin.
              Savoirs ancestraux, qualité moderne.
            </p>
            <div className="space-y-2 text-sm text-earth-300">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:contact@rootsremedy.com" className="hover:text-white">
                  contact@rootsremedy.com
                </a>
              </div>
            </div>
          </div>

          {/* Boutique */}
          <div>
            <h3 className="font-semibold text-white mb-4">Boutique</h3>
            <ul className="space-y-2">
              {footerLinks.boutique.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-earth-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h3 className="font-semibold text-white mb-4">Informations</h3>
            <ul className="space-y-2">
              {footerLinks.informations.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-earth-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Légal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-earth-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-earth-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-xs text-earth-400 text-center">
            Les produits RootsRemedy sont des plantes traditionnelles destinées au
            bien-être. Ils ne sont pas des médicaments et ne remplacent pas un avis
            médical. Consultez un professionnel de santé avant utilisation.{' '}
            <Link href="/legal/avertissement" className="underline hover:text-white">
              En savoir plus
            </Link>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-earth-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-xs text-earth-400 text-center">
            © {currentYear} RootsRemedy. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
