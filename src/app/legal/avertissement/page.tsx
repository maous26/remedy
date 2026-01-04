import { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, Info, Heart, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Avertissement & Usage Responsable',
  description:
    'Informations importantes sur l\'utilisation des produits RootsRemedy et le cadre légal.',
};

export default function AvertissementPage() {
  return (
    <div className="bg-earth-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-terracotta-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="h-8 w-8 text-terracotta-600" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-serif font-bold text-earth-800 mb-4">
            Avertissement & Usage Responsable
          </h1>
          <p className="text-earth-600 max-w-2xl mx-auto">
            Merci de lire attentivement ces informations avant d'utiliser nos
            produits.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Nature des produits */}
          <section className="bg-white rounded-xl border border-earth-100 p-6 lg:p-8">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-sage-100 rounded-lg flex-shrink-0">
                <Info className="h-5 w-5 text-sage-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-earth-800 mb-4">
                  Nature de nos produits
                </h2>
                <div className="prose prose-earth max-w-none">
                  <p>
                    Les produits commercialisés par RootsRemedy sont des{' '}
                    <strong>plantes traditionnelles brutes</strong>, non
                    transformées, destinées au bien-être général.
                  </p>
                  <p>
                    Ces plantes sont présentées selon leurs{' '}
                    <strong>usages traditionnels</strong> transmis de génération
                    en génération dans les cultures africaines et d'autres
                    régions du monde.
                  </p>
                  <p className="text-terracotta-700 font-medium">
                    Nos produits ne sont pas des médicaments. Ils ne sont pas
                    destinés à diagnostiquer, traiter, guérir ou prévenir une
                    quelconque maladie.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Informations culturelles */}
          <section className="bg-white rounded-xl border border-earth-100 p-6 lg:p-8">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-gold-100 rounded-lg flex-shrink-0">
                <Heart className="h-5 w-5 text-gold-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-earth-800 mb-4">
                  Informations culturelles et traditionnelles
                </h2>
                <div className="prose prose-earth max-w-none">
                  <p>
                    Les informations fournies sur notre site concernant les
                    bienfaits et usages des plantes sont basées sur :
                  </p>
                  <ul>
                    <li>Les savoirs traditionnels transmis oralement</li>
                    <li>
                      Les pratiques ancestrales des cultures africaines et
                      autres
                    </li>
                    <li>La littérature ethnobotanique disponible</li>
                  </ul>
                  <p>
                    Ces informations sont fournies à titre{' '}
                    <strong>culturel et informatif uniquement</strong>. Elles ne
                    constituent en aucun cas un avis médical ou une
                    recommandation thérapeutique.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Responsabilité de l'utilisateur */}
          <section className="bg-terracotta-50 rounded-xl border border-terracotta-200 p-6 lg:p-8">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-terracotta-200 rounded-lg flex-shrink-0">
                <Shield className="h-5 w-5 text-terracotta-700" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-terracotta-800 mb-4">
                  Responsabilité de l'utilisateur
                </h2>
                <div className="prose prose-earth max-w-none text-terracotta-700">
                  <p>En achetant et utilisant nos produits, vous reconnaissez :</p>
                  <ul>
                    <li>
                      Avoir pris connaissance du présent avertissement
                    </li>
                    <li>
                      Utiliser ces plantes sous votre entière responsabilité
                    </li>
                    <li>
                      Que ces produits ne remplacent pas une consultation
                      médicale
                    </li>
                    <li>
                      Devoir consulter un professionnel de santé en cas de doute
                      ou de symptômes persistants
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Précautions particulières */}
          <section className="bg-white rounded-xl border border-earth-100 p-6 lg:p-8">
            <h2 className="text-xl font-semibold text-earth-800 mb-4">
              Précautions particulières
            </h2>
            <div className="prose prose-earth max-w-none">
              <p>
                <strong>Consultez impérativement un professionnel de santé</strong>{' '}
                avant d'utiliser nos produits si vous êtes dans l'une des
                situations suivantes :
              </p>
              <ul>
                <li>Femme enceinte ou allaitante</li>
                <li>Personne suivant un traitement médical</li>
                <li>Personne souffrant d'une pathologie chronique</li>
                <li>Personne ayant des antécédents d'allergies</li>
                <li>Enfant ou personne âgée</li>
              </ul>
              <p>
                En cas de réaction indésirable, cessez immédiatement
                l'utilisation et consultez un médecin.
              </p>
            </div>
          </section>

          {/* Cadre légal */}
          <section className="bg-white rounded-xl border border-earth-100 p-6 lg:p-8">
            <h2 className="text-xl font-semibold text-earth-800 mb-4">
              Cadre légal
            </h2>
            <div className="prose prose-earth max-w-none">
              <p>
                RootsRemedy s'engage à respecter la réglementation européenne en
                vigueur concernant la commercialisation des plantes et
                compléments alimentaires.
              </p>
              <p>
                Conformément à la réglementation, nous ne faisons aucune
                allégation de santé non autorisée et présentons nos produits
                uniquement selon leurs usages traditionnels documentés.
              </p>
              <p>
                Les allégations présentes sur ce site respectent le règlement
                (CE) n° 1924/2006 concernant les allégations nutritionnelles et
                de santé.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-sage-50 rounded-xl border border-sage-200 p-6 lg:p-8 text-center">
            <h2 className="text-xl font-semibold text-sage-800 mb-4">
              Une question ?
            </h2>
            <p className="text-sage-700 mb-4">
              Si vous avez des questions concernant nos produits ou leur
              utilisation, n'hésitez pas à nous contacter.
            </p>
            <a
              href="mailto:contact@rootsremedy.com"
              className="text-sage-600 hover:text-sage-700 font-medium"
            >
              contact@rootsremedy.com
            </a>
          </section>
        </div>

        {/* Back link */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="text-sage-600 hover:text-sage-700 font-medium"
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
