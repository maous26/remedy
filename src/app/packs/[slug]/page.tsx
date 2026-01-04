import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  ChevronRight,
  Sparkles,
  AlertTriangle,
  Package,
  Clock,
  Target,
  Leaf,
  CheckCircle,
} from 'lucide-react';
import { packs } from '@/data/packs';
import { products } from '@/data/products';
import AddToCartButton from '@/components/product/AddToCartButton';
import ProductCard from '@/components/product/ProductCard';
import { formatPrice } from '@/lib/utils';
import Badge from '@/components/ui/Badge';

interface PackPageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: PackPageProps): Promise<Metadata> {
  const pack = packs.find((p) => p.slug === params.slug);

  if (!pack) {
    return { title: 'Pack non trouvé' };
  }

  return {
    title: pack.name,
    description: pack.description,
  };
}

export function generateStaticParams() {
  return packs.map((pack) => ({
    slug: pack.slug,
  }));
}

export default function PackPage({ params }: PackPageProps) {
  const pack = packs.find((p) => p.slug === params.slug);

  if (!pack) {
    notFound();
  }

  // Récupérer les produits du pack
  const packProducts = pack.items.map((item) => {
    const product = products.find((p) => p.slug === item.productSlug);
    return { ...item, product };
  });

  // Calculer l'économie
  const savings = pack.originalPrice - pack.price;
  const savingsPercent = Math.round((savings / pack.originalPrice) * 100);

  // Autres packs recommandés
  const relatedPacks = packs
    .filter(
      (p) =>
        p.slug !== pack.slug &&
        p.categories.some((c) => pack.categories.includes(c))
    )
    .slice(0, 3);

  return (
    <div className="bg-earth-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-earth-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center text-sm text-earth-500">
            <Link href="/" className="hover:text-sage-600">
              Accueil
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/shop?type=packs" className="hover:text-sage-600">
              Packs
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-earth-800">{pack.name}</span>
          </nav>
        </div>
      </div>

      {/* Pack Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image */}
          <div className="aspect-square bg-gradient-to-br from-sage-100 to-gold-100 rounded-2xl flex items-center justify-center relative">
            <Package className="h-32 w-32 text-sage-300" />
            {savingsPercent > 0 && (
              <div className="absolute top-4 right-4">
                <Badge variant="promo" className="text-base px-4 py-2">
                  -{savingsPercent}%
                </Badge>
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="success">Pack Rituel</Badge>
              {pack.categories.slice(0, 2).map((cat) => (
                <Badge key={cat} variant="default">
                  {cat.replace(/-/g, ' ')}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl lg:text-4xl font-serif font-bold text-earth-800 mb-2">
              {pack.name}
            </h1>
            <p className="text-lg text-sage-600 mb-4">{pack.subtitle}</p>

            <p className="text-earth-600 mb-6">{pack.description}</p>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl font-bold text-sage-600">
                {formatPrice(pack.price)}
              </span>
              {pack.originalPrice > pack.price && (
                <span className="text-xl text-earth-400 line-through">
                  {formatPrice(pack.originalPrice)}
                </span>
              )}
            </div>

            {savings > 0 && (
              <p className="text-terracotta-600 font-medium mb-6">
                Économisez {formatPrice(savings)} avec ce pack !
              </p>
            )}

            <div className="flex items-center gap-4 mb-6">
              <span className="text-earth-500 flex items-center gap-1">
                <Clock className="h-4 w-4" />
                Durée : {pack.duration}
              </span>
            </div>

            <AddToCartButton
              id={pack.slug}
              type="pack"
              name={pack.name}
              price={pack.price}
              weight={pack.duration}
              className="w-full sm:w-auto mb-8"
            />

            {/* Pack Contents */}
            <div className="bg-white rounded-xl border border-earth-100 p-4">
              <h3 className="font-semibold text-earth-800 mb-3">
                Ce pack contient :
              </h3>
              <ul className="space-y-2">
                {packProducts.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-sage-500" />
                    <span className="text-earth-700">
                      {item.product?.name || item.productSlug}
                    </span>
                    <span className="text-earth-400 text-sm">
                      ({item.quantity})
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Details Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Target Problem */}
          <div className="bg-white rounded-xl border border-earth-100 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-sage-100 rounded-lg">
                <Target className="h-5 w-5 text-sage-600" />
              </div>
              <h2 className="text-lg font-semibold text-earth-800">
                Pour qui ?
              </h2>
            </div>
            <p className="text-earth-600">{pack.targetProblem}</p>
          </div>

          {/* Synergy */}
          <div className="bg-white rounded-xl border border-earth-100 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gold-100 rounded-lg">
                <Sparkles className="h-5 w-5 text-gold-600" />
              </div>
              <h2 className="text-lg font-semibold text-earth-800">
                Synergie des plantes
              </h2>
            </div>
            <p className="text-earth-600">{pack.synergy}</p>
          </div>
        </div>

        {/* Protocol */}
        <div className="mt-6 bg-sage-50 rounded-xl border border-sage-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-sage-200 rounded-lg">
              <Leaf className="h-5 w-5 text-sage-700" />
            </div>
            <h2 className="text-lg font-semibold text-sage-800">
              Protocole recommandé
            </h2>
          </div>
          <div className="prose prose-sm prose-sage max-w-none">
            <pre className="whitespace-pre-wrap font-sans text-sage-700 bg-transparent p-0">
              {pack.protocol}
            </pre>
          </div>
        </div>

        {/* Precautions */}
        <div className="mt-6 bg-terracotta-50 border border-terracotta-200 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-terracotta-600 mt-0.5 flex-shrink-0" />
            <div>
              <h2 className="font-semibold text-terracotta-800 mb-2">
                Précautions & Responsabilité
              </h2>
              <p className="text-sm text-terracotta-700 mb-3">
                Ce pack est composé de plantes traditionnelles destinées au
                bien-être. Il ne constitue pas un traitement médical. Consultez
                un professionnel de santé avant utilisation, notamment en cas de
                grossesse, allaitement ou traitement médical en cours.
              </p>
              <Link
                href="/legal/avertissement"
                className="text-sm text-terracotta-600 hover:text-terracotta-800 underline"
              >
                Lire notre avertissement complet
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Products */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-earth-800 mb-8">
            Les plantes de ce pack
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {packProducts.map(
              (item, index) =>
                item.product && (
                  <ProductCard
                    key={index}
                    id={item.product.slug}
                    name={item.product.name}
                    slug={item.product.slug}
                    subtitle={item.product.subtitle}
                    price={item.product.price}
                    weight={item.quantity}
                    type="product"
                  />
                )
            )}
          </div>
        </div>
      </section>

      {/* Related Packs */}
      {relatedPacks.length > 0 && (
        <section className="bg-earth-50 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif font-bold text-earth-800 mb-8">
              Autres packs qui pourraient vous intéresser
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPacks.map((related, index) => (
                <ProductCard
                  key={index}
                  id={related.slug}
                  name={related.name}
                  slug={related.slug}
                  subtitle={related.subtitle}
                  price={related.price}
                  originalPrice={related.originalPrice}
                  weight={related.duration}
                  type="pack"
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
