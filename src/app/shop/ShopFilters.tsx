'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

interface ShopFiltersProps {
  categories: string[];
  currentType?: string;
  currentCategory?: string;
}

const categoryLabels: Record<string, string> = {
  'hygiene-intime': 'Hygiène intime',
  purification: 'Purification',
  'bain-de-siege': 'Bain de siège',
  'bien-etre': 'Bien-être',
  'parfum-naturel': 'Parfum naturel',
  'cycle-feminin': 'Cycle féminin',
  vitalite: 'Vitalité',
  fortifiant: 'Fortifiant',
  'bien-etre-feminin': 'Bien-être féminin',
  rituel: 'Rituel',
  renouveau: 'Renouveau',
  detox: 'Détox',
  'bien-etre-urinaire': 'Bien-être urinaire',
  tonifiant: 'Tonifiant',
  'post-partum': 'Post-partum',
  'confort-menstruel': 'Confort menstruel',
  fertilite: 'Fertilité',
  preparation: 'Préparation',
  recuperation: 'Récupération',
  'hygiene-quotidienne': 'Hygiène quotidienne',
};

export default function ShopFilters({
  categories,
  currentType,
  currentCategory,
}: ShopFiltersProps) {
  const searchParams = useSearchParams();

  const buildUrl = (params: Record<string, string | undefined>) => {
    const newParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value) newParams.set(key, value);
    });
    return `/shop${newParams.toString() ? `?${newParams.toString()}` : ''}`;
  };

  return (
    <div className="bg-white rounded-xl border border-earth-100 p-6 sticky top-24">
      <h3 className="font-semibold text-earth-800 mb-4">Filtres</h3>

      {/* Type Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-earth-600 mb-3">Type</h4>
        <div className="space-y-2">
          <Link
            href={buildUrl({ category: currentCategory })}
            className={cn(
              'block px-3 py-2 rounded-lg text-sm transition-colors',
              !currentType
                ? 'bg-sage-100 text-sage-700 font-medium'
                : 'text-earth-600 hover:bg-earth-50'
            )}
          >
            Tous
          </Link>
          <Link
            href={buildUrl({ type: 'products', category: currentCategory })}
            className={cn(
              'block px-3 py-2 rounded-lg text-sm transition-colors',
              currentType === 'products'
                ? 'bg-sage-100 text-sage-700 font-medium'
                : 'text-earth-600 hover:bg-earth-50'
            )}
          >
            Plantes individuelles
          </Link>
          <Link
            href={buildUrl({ type: 'packs', category: currentCategory })}
            className={cn(
              'block px-3 py-2 rounded-lg text-sm transition-colors',
              currentType === 'packs'
                ? 'bg-sage-100 text-sage-700 font-medium'
                : 'text-earth-600 hover:bg-earth-50'
            )}
          >
            Packs rituels
          </Link>
        </div>
      </div>

      {/* Category Filter */}
      <div>
        <h4 className="text-sm font-medium text-earth-600 mb-3">Catégorie</h4>
        <div className="space-y-2 max-h-64 overflow-y-auto">
          <Link
            href={buildUrl({ type: currentType })}
            className={cn(
              'block px-3 py-2 rounded-lg text-sm transition-colors',
              !currentCategory
                ? 'bg-sage-100 text-sage-700 font-medium'
                : 'text-earth-600 hover:bg-earth-50'
            )}
          >
            Toutes
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={buildUrl({ type: currentType, category: cat })}
              className={cn(
                'block px-3 py-2 rounded-lg text-sm transition-colors',
                currentCategory === cat
                  ? 'bg-sage-100 text-sage-700 font-medium'
                  : 'text-earth-600 hover:bg-earth-50'
              )}
            >
              {categoryLabels[cat] || cat}
            </Link>
          ))}
        </div>
      </div>

      {/* Reset */}
      {(currentType || currentCategory) && (
        <Link
          href="/shop"
          className="block mt-6 text-center text-sm text-terracotta-600 hover:text-terracotta-700"
        >
          Réinitialiser les filtres
        </Link>
      )}
    </div>
  );
}
