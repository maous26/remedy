'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, Plus } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { formatPrice } from '@/lib/utils';
import Badge from '@/components/ui/Badge';

interface ProductCardProps {
  id: string;
  name: string;
  slug: string;
  subtitle: string;
  price: number;
  weight: string;
  image?: string;
  categories?: string[];
  type?: 'product' | 'pack';
  originalPrice?: number;
}

// Map slug to image path
const productImages: Record<string, string> = {
  'feuilles-badamier': '/images/badamier.jpg',
  'racines-vetiver': '/images/vetiver.jpg',
  'gousses-nere': '/images/nere.jpg',
  'rose-jericho': '/images/rose-jericho.jpg',
  'ditakh-tamarin-velours': '/images/ditakh.jpg',
  'ecorce-acore-odorant': '/images/acore.jpg',
};

export default function ProductCard({
  id,
  name,
  slug,
  subtitle,
  price,
  weight,
  image,
  categories = [],
  type = 'product',
  originalPrice,
}: ProductCardProps) {
  const { addItem, openCart } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    addItem({
      id: `${type}-${id}`,
      type,
      [type === 'product' ? 'productId' : 'packId']: id,
      name,
      price,
      image: image || productImages[slug] || '',
      weight,
    });

    openCart();
  };

  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  const href = type === 'product' ? `/product/${slug}` : `/packs/${slug}`;
  const imageSrc = image || productImages[slug];

  return (
    <Link href={href} className="group block h-full">
      <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden border border-earth-100 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
        {/* Image */}
        <div className="relative aspect-square bg-earth-100 overflow-hidden">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <ShoppingBag className="h-10 w-10 sm:h-16 sm:w-16 text-earth-300 group-hover:scale-110 transition-transform" />
            </div>
          )}

          {/* Badges */}
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col gap-1 sm:gap-2 z-10">
            {type === 'pack' && <Badge variant="success" className="text-[10px] sm:text-xs px-1.5 py-0.5 sm:px-2 sm:py-1">Pack</Badge>}
            {discount > 0 && <Badge variant="promo" className="text-[10px] sm:text-xs px-1.5 py-0.5 sm:px-2 sm:py-1">-{discount}%</Badge>}
          </div>

          {/* Quick add button - toujours visible sur mobile */}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 p-1.5 sm:p-2 bg-white rounded-full shadow-md sm:opacity-0 sm:group-hover:opacity-100 transition-opacity hover:bg-sage-50 z-10 active:scale-95"
            aria-label="Ajouter au panier"
          >
            <Plus className="h-4 w-4 sm:h-5 sm:w-5 text-sage-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-2.5 sm:p-4 flex-1 flex flex-col">
          <h3 className="font-serif font-semibold text-earth-800 group-hover:text-sage-600 transition-colors text-xs sm:text-base leading-tight line-clamp-2">
            {name}
          </h3>
          <p className="text-[10px] sm:text-sm text-earth-500 mt-0.5 sm:mt-1 line-clamp-2 flex-1 hidden sm:block">
            {subtitle}
          </p>
          <p className="text-[10px] sm:text-xs text-earth-400 mt-0.5 sm:mt-1">{weight}</p>

          <div className="flex items-center justify-between mt-2 sm:mt-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2">
              <span className="text-sm sm:text-lg font-semibold text-sage-600">
                {formatPrice(price)}
              </span>
              {originalPrice && originalPrice > price && (
                <span className="text-[10px] sm:text-sm text-earth-400 line-through">
                  {formatPrice(originalPrice)}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
