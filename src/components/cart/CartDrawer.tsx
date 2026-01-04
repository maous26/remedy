'use client';

import { Fragment, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { formatPrice } from '@/lib/utils';
import Button from '@/components/ui/Button';
import { FREE_SHIPPING_THRESHOLD } from '@/lib/shipping';

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, getSubtotal } =
    useCartStore();

  const subtotal = getSubtotal();
  const remainingForFreeShipping = FREE_SHIPPING_THRESHOLD - subtotal;

  // Empêcher le scroll du body quand le drawer est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer - pleine largeur sur mobile */}
      <div className="absolute right-0 top-0 h-full w-full sm:max-w-md bg-white shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 sm:py-4 border-b border-earth-100 bg-white sticky top-0 z-10">
          <h2 className="text-base sm:text-lg font-semibold text-earth-800 flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Votre panier
            {items.length > 0 && (
              <span className="text-xs sm:text-sm font-normal text-earth-500">
                ({items.length} article{items.length > 1 ? 's' : ''})
              </span>
            )}
          </h2>
          <button
            onClick={closeCart}
            className="p-2 text-earth-400 hover:text-earth-600 hover:bg-earth-50 rounded-lg transition-colors"
            aria-label="Fermer le panier"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
              <ShoppingBag className="h-12 w-12 sm:h-16 sm:w-16 text-earth-200 mb-4" />
              <p className="text-earth-500 mb-4 text-sm sm:text-base">Votre panier est vide</p>
              <Button onClick={closeCart} variant="outline" className="w-full sm:w-auto">
                Continuer mes achats
              </Button>
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              {/* Free shipping progress */}
              {remainingForFreeShipping > 0 && (
                <div className="bg-sage-50 rounded-lg p-2.5 sm:p-3">
                  <p className="text-xs sm:text-sm text-sage-700">
                    Plus que{' '}
                    <span className="font-semibold">
                      {formatPrice(remainingForFreeShipping)}
                    </span>{' '}
                    pour la livraison gratuite !
                  </p>
                  <div className="mt-2 h-1.5 sm:h-2 bg-sage-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-sage-500 transition-all duration-300"
                      style={{
                        width: `${Math.min(
                          (subtotal / FREE_SHIPPING_THRESHOLD) * 100,
                          100
                        )}%`,
                      }}
                    />
                  </div>
                </div>
              )}

              {remainingForFreeShipping <= 0 && (
                <div className="bg-sage-50 rounded-lg p-2.5 sm:p-3">
                  <p className="text-xs sm:text-sm text-sage-700 font-medium">
                    ✓ Livraison gratuite !
                  </p>
                </div>
              )}

              {/* Items list */}
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 sm:gap-4 p-2.5 sm:p-3 bg-earth-50 rounded-lg"
                >
                  {/* Image */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-earth-200 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <ShoppingBag className="h-6 w-6 sm:h-8 sm:w-8 text-earth-400" />
                    )}
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-earth-800 text-xs sm:text-sm line-clamp-2">
                      {item.name}
                    </h3>
                    {item.weight && (
                      <p className="text-[10px] sm:text-xs text-earth-500">{item.weight}</p>
                    )}
                    <p className="text-sage-600 font-semibold mt-0.5 sm:mt-1 text-sm sm:text-base">
                      {formatPrice(item.price)}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-1.5 sm:gap-2 mt-1.5 sm:mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-1.5 sm:p-1 rounded bg-white border border-earth-200 hover:bg-earth-100 active:bg-earth-200 transition-colors"
                        aria-label="Diminuer la quantité"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-xs sm:text-sm font-medium w-5 sm:w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-1.5 sm:p-1 rounded bg-white border border-earth-200 hover:bg-earth-100 active:bg-earth-200 transition-colors"
                        aria-label="Augmenter la quantité"
                      >
                        <Plus className="h-3 w-3" />
                      </button>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto p-1.5 sm:p-1 text-terracotta-500 hover:text-terracotta-700 active:bg-terracotta-50 rounded transition-colors"
                        aria-label="Supprimer"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer - sticky sur mobile */}
        {items.length > 0 && (
          <div className="border-t border-earth-100 p-3 sm:p-4 space-y-3 sm:space-y-4 bg-white safe-area-bottom">
            <div className="flex justify-between items-center">
              <span className="text-sm sm:text-base text-earth-600">Sous-total</span>
              <span className="text-base sm:text-lg font-semibold text-earth-800">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="text-[10px] sm:text-xs text-earth-500">
              Frais de livraison calculés à la prochaine étape
            </p>
            <Link href="/cart" onClick={closeCart} className="block">
              <Button className="w-full" size="lg">
                Voir mon panier
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
