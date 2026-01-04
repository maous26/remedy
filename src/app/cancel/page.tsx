import Link from 'next/link';
import { XCircle, ArrowLeft, ShoppingBag } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function CancelPage() {
  return (
    <div className="bg-earth-50 min-h-screen py-16">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-2xl border border-earth-100 p-8 lg:p-12 text-center">
          {/* Cancel Icon */}
          <div className="w-20 h-20 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <XCircle className="h-10 w-10 text-earth-400" />
          </div>

          <h1 className="text-3xl font-serif font-bold text-earth-800 mb-4">
            Commande annulée
          </h1>

          <p className="text-earth-600 mb-8 max-w-md mx-auto">
            Votre commande a été annulée. Aucun paiement n'a été effectué.
            Votre panier a été conservé si vous souhaitez finaliser votre achat.
          </p>

          {/* Help section */}
          <div className="bg-earth-50 rounded-xl p-6 mb-8 text-left">
            <h3 className="font-semibold text-earth-800 mb-3">
              Besoin d'aide ?
            </h3>
            <p className="text-sm text-earth-600 mb-4">
              Si vous avez rencontré un problème lors du paiement ou si vous
              avez des questions, n'hésitez pas à nous contacter :
            </p>
            <a
              href="mailto:contact@rootsremedy.com"
              className="text-sage-600 hover:text-sage-700 text-sm font-medium"
            >
              contact@rootsremedy.com
            </a>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/cart">
              <Button>
                <ShoppingBag className="mr-2 h-4 w-4" />
                Retour au panier
              </Button>
            </Link>
            <Link href="/shop">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continuer mes achats
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
