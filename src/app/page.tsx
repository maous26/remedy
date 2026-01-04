import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Leaf, Heart, Shield, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/product/ProductCard';
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
          <div className="absolute top-20 left-10 w-72 h-72 bg-sage-300 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-300 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-sage-100 text-sage-700 rounded-full text-sm font-medium mb-6">
                Savoirs ancestraux, bien-être moderne
              </span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-earth-800 leading-tight mb-6">
                Les trésors de la{' '}
                <span className="text-sage-600">nature africaine</span> pour
                votre bien-être féminin
              </h1>
              <p className="text-lg text-earth-600 mb-8 max-w-xl">
                Découvrez des plantes traditionnelles transmises de génération
                en génération, sélectionnées avec soin pour accompagner votre
                bien-être au quotidien.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/shop">
                  <Button size="lg">
                    Découvrir la boutique
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg">
                    Notre histoire
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-sage-100 to-earth-100 rounded-3xl flex items-center justify-center">
                <Image
                  src="/logo3.png"
                  alt="RootsRemedy"
                  width={400}
                  height={400}
                  className="w-2/3 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
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
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-sage-100 rounded-full mb-4">
                  <value.icon className="h-7 w-7 text-sage-600" />
                </div>
                <h3 className="font-semibold text-earth-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-earth-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24 bg-earth-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-earth-800 mb-4">
              Nos plantes traditionnelles
            </h2>
            <p className="text-earth-600 max-w-2xl mx-auto">
              Chaque plante a été sélectionnée pour ses usages traditionnels
              reconnus dans les cultures africaines depuis des générations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={index}
                id={product.slug}
                name={product.name}
                slug={product.slug}
                subtitle={product.subtitle}
                price={product.price}
                weight={product.weight}
                categories={product.categories}
                type="product"
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/shop">
              <Button variant="outline" size="lg">
                Voir tous les produits
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Packs */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-terracotta-100 text-terracotta-700 rounded-full text-sm font-medium mb-4">
              Économisez avec nos packs
            </span>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-earth-800 mb-4">
              Nos rituels bien-être
            </h2>
            <p className="text-earth-600 max-w-2xl mx-auto">
              Des associations synergiques de plantes, conçues selon les savoirs
              traditionnels pour répondre à vos besoins spécifiques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                categories={pack.categories}
                type="pack"
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/shop?type=packs">
              <Button variant="outline" size="lg">
                Voir tous les packs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-12 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Livraison gratuite dès 60€ d'achat
            </h3>
            <p className="text-sage-100 mb-6">
              Expédition sous 48h • Paiement sécurisé • Satisfait ou remboursé
            </p>
            <Link href="/shop">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-sage-700 hover:bg-sage-50"
              >
                Commencer mes achats
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-earth-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-6 border border-earth-200">
            <h4 className="font-semibold text-earth-800 mb-2">
              Information importante
            </h4>
            <p className="text-sm text-earth-600">
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
