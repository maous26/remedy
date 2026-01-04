import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Leaf, Users, Globe, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Notre Histoire',
  description:
    'Découvrez l\'histoire de RootsRemedy et notre engagement pour la valorisation des savoirs traditionnels africains.',
};

export default function AboutPage() {
  return (
    <div className="bg-earth-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-sage-600 to-sage-700 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Notre Histoire
            </h1>
            <p className="text-xl text-sage-100">
              Reconnecter les femmes modernes aux savoirs ancestraux de leurs
              grand-mères pour un bien-être authentique et naturel.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-sage-100 text-sage-700 rounded-full text-sm font-medium mb-4">
                Notre Mission
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-earth-800 mb-6">
                Valoriser les trésors de la pharmacopée traditionnelle africaine
              </h2>
              <div className="prose prose-earth">
                <p>
                  RootsRemedy est né d'une conviction profonde : les savoirs
                  traditionnels des femmes africaines, transmis de génération en
                  génération, méritent d'être préservés et partagés.
                </p>
                <p>
                  Pendant des siècles, les grand-mères, les guérisseuses et les
                  sages-femmes ont utilisé les plantes de leur environnement
                  pour accompagner les femmes dans toutes les étapes de leur
                  vie : puberté, fertilité, maternité, ménopause.
                </p>
                <p>
                  Aujourd'hui, nous souhaitons offrir à toutes les femmes la
                  possibilité de bénéficier de ces rituels ancestraux, dans le
                  respect des traditions et avec une approche moderne et
                  responsable.
                </p>
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-earth-100 to-sage-100 rounded-3xl flex items-center justify-center">
              <Image
                src="/logo3.png"
                alt="RootsRemedy"
                width={300}
                height={300}
                className="w-1/2 h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-earth-800 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-earth-600 max-w-2xl mx-auto">
              Chaque produit RootsRemedy incarne notre engagement pour
              l'authenticité, la qualité et le respect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Authenticité',
                description:
                  'Nous préservons les savoirs traditionnels dans leur forme la plus pure, sans les dénaturer.',
              },
              {
                icon: Leaf,
                title: 'Naturalité',
                description:
                  'Nos plantes sont 100% naturelles, non transformées, récoltées selon les pratiques traditionnelles.',
              },
              {
                icon: Users,
                title: 'Transmission',
                description:
                  'Nous valorisons les savoirs des guérisseuses traditionnelles et perpétuons leur héritage.',
              },
              {
                icon: Globe,
                title: 'Responsabilité',
                description:
                  'Nous nous engageons pour un approvisionnement éthique et durable, respectueux des communautés.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl border border-earth-100"
              >
                <div className="w-14 h-14 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-sage-600" />
                </div>
                <h3 className="font-semibold text-earth-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-earth-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-earth-800 mb-8 text-center">
              D'où venons-nous ?
            </h2>
            <div className="prose prose-earth prose-lg mx-auto">
              <p>
                L'histoire de RootsRemedy commence dans les villages d'Afrique
                de l'Ouest, où les femmes se transmettent depuis des générations
                les secrets des plantes médicinales.
              </p>
              <p>
                Badamier pour l'hygiène intime, vétiver pour le parfum et la
                détente, néré pour la vitalité, rose de Jéricho pour les
                moments de renouveau... Chaque plante a sa place dans le
                quotidien des femmes africaines.
              </p>
              <p>
                Face à la disparition progressive de ces savoirs, nous avons
                décidé de les documenter, les préserver et les partager avec
                toutes les femmes qui souhaitent retrouver une connexion
                authentique avec la nature et leur corps.
              </p>
              <p>
                Aujourd'hui, RootsRemedy propose une sélection rigoureuse de
                plantes traditionnelles, accompagnée des rituels et modes
                d'utilisation transmis par les anciennes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-earth-800 mb-4">
              Notre Engagement
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-sage-200">
              <h3 className="font-semibold text-earth-800 mb-3">
                Qualité & Traçabilité
              </h3>
              <p className="text-sm text-earth-600">
                Chaque lot de plantes est soigneusement sélectionné et tracé
                depuis son origine jusqu'à votre porte. Nous travaillons avec
                des récoltants de confiance qui respectent les pratiques
                traditionnelles.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-sage-200">
              <h3 className="font-semibold text-earth-800 mb-3">
                Information Transparente
              </h3>
              <p className="text-sm text-earth-600">
                Nous présentons nos produits selon leurs usages traditionnels
                documentés, sans sur-promesse. Notre approche est informative et
                culturelle, jamais médicale.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-sage-200">
              <h3 className="font-semibold text-earth-800 mb-3">
                Commerce Équitable
              </h3>
              <p className="text-sm text-earth-600">
                Nous rémunérons équitablement les communautés qui récoltent et
                préparent nos plantes, contribuant ainsi au développement local
                et à la préservation des savoirs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-earth-800 mb-4">
            Découvrez nos plantes traditionnelles
          </h2>
          <p className="text-earth-600 mb-8 max-w-2xl mx-auto">
            Commencez votre voyage vers un bien-être naturel et authentique
            avec les trésors de la pharmacopée africaine.
          </p>
          <Link href="/shop">
            <Button size="lg">
              Explorer la boutique
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
