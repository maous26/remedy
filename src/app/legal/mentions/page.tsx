import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: 'Mentions légales du site RootsRemedy.',
};

export default function MentionsLegalesPage() {
  return (
    <div className="bg-earth-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl lg:text-4xl font-serif font-bold text-earth-800 mb-8">
          Mentions Légales
        </h1>

        <div className="bg-white rounded-xl border border-earth-100 p-6 lg:p-8 prose prose-earth max-w-none">
          <section className="mb-8">
            <h2>1. Éditeur du site</h2>
            <p>
              Le site RootsRemedy est édité par :<br />
              <strong>[Nom de la société / Nom de l'entrepreneur]</strong><br />
              [Forme juridique]<br />
              Capital social : [Montant] €<br />
              Siège social : [Adresse complète]<br />
              RCS : [Ville] [Numéro]<br />
              SIRET : [Numéro SIRET]<br />
              TVA intracommunautaire : [Numéro TVA]
            </p>
            <p>
              Directeur de la publication : [Nom du directeur]<br />
              Contact : <a href="mailto:contact@rootsremedy.com">contact@rootsremedy.com</a>
            </p>
          </section>

          <section className="mb-8">
            <h2>2. Hébergement</h2>
            <p>
              Le site est hébergé par :<br />
              <strong>Railway Corporation</strong><br />
              548 Market St, PMB 78059<br />
              San Francisco, CA 94104<br />
              États-Unis<br />
              <a href="https://railway.app" target="_blank" rel="noopener noreferrer">
                https://railway.app
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2>3. Propriété intellectuelle</h2>
            <p>
              L'ensemble des éléments constituant le site RootsRemedy (textes,
              graphismes, logiciels, photographies, images, vidéos, sons, plans,
              logos, marques, etc.) ainsi que le site lui-même sont protégés par
              les lois françaises et internationales relatives à la propriété
              intellectuelle.
            </p>
            <p>
              Ces éléments sont la propriété exclusive de RootsRemedy. Toute
              reproduction, représentation, modification, publication, adaptation
              de tout ou partie des éléments du site, quel que soit le moyen ou
              le procédé utilisé, est interdite, sauf autorisation écrite
              préalable de RootsRemedy.
            </p>
          </section>

          <section className="mb-8">
            <h2>4. Données personnelles</h2>
            <p>
              Les informations recueillies sur ce site font l'objet d'un
              traitement informatique destiné à la gestion des commandes et à
              la relation client.
            </p>
            <p>
              Conformément au Règlement Général sur la Protection des Données
              (RGPD), vous disposez d'un droit d'accès, de rectification, de
              suppression et de portabilité des données vous concernant, ainsi
              que du droit de vous opposer au traitement pour motif légitime.
            </p>
            <p>
              Pour exercer ces droits, contactez-nous à :{' '}
              <a href="mailto:contact@rootsremedy.com">contact@rootsremedy.com</a>
            </p>
            <p>
              Pour plus d'informations, consultez notre{' '}
              <Link href="/legal/confidentialite">
                Politique de Confidentialité
              </Link>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2>5. Cookies</h2>
            <p>
              Le site RootsRemedy utilise des cookies pour améliorer l'expérience
              utilisateur et analyser le trafic. En naviguant sur notre site,
              vous acceptez l'utilisation de cookies conformément à notre
              politique de confidentialité.
            </p>
          </section>

          <section className="mb-8">
            <h2>6. Limitation de responsabilité</h2>
            <p>
              RootsRemedy s'efforce d'assurer l'exactitude et la mise à jour des
              informations diffusées sur son site. Toutefois, RootsRemedy ne peut
              garantir l'exactitude, la précision ou l'exhaustivité des
              informations mises à disposition.
            </p>
            <p>
              Les produits présentés sur ce site sont des plantes traditionnelles
              destinées au bien-être. Ils ne sont pas des médicaments et ne
              remplacent pas un avis médical. Consultez notre{' '}
              <Link href="/legal/avertissement">page d'avertissement</Link> pour
              plus d'informations.
            </p>
          </section>

          <section className="mb-8">
            <h2>7. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit français.
              En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </section>

          <section>
            <h2>8. Contact</h2>
            <p>
              Pour toute question concernant ces mentions légales, vous pouvez
              nous contacter à :{' '}
              <a href="mailto:contact@rootsremedy.com">contact@rootsremedy.com</a>
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
