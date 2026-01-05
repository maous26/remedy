'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useAdminStore } from '@/lib/adminStore';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const { siteConfig } = useAdminStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  const heroImage = mounted ? siteConfig.heroImage : '/logo3.png';

  return (
    <section className="relative bg-gradient-to-br from-earth-100 via-sage-50 to-earth-50 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-sage-300 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gold-300 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image en premier sur mobile */}
          <div className="relative order-first lg:order-last">
            <div className="relative aspect-square max-w-[320px] sm:max-w-[450px] mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={heroImage}
                alt="RootsRemedy"
                fill
                sizes="(max-width: 640px) 320px, 450px"
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="text-center lg:text-left">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-sage-100 text-sage-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Savoirs ancestraux, bien-être moderne
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-earth-800 leading-tight mb-4 sm:mb-6">
              Les trésors de la{' '}
              <span className="text-sage-600">nature africaine</span> pour
              votre bien-être féminin
            </h1>
            <p className="text-base sm:text-lg text-earth-600 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
              Découvrez des plantes traditionnelles transmises de génération
              en génération, sélectionnées avec soin pour accompagner votre
              bien-être au quotidien.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link href="/shop" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto">
                  Découvrir la boutique
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Notre histoire
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
