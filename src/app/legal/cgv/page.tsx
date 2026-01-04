import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente',
  description: 'Conditions générales de vente du site RootsRemedy.',
};

export default function CGVPage() {
  return (
    <div className="bg-earth-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl lg:text-4xl font-serif font-bold text-earth-800 mb-8">
          Conditions Générales de Vente
        </h1>

        <div className="bg-white rounded-xl border border-earth-100 p-6 lg:p-8 prose prose-earth max-w-none">
          <p className="text-sm text-earth-500 mb-8">
            Dernière mise à jour : Janvier 2026
          </p>

          <section className="mb-8">
            <h2>Article 1 - Objet</h2>
            <p>
              Les présentes Conditions Générales de Vente (CGV) régissent les
              relations contractuelles entre RootsRemedy et ses clients dans le
              cadre de la vente à distance de plantes traditionnelles.
            </p>
            <p>
              Toute commande implique l'acceptation sans réserve des présentes CGV.
            </p>
          </section>

          <section className="mb-8">
            <h2>Article 2 - Produits</h2>
            <p>
              Les produits proposés à la vente sont des plantes traditionnelles
              brutes destinées au bien-être. Les photographies et descriptions
              des produits sont les plus fidèles possibles mais ne peuvent
              garantir une similitude parfaite avec le produit offert.
            </p>
            <p>
              <strong>Important :</strong> Ces produits ne sont pas des
              médicaments. Consultez notre{' '}
              <Link href="/legal/avertissement">page d'avertissement</Link> pour
              plus d'informations.
            </p>
          </section>

          <section className="mb-8">
            <h2>Article 3 - Prix</h2>
            <p>
              Les prix sont indiqués en euros (€), toutes taxes comprises (TTC).
              RootsRemedy se réserve le droit de modifier ses prix à tout moment.
              Les produits sont facturés sur la base des tarifs en vigueur au
              moment de la validation de la commande.
            </p>
          </section>

          <section className="mb-8">
            <h2>Article 4 - Commande</h2>
            <p>
              Pour passer commande, le client sélectionne les produits souhaités
              et les ajoute à son panier. Il valide ensuite sa commande en
              suivant le processus de paiement sécurisé.
            </p>
            <p>
              La commande est définitive après confirmation du paiement. Un
              email de confirmation est envoyé au client.
            </p>
            <p>
              RootsRemedy se réserve le droit de refuser toute commande pour
              motif légitime.
            </p>
          </section>

          <section className="mb-8">
            <h2>Article 5 - Paiement</h2>
            <p>
              Le paiement s'effectue par carte bancaire via notre prestataire
              sécurisé Stripe. Les cartes acceptées sont : Visa, Mastercard,
              American Express. Apple Pay et Google Pay sont également
              disponibles.
            </p>
            <p>
              Le paiement est débité au moment de la validation de la commande.
              La transaction est sécurisée par cryptage SSL.
            </p>
          </section>

          <section className="mb-8" id="livraison">
            <h2>Article 6 - Livraison</h2>
            <h3>6.1 Zones de livraison</h3>
            <p>
              RootsRemedy livre en France métropolitaine et dans les pays
              suivants : Belgique, Luxembourg, Suisse, Allemagne, Espagne,
              Italie, Portugal, Pays-Bas, Autriche.
            </p>

            <h3>6.2 Délais de livraison</h3>
            <p>
              Les commandes sont expédiées sous 48 heures ouvrées après
              confirmation du paiement. Les délais de livraison indicatifs sont :
            </p>
            <ul>
              <li>France métropolitaine : 3-5 jours ouvrés</li>
              <li>Europe : 5-10 jours ouvrés</li>
            </ul>

            <h3>6.3 Frais de livraison</h3>
            <p>
              Les frais de livraison sont calculés en fonction du pays de
              destination. <strong>La livraison est gratuite dès 60€ d'achat</strong>{' '}
              pour la France métropolitaine.
            </p>
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left">Destination</th>
                  <th className="text-right">Frais</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>France métropolitaine</td>
                  <td className="text-right">5,90 €</td>
                </tr>
                <tr>
                  <td>Belgique, Luxembourg, Pays-Bas</td>
                  <td className="text-right">7,90 €</td>
                </tr>
                <tr>
                  <td>Allemagne, Espagne, Italie, Autriche</td>
                  <td className="text-right">8,90 €</td>
                </tr>
                <tr>
                  <td>Portugal, Suisse</td>
                  <td className="text-right">9,90 €</td>
                </tr>
              </tbody>
            </table>

            <h3>6.4 Transporteur</h3>
            <p>
              Les colis sont expédiés via Colissimo (La Poste) avec suivi. Un
              numéro de suivi est communiqué par email dès l'expédition.
            </p>
          </section>

          <section className="mb-8">
            <h2>Article 7 - Droit de rétractation</h2>
            <p>
              Conformément à l'article L221-18 du Code de la consommation, vous
              disposez d'un délai de 14 jours à compter de la réception de votre
              commande pour exercer votre droit de rétractation, sans avoir à
              justifier de motifs ni à payer de pénalités.
            </p>
            <p>
              Pour exercer ce droit, contactez-nous à{' '}
              <a href="mailto:contact@rootsremedy.com">contact@rootsremedy.com</a>{' '}
              en indiquant votre numéro de commande.
            </p>
            <p>
              Les produits doivent être retournés dans leur état d'origine, non
              ouverts et non utilisés. Les frais de retour sont à la charge du
              client.
            </p>
            <p>
              Le remboursement sera effectué dans les 14 jours suivant la
              réception des produits retournés.
            </p>
          </section>

          <section className="mb-8">
            <h2>Article 8 - Garanties</h2>
            <p>
              Tous nos produits bénéficient de la garantie légale de conformité
              (articles L217-4 et suivants du Code de la consommation) et de la
              garantie contre les vices cachés (articles 1641 et suivants du
              Code civil).
            </p>
            <p>
              En cas de produit non conforme ou défectueux, contactez-nous dans
              les plus brefs délais.
            </p>
          </section>

          <section className="mb-8">
            <h2>Article 9 - Réclamations</h2>
            <p>
              Pour toute réclamation, contactez notre service client :{' '}
              <a href="mailto:contact@rootsremedy.com">contact@rootsremedy.com</a>
            </p>
            <p>
              En cas de litige non résolu à l'amiable, vous pouvez recourir
              gratuitement au service de médiation MEDICYS :{' '}
              <a
                href="https://www.medicys.fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.medicys.fr
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2>Article 10 - Protection des données</h2>
            <p>
              Les données personnelles collectées sont traitées conformément à
              notre{' '}
              <Link href="/legal/confidentialite">
                Politique de Confidentialité
              </Link>
              .
            </p>
          </section>

          <section>
            <h2>Article 11 - Droit applicable</h2>
            <p>
              Les présentes CGV sont soumises au droit français. En cas de
              litige, les tribunaux français seront seuls compétents.
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
