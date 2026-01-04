import { Suspense } from 'react';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';
import { packs } from '@/data/packs';
import ShopFilters from './ShopFilters';

export const metadata = {
  title: 'Boutique',
  description:
    'Découvrez notre sélection de plantes traditionnelles africaines pour le bien-être féminin.',
};

interface ShopPageProps {
  searchParams: { type?: string; category?: string };
}

export default function ShopPage({ searchParams }: ShopPageProps) {
  const showPacks = searchParams.type === 'packs';
  const showProducts = searchParams.type === 'products' || !searchParams.type;
  const category = searchParams.category;

  // Filtrer par catégorie si spécifiée
  const filteredProducts = category
    ? products.filter((p) => p.categories.includes(category))
    : products;

  const filteredPacks = category
    ? packs.filter((p) => p.categories.includes(category))
    : packs;

  // Collecter toutes les catégories uniques
  const allCategories = [
    ...new Set([
      ...products.flatMap((p) => p.categories),
      ...packs.flatMap((p) => p.categories),
    ]),
  ].sort();

  return (
    <div className="bg-earth-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-sage-600 to-sage-700 text-white py-6 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mb-1 sm:mb-2">
            {showPacks && !showProducts
              ? 'Nos Packs Rituels'
              : 'Notre Boutique'}
          </h1>
          <p className="text-sage-100 max-w-2xl text-sm sm:text-base">
            {showPacks && !showProducts
              ? 'Des associations synergiques de plantes pour des rituels complets de bien-être.'
              : 'Plantes traditionnelles africaines sélectionnées pour leur qualité et leurs usages ancestraux.'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1 mb-4 sm:mb-8 lg:mb-0">
            <Suspense fallback={<div className="text-sm text-earth-500">Chargement...</div>}>
              <ShopFilters
                categories={allCategories}
                currentType={searchParams.type}
                currentCategory={category}
              />
            </Suspense>
          </aside>

          {/* Products Grid */}
          <main className="lg:col-span-3">
            {/* Products Section */}
            {(showProducts || (!showPacks && !showProducts)) && (
              <section className="mb-8 sm:mb-12">
                {!showPacks && (
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-earth-800 mb-4 sm:mb-6">
                    Plantes individuelles
                  </h2>
                )}
                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                    {filteredProducts.map((product, index) => (
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
                ) : (
                  <p className="text-earth-500 text-center py-6 sm:py-8 text-sm sm:text-base">
                    Aucun produit trouvé dans cette catégorie.
                  </p>
                )}
              </section>
            )}

            {/* Packs Section */}
            {(showPacks || (!showPacks && !searchParams.type)) && (
              <section>
                {!searchParams.type && (
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-earth-800 mb-4 sm:mb-6">
                    Nos Packs Rituels
                  </h2>
                )}
                {filteredPacks.length > 0 ? (
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                    {filteredPacks.map((pack, index) => (
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
                ) : (
                  <p className="text-earth-500 text-center py-6 sm:py-8 text-sm sm:text-base">
                    Aucun pack trouvé dans cette catégorie.
                  </p>
                )}
              </section>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
