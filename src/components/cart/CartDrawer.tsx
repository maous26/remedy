'use client';

import { Fragment } from 'react';
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-earth-100">
          <h2 className="text-lg font-semibold text-earth-800 flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Votre panier
          </h2>
          <button
            onClick={closeCart}
            className="p-2 text-earth-400 hover:text-earth-600 transition-colors"
            aria-label="Fermer le panier"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="h-16 w-16 text-earth-200 mb-4" />
              <p className="text-earth-500 mb-4">Votre panier est vide</p>
              <Button onClick={closeCart} variant="outline">
                Continuer mes achats
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Free shipping progress */}
              {remainingForFreeShipping > 0 && (
                <div className="bg-sage-50 rounded-lg p-3">
                  <p className="text-sm text-sage-700">
                    Plus que{' '}
                    <span className="font-semibold">
                      {formatPrice(remainingForFreeShipping)}
                    </span>{' '}
                    pour la livraison gratuite !
                  </p>
                  <div className="mt-2 h-2 bg-sage-200 rounded-full overflow-hidden">
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
                <div className="bg-sage-50 rounded-lg p-3">
                  <p className="text-sm text-sage-700 font-medium">
                    Livraison gratuite !
                  </p>
                </div>
              )}

              {/* Items list */}
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3 bg-earth-50 rounded-lg"
                >
                  {/* Image placeholder */}
                  <div className="w-20 h-20 bg-earth-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ShoppingBag className="h-8 w-8 text-earth-400" />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-earth-800 text-sm truncate">
                      {item.name}
                    </h3>
                    {item.weight && (
                      <p className="text-xs text-earth-500">{item.weight}</p>
                    )}
                    <p className="text-sage-600 font-semibold mt-1">
                      {formatPrice(item.price)}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-1 rounded bg-white border border-earth-200 hover:bg-earth-100 transition-colors"
                        aria-label="Diminuer la quantité"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-1 rounded bg-white border border-earth-200 hover:bg-earth-100 transition-colors"
                        aria-label="Augmenter la quantité"
                      >
                        <Plus className="h-3 w-3" />
                      </button>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto p-1 text-terracotta-500 hover:text-terracotta-700 transition-colors"
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

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-earth-100 p-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-earth-600">Sous-total</span>
              <span className="text-lg font-semibold text-earth-800">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="text-xs text-earth-500">
              Frais de livraison calculés à la prochaine étape
            </p>
            <Link href="/cart" onClick={closeCart}>
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
