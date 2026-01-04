import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import {
  MapPin,
  Book,
  Sparkles,
  AlertTriangle,
  ChevronRight,
  Leaf,
  Package,
} from 'lucide-react';
import { products } from '@/data/products';
import AddToCartButton from '@/components/product/AddToCartButton';
import ProductCard from '@/components/product/ProductCard';
import { formatPrice } from '@/lib/utils';
import Badge from '@/components/ui/Badge';

// Map slug to image path
const productImages: Record<string, string> = {
  'feuilles-badamier': '/images/badamier.jpg',
  'racines-vetiver': '/images/vetiver.jpg',
  'gousses-nere': '/images/nere.jpg',
  'rose-jericho': '/images/rose-jericho.jpg',
  'ditakh-tamarin-velours': '/images/ditakh.jpg',
  'ecorce-acore-odorant': '/images/acore.jpg',
};

interface ProductPageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return { title: 'Produit non trouvé' };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  // Produits similaires (même catégorie)
  const relatedProducts = products
    .filter(
      (p) =>
        p.slug !== product.slug &&
        p.categories.some((c) => product.categories.includes(c))
    )
    .slice(0, 3);

  return (
    <div className="bg-earth-50 min-h-screen">
      {/* Breadcrumb - caché sur mobile */}
      <div className="bg-white border-b border-earth-100 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center text-sm text-earth-500">
            <Link href="/" className="hover:text-sage-600">
              Accueil
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/shop" className="hover:text-sage-600">
              Boutique
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-earth-800 truncate max-w-[200px]">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12">
          {/* Image */}
          <div className="aspect-square bg-gradient-to-br from-earth-100 to-sage-100 rounded-xl sm:rounded-2xl overflow-hidden relative">
            {productImages[product.slug] ? (
              <Image
                src={productImages[product.slug]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <Leaf className="h-20 w-20 sm:h-32 sm:w-32 text-sage-300" />
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              {product.categories.slice(0, 3).map((cat) => (
                <Badge key={cat} variant="default" className="text-[10px] sm:text-xs">
                  {cat.replace(/-/g, ' ')}
                </Badge>
              ))}
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-earth-800 mb-1 sm:mb-2">
              {product.name}
            </h1>
            <p className="text-base sm:text-lg text-sage-600 mb-3 sm:mb-4">{product.subtitle}</p>

            <p className="text-sm sm:text-base text-earth-600 mb-4 sm:mb-6">{product.description}</p>

            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <span className="text-2xl sm:text-3xl font-bold text-sage-600">
                {formatPrice(product.price)}
              </span>
              <span className="text-sm sm:text-base text-earth-500 flex items-center gap-1">
                <Package className="h-4 w-4" />
                {product.weight}
              </span>
            </div>

            <AddToCartButton
              id={product.slug}
              type="product"
              name={product.name}
              price={product.price}
              weight={product.weight}
              image={productImages[product.slug]}
              className="w-full sm:w-auto mb-6 sm:mb-8"
            />

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl border border-earth-100">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="p-1.5 sm:p-2 bg-sage-100 rounded-lg">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-sage-600" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-earth-500">Origine</p>
                  <p className="text-xs sm:text-sm font-medium text-earth-800 line-clamp-1">
                    {product.origin.split(',')[0]}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="p-1.5 sm:p-2 bg-sage-100 rounded-lg">
                  <Package className="h-4 w-4 sm:h-5 sm:w-5 text-sage-600" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-earth-500">Contenu</p>
                  <p className="text-xs sm:text-sm font-medium text-earth-800">
                    {product.weight}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Origin & History */}
          <div className="bg-white rounded-lg sm:rounded-xl border border-earth-100 p-4 sm:p-6">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="p-1.5 sm:p-2 bg-gold-100 rounded-lg">
                <Book className="h-4 w-4 sm:h-5 sm:w-5 text-gold-600" />
              </div>
              <h2 className="text-base sm:text-lg font-semibold text-earth-800">
                Origine & Tradition
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-earth-500 mb-2">
              <strong>Origine :</strong> {product.origin}
            </p>
            <p className="text-xs sm:text-sm text-earth-600 leading-relaxed">
              {product.history}
            </p>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-lg sm:rounded-xl border border-earth-100 p-4 sm:p-6">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="p-1.5 sm:p-2 bg-sage-100 rounded-lg">
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-sage-600" />
              </div>
              <h2 className="text-base sm:text-lg font-semibold text-earth-800">
                Bienfaits Traditionnels
              </h2>
            </div>
            <ul className="space-y-1.5 sm:space-y-2">
              {product.benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-xs sm:text-sm text-earth-600"
                >
                  <Leaf className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-sage-500 mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Usage */}
          <div className="bg-white rounded-lg sm:rounded-xl border border-earth-100 p-4 sm:p-6">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="p-1.5 sm:p-2 bg-terracotta-100 rounded-lg">
                <Book className="h-4 w-4 sm:h-5 sm:w-5 text-terracotta-600" />
              </div>
              <h2 className="text-base sm:text-lg font-semibold text-earth-800">
                Modes d'Utilisation
              </h2>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {product.usages.map((usage, index) => (
                <div key={index}>
                  <h3 className="text-xs sm:text-sm font-semibold text-earth-700 mb-1">
                    {usage.method}
                  </h3>
                  <p className="text-xs sm:text-sm text-earth-600">{usage.instructions}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Precautions */}
        <div className="mt-4 sm:mt-6 bg-terracotta-50 border border-terracotta-200 rounded-lg sm:rounded-xl p-4 sm:p-6">
          <div className="flex items-start gap-2 sm:gap-3">
            <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-terracotta-600 mt-0.5 flex-shrink-0" />
            <div>
              <h2 className="font-semibold text-terracotta-800 mb-1.5 sm:mb-2 text-sm sm:text-base">
                Précautions & Responsabilité
              </h2>
              <p className="text-xs sm:text-sm text-terracotta-700 mb-2 sm:mb-3">
                {product.precautions}
              </p>
              <Link
                href="/legal/avertissement"
                className="text-xs sm:text-sm text-terracotta-600 hover:text-terracotta-800 underline"
              >
                Lire notre avertissement complet
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-white py-8 sm:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-earth-800 mb-4 sm:mb-8">
              Produits complémentaires
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
              {relatedProducts.map((related, index) => (
                <ProductCard
                  key={index}
                  id={related.slug}
                  name={related.name}
                  slug={related.slug}
                  subtitle={related.subtitle}
                  price={related.price}
                  weight={related.weight}
                  image={related.images[0]}
                  type="product"
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
