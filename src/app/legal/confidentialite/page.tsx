import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité',
  description: 'Politique de confidentialité et protection des données personnelles RootsRemedy.',
};

export default function ConfidentialitePage() {
  return (
    <div className="bg-earth-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl lg:text-4xl font-serif font-bold text-earth-800 mb-8">
          Politique de Confidentialité
        </h1>

        <div className="bg-white rounded-xl border border-earth-100 p-6 lg:p-8 prose prose-earth max-w-none">
          <p className="text-sm text-earth-500 mb-8">
            Dernière mise à jour : Janvier 2026
          </p>

          <section className="mb-8">
            <h2>1. Introduction</h2>
            <p>
              RootsRemedy s'engage à protéger la vie privée de ses utilisateurs.
              Cette politique de confidentialité explique comment nous
              collectons, utilisons et protégeons vos données personnelles
              conformément au Règlement Général sur la Protection des Données
              (RGPD).
            </p>
          </section>

          <section className="mb-8">
            <h2>2. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données est :<br />
              <strong>RootsRemedy</strong><br />
              [Adresse]<br />
              Email : <a href="mailto:contact@rootsremedy.com">contact@rootsremedy.com</a>
            </p>
          </section>

          <section className="mb-8">
            <h2>3. Données collectées</h2>
            <p>Nous collectons les données suivantes :</p>
            <h3>3.1 Données fournies directement</h3>
            <ul>
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Adresse postale de livraison</li>
              <li>Numéro de téléphone (optionnel)</li>
            </ul>

            <h3>3.2 Données collectées automatiquement</h3>
            <ul>
              <li>Adresse IP</li>
              <li>Type de navigateur</li>
              <li>Pages visitées</li>
              <li>Date et heure de connexion</li>
            </ul>

            <h3>3.3 Données de paiement</h3>
            <p>
              Les données de paiement (numéro de carte bancaire) sont traitées
              directement par notre prestataire Stripe. RootsRemedy n'a pas
              accès à ces informations.
            </p>
          </section>

          <section className="mb-8">
            <h2>4. Finalités du traitement</h2>
            <p>Vos données sont utilisées pour :</p>
            <ul>
              <li>Traiter et expédier vos commandes</li>
              <li>Gérer votre compte client</li>
              <li>Vous contacter concernant votre commande</li>
              <li>Améliorer nos services et notre site</li>
              <li>Respecter nos obligations légales</li>
              <li>
                Vous envoyer des communications marketing (avec votre
                consentement)
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>5. Base légale du traitement</h2>
            <p>Nous traitons vos données sur les bases légales suivantes :</p>
            <ul>
              <li>
                <strong>Exécution du contrat :</strong> traitement des commandes
              </li>
              <li>
                <strong>Obligation légale :</strong> conservation des factures
              </li>
              <li>
                <strong>Intérêt légitime :</strong> amélioration de nos services
              </li>
              <li>
                <strong>Consentement :</strong> envoi de newsletters
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>6. Destinataires des données</h2>
            <p>Vos données peuvent être partagées avec :</p>
            <ul>
              <li>
                <strong>Stripe :</strong> traitement des paiements
              </li>
              <li>
                <strong>La Poste / Colissimo :</strong> livraison des colis
              </li>
              <li>
                <strong>Railway :</strong> hébergement du site
              </li>
            </ul>
            <p>
              Ces prestataires sont soumis à des obligations de confidentialité
              et ne peuvent utiliser vos données que dans le cadre de leurs
              prestations.
            </p>
          </section>

          <section className="mb-8">
            <h2>7. Durée de conservation</h2>
            <ul>
              <li>
                <strong>Données clients :</strong> 3 ans après la dernière
                commande
              </li>
              <li>
                <strong>Données de facturation :</strong> 10 ans (obligation
                légale)
              </li>
              <li>
                <strong>Cookies :</strong> 13 mois maximum
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>8. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul>
              <li>
                <strong>Droit d'accès :</strong> obtenir une copie de vos
                données
              </li>
              <li>
                <strong>Droit de rectification :</strong> corriger des données
                inexactes
              </li>
              <li>
                <strong>Droit à l'effacement :</strong> demander la suppression
                de vos données
              </li>
              <li>
                <strong>Droit à la portabilité :</strong> recevoir vos données
                dans un format structuré
              </li>
              <li>
                <strong>Droit d'opposition :</strong> vous opposer au traitement
              </li>
              <li>
                <strong>Droit de retrait du consentement :</strong> retirer
                votre consentement à tout moment
              </li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à :{' '}
              <a href="mailto:contact@rootsremedy.com">contact@rootsremedy.com</a>
            </p>
            <p>
              Vous pouvez également introduire une réclamation auprès de la CNIL
              (Commission Nationale de l'Informatique et des Libertés).
            </p>
          </section>

          <section className="mb-8">
            <h2>9. Cookies</h2>
            <p>Notre site utilise des cookies pour :</p>
            <ul>
              <li>
                <strong>Cookies essentiels :</strong> fonctionnement du panier
                et de la connexion
              </li>
              <li>
                <strong>Cookies analytiques :</strong> analyse du trafic (avec
                anonymisation)
              </li>
            </ul>
            <p>
              Vous pouvez configurer votre navigateur pour refuser les cookies.
              Cependant, certaines fonctionnalités du site pourraient ne plus
              fonctionner correctement.
            </p>
          </section>

          <section className="mb-8">
            <h2>10. Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité appropriées pour
              protéger vos données :
            </p>
            <ul>
              <li>Chiffrement SSL/TLS des communications</li>
              <li>Accès restreint aux données personnelles</li>
              <li>Sauvegardes régulières</li>
              <li>Mise à jour régulière de nos systèmes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>11. Transferts internationaux</h2>
            <p>
              Certains de nos prestataires (Stripe, Railway) peuvent traiter des
              données en dehors de l'Union Européenne. Ces transferts sont
              encadrés par des clauses contractuelles types approuvées par la
              Commission Européenne.
            </p>
          </section>

          <section>
            <h2>12. Modifications</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de
              confidentialité. Les modifications seront publiées sur cette page
              avec la date de mise à jour.
            </p>
          </section>
        </div>

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
