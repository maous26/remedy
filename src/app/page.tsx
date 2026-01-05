import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Leaf, Heart, Shield, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/product/ProductCard';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';
import { products } from '@/data/products';
import { packs } from '@/data/packs';

export default function HomePage() {
  // Afficher les 3 premiers produits
  const featuredProducts = products.slice(0, 3);
  // Afficher les 3 premiers packs
  const featuredPacks = packs.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
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
                  src="/logo3.png"
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

      {/* Values Section */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              {
                icon: Leaf,
                title: '100% Naturel',
                description: 'Plantes brutes, sans transformation chimique',
              },
              {
                icon: Heart,
                title: 'Tradition Ancestrale',
                description: 'Savoirs transmis de génération en génération',
              },
              {
                icon: Shield,
                title: 'Qualité Contrôlée',
                description: 'Sélection rigoureuse et traçabilité',
              },
              {
                icon: Sparkles,
                title: 'Bien-être Holistique',
                description: 'Corps et esprit en harmonie',
              },
            ].map((value, index) => (
              <div key={index} className="text-center p-3 sm:p-0">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-sage-100 rounded-full mb-3 sm:mb-4">
                  <value.icon className="h-6 w-6 sm:h-7 sm:w-7 text-sage-600" />
                </div>
                <h3 className="font-semibold text-earth-800 mb-1 sm:mb-2 text-sm sm:text-base">
                  {value.title}
                </h3>
                <p className="text-xs sm:text-sm text-earth-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 sm:py-16 lg:py-24 bg-earth-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-earth-800 mb-3 sm:mb-4">
              Nos plantes traditionnelles
            </h2>
            <p className="text-sm sm:text-base text-earth-600 max-w-2xl mx-auto px-4">
              Chaque plante a été sélectionnée pour ses usages traditionnels
              reconnus dans les cultures africaines depuis des générations.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={index}
                id={product.slug}
                name={product.name}
                slug={product.slug}
                subtitle={product.subtitle}
                price={product.price}
                weight={product.weight}
                image={product.images[0]}
                categories={product.categories}
                type="product"
              />
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <Link href="/shop" className="inline-block w-full sm:w-auto px-4 sm:px-0">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Voir tous les produits
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Packs */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-terracotta-100 text-terracotta-700 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              Économisez avec nos packs
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-earth-800 mb-3 sm:mb-4">
              Nos rituels bien-être
            </h2>
            <p className="text-sm sm:text-base text-earth-600 max-w-2xl mx-auto px-4">
              Des associations synergiques de plantes, conçues selon les savoirs
              traditionnels pour répondre à vos besoins spécifiques.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
            {featuredPacks.map((pack, index) => (
              <ProductCard
                key={index}
                id={pack.slug}
                name={pack.name}
                slug={pack.slug}
                subtitle={pack.subtitle}
                price={pack.price}
                originalPrice={pack.originalPrice}
                weight={pack.duration}
                image={pack.images[0]}
                categories={pack.categories}
                type="pack"
              />
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <Link href="/shop?type=packs" className="inline-block w-full sm:w-auto px-4 sm:px-0">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Voir tous les packs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Trust Banner */}
      <section className="py-8 sm:py-12 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-serif font-bold mb-3 sm:mb-4">
              Livraison gratuite dès 60€ d'achat
            </h3>
            <p className="text-sage-100 mb-4 sm:mb-6 text-sm sm:text-base">
              Expédition sous 48h • Paiement sécurisé • Satisfait ou remboursé
            </p>
            <Link href="/shop" className="inline-block w-full sm:w-auto px-4 sm:px-0">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-sage-700 hover:bg-sage-50 w-full sm:w-auto"
              >
                Commencer mes achats
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-6 sm:py-8 bg-earth-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-4 sm:p-6 border border-earth-200">
            <h4 className="font-semibold text-earth-800 mb-2 text-sm sm:text-base">
              Information importante
            </h4>
            <p className="text-xs sm:text-sm text-earth-600 leading-relaxed">
              Les produits RootsRemedy sont des plantes traditionnelles
              destinées au bien-être. Les informations fournies sont basées sur
              les usages traditionnels et ne constituent pas un avis médical.
              Ces produits ne sont pas des médicaments et ne remplacent pas une
              consultation médicale.{' '}
              <Link
                href="/legal/avertissement"
                className="text-sage-600 hover:underline"
              >
                En savoir plus
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
