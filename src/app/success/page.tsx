'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle, Package, Mail, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import Button from '@/components/ui/Button';

export default function SuccessPage() {
  const { clearCart } = useCartStore();

  // Clear cart on successful purchase
  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="bg-earth-50 min-h-screen py-16">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-2xl border border-earth-100 p-8 lg:p-12 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-sage-600" />
          </div>

          <h1 className="text-3xl font-serif font-bold text-earth-800 mb-4">
            Merci pour votre commande !
          </h1>

          <p className="text-earth-600 mb-8 max-w-md mx-auto">
            Votre commande a été confirmée. Vous recevrez un email de
            confirmation avec les détails de votre commande et le suivi de
            livraison.
          </p>

          {/* Order info cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-earth-50 rounded-xl p-4">
              <Mail className="h-6 w-6 text-sage-600 mx-auto mb-2" />
              <h3 className="font-semibold text-earth-800 mb-1">
                Email de confirmation
              </h3>
              <p className="text-sm text-earth-500">
                Vérifiez votre boîte mail (et vos spams)
              </p>
            </div>
            <div className="bg-earth-50 rounded-xl p-4">
              <Package className="h-6 w-6 text-sage-600 mx-auto mb-2" />
              <h3 className="font-semibold text-earth-800 mb-1">
                Expédition sous 48h
              </h3>
              <p className="text-sm text-earth-500">
                Vous recevrez un email avec le suivi
              </p>
            </div>
          </div>

          {/* What's next */}
          <div className="bg-sage-50 rounded-xl p-6 mb-8 text-left">
            <h3 className="font-semibold text-sage-800 mb-3">
              Prochaines étapes
            </h3>
            <ul className="space-y-2 text-sm text-sage-700">
              <li className="flex items-start gap-2">
                <span className="font-bold">1.</span>
                <span>
                  Vous recevrez un email de confirmation avec le récapitulatif
                  de votre commande
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">2.</span>
                <span>
                  Votre colis sera préparé et expédié sous 48h ouvrées
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">3.</span>
                <span>
                  Vous recevrez un email avec le numéro de suivi Colissimo
                </span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop">
              <Button variant="outline">Continuer mes achats</Button>
            </Link>
            <Link href="/">
              <Button>
                Retour à l'accueil
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-earth-400 text-center mt-6">
          Les produits RootsRemedy sont des plantes traditionnelles destinées au
          bien-être. Consultez notre{' '}
          <Link
            href="/legal/avertissement"
            className="underline hover:text-earth-600"
          >
            page d'avertissement
          </Link>{' '}
          pour plus d'informations.
        </p>
      </div>
    </div>
  );
}
