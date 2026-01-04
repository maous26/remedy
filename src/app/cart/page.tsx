'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShoppingBag,
  Minus,
  Plus,
  Trash2,
  ArrowRight,
  ArrowLeft,
  Truck,
  Shield,
} from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { formatPrice } from '@/lib/utils';
import { FREE_SHIPPING_THRESHOLD, getAvailableCountries } from '@/lib/shipping';
import Button from '@/components/ui/Button';

export default function CartPage() {
  const { items, updateQuantity, removeItem, getSubtotal, clearCart } =
    useCartStore();
  const [selectedCountry, setSelectedCountry] = useState('FR');

  const subtotal = getSubtotal();
  const shippingCost = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 5.9;
  const total = subtotal + shippingCost;
  const remainingForFreeShipping = FREE_SHIPPING_THRESHOLD - subtotal;

  const countries = getAvailableCountries();

  if (items.length === 0) {
    return (
      <div className="bg-earth-50 min-h-screen py-8 sm:py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-xl sm:rounded-2xl border border-earth-100 p-6 sm:p-12">
            <ShoppingBag className="h-14 w-14 sm:h-20 sm:w-20 text-earth-200 mx-auto mb-4 sm:mb-6" />
            <h1 className="text-xl sm:text-2xl font-serif font-bold text-earth-800 mb-3 sm:mb-4">
              Votre panier est vide
            </h1>
            <p className="text-sm sm:text-base text-earth-500 mb-6 sm:mb-8">
              Découvrez nos plantes traditionnelles et commencez votre rituel
              bien-être.
            </p>
            <Link href="/shop" className="block sm:inline-block">
              <Button size="lg" className="w-full sm:w-auto">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Découvrir la boutique
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-earth-50 min-h-screen py-4 sm:py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-earth-800 mb-4 sm:mb-8">
          Mon panier
        </h1>

        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4 mb-6 lg:mb-0">
            {/* Free shipping banner */}
            {remainingForFreeShipping > 0 ? (
              <div className="bg-sage-50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-sage-200">
                <p className="text-xs sm:text-sm text-sage-700 font-medium mb-2">
                  Plus que{' '}
                  <span className="font-bold">
                    {formatPrice(remainingForFreeShipping)}
                  </span>{' '}
                  pour la livraison gratuite !
                </p>
                <div className="h-1.5 sm:h-2 bg-sage-200 rounded-full overflow-hidden">
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
            ) : (
              <div className="bg-sage-50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-sage-200 flex items-center gap-2 sm:gap-3">
                <Truck className="h-4 w-4 sm:h-5 sm:w-5 text-sage-600 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-sage-700 font-medium">
                  Livraison gratuite sur votre commande !
                </p>
              </div>
            )}

            {/* Items */}
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg sm:rounded-xl border border-earth-100 p-3 sm:p-4 flex gap-3 sm:gap-4"
              >
                {/* Image */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-earth-100 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <ShoppingBag className="h-8 w-8 sm:h-10 sm:w-10 text-earth-300" />
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start gap-2">
                    <div className="min-w-0">
                      <h3 className="font-semibold text-earth-800 text-sm sm:text-base line-clamp-2">
                        {item.name}
                      </h3>
                      {item.weight && (
                        <p className="text-xs sm:text-sm text-earth-500">{item.weight}</p>
                      )}
                      <p className="text-xs sm:text-sm text-sage-600 capitalize">
                        {item.type === 'pack' ? 'Pack Rituel' : 'Plante'}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1.5 sm:p-2 text-earth-400 hover:text-terracotta-500 transition-colors flex-shrink-0"
                      aria-label="Supprimer"
                    >
                      <Trash2 className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-3 sm:mt-4">
                    {/* Quantity */}
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-1.5 sm:p-2 rounded-lg border border-earth-200 hover:bg-earth-50 active:bg-earth-100 transition-colors"
                        aria-label="Diminuer"
                      >
                        <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
                      </button>
                      <span className="w-8 sm:w-10 text-center font-medium text-sm sm:text-base">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-1.5 sm:p-2 rounded-lg border border-earth-200 hover:bg-earth-50 active:bg-earth-100 transition-colors"
                        aria-label="Augmenter"
                      >
                        <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                      </button>
                    </div>

                    {/* Price */}
                    <p className="text-base sm:text-lg font-semibold text-sage-600">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Continue shopping */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 pt-4">
              <Link
                href="/shop"
                className="text-sage-600 hover:text-sage-700 flex items-center gap-2 text-sm sm:text-base order-2 sm:order-1"
              >
                <ArrowLeft className="h-4 w-4" />
                Continuer mes achats
              </Link>
              <button
                onClick={clearCart}
                className="text-earth-400 hover:text-terracotta-500 text-xs sm:text-sm order-1 sm:order-2"
              >
                Vider le panier
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg sm:rounded-xl border border-earth-100 p-4 sm:p-6 sticky top-20 lg:top-24">
              <h2 className="text-base sm:text-lg font-semibold text-earth-800 mb-3 sm:mb-4">
                Récapitulatif
              </h2>

              {/* Country selector */}
              <div className="mb-3 sm:mb-4">
                <label className="block text-xs sm:text-sm text-earth-600 mb-1.5 sm:mb-2">
                  Pays de livraison
                </label>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full px-3 py-2 text-sm sm:text-base border border-earth-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500"
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Totals */}
              <div className="space-y-2 sm:space-y-3 py-3 sm:py-4 border-t border-earth-100">
                <div className="flex justify-between text-earth-600 text-sm sm:text-base">
                  <span>Sous-total</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-earth-600 text-sm sm:text-base">
                  <span>Livraison</span>
                  <span>
                    {shippingCost === 0 ? (
                      <span className="text-sage-600">Gratuite</span>
                    ) : (
                      formatPrice(shippingCost)
                    )}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center py-3 sm:py-4 border-t border-earth-100">
                <span className="text-base sm:text-lg font-semibold text-earth-800">
                  Total
                </span>
                <span className="text-xl sm:text-2xl font-bold text-sage-600">
                  {formatPrice(total)}
                </span>
              </div>

              {/* Checkout button */}
              <form action="/api/checkout" method="POST">
                <input type="hidden" name="country" value={selectedCountry} />
                <input
                  type="hidden"
                  name="items"
                  value={JSON.stringify(items)}
                />
                <Button type="submit" className="w-full" size="lg">
                  Passer la commande
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>

              {/* Trust badges */}
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-earth-100">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-earth-500 mb-1.5 sm:mb-2">
                  <Shield className="h-4 w-4 flex-shrink-0" />
                  <span>Paiement 100% sécurisé</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-earth-500">
                  <Truck className="h-4 w-4 flex-shrink-0" />
                  <span>Expédition sous 48h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
