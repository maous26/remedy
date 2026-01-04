export interface PackData {
  name: string;
  slug: string;
  subtitle: string;
  description: string;
  targetProblem: string;
  synergy: string;
  protocol: string;
  duration: string;
  price: number;
  originalPrice: number;
  images: string[];
  categories: string[];
  items: { productSlug: string; quantity: string }[];
}

export const packs: PackData[] = [
  {
    name: 'Pack Pureté Intime',
    slug: 'purete-intime',
    subtitle: 'Rituel Anti-Inconforts & Purification',
    description:
      "Un rituel complet pour accompagner le bien-être intime au quotidien. Ce pack associe trois plantes traditionnellement reconnues pour leurs propriétés purifiantes et apaisantes.",
    targetProblem:
      "Ce pack s'adresse aux femmes recherchant un accompagnement naturel pour leur hygiène intime, souhaitant retrouver confort et fraîcheur au quotidien.",
    synergy:
      "Le badamier et le vétiver agissent en synergie lors des bains de siège avec leurs propriétés purifiantes traditionnellement reconnues. Le ditakh, consommé en interne, accompagne la purification générale de l'organisme selon les savoirs ancestraux.",
    protocol: `Protocole recommandé (cure de 3 semaines) :
• Matin : 1 verre de décoction de ditakh
• Soir : Bain de siège en alternant badamier (jours pairs) et vétiver (jours impairs), 15-20 minutes
• Bien sécher après chaque bain`,
    duration: '3 semaines',
    price: 34.9,
    originalPrice: 43.7,
    images: ['/images/1.png'],
    categories: ['hygiene-intime', 'purification'],
    items: [
      { productSlug: 'feuilles-badamier', quantity: '50g' },
      { productSlug: 'racines-vetiver', quantity: '50g' },
      { productSlug: 'ditakh-tamarin-velours', quantity: '100g' },
    ],
  },
  {
    name: 'Pack Cycle Harmonieux',
    slug: 'cycle-harmonieux',
    subtitle: 'Rituel Confort Menstruel',
    description:
      "Un accompagnement traditionnel pour les femmes souhaitant vivre leur cycle avec plus de sérénité. Ce pack réunit des plantes ancestralement utilisées pour favoriser le confort durant cette période.",
    targetProblem:
      "Ce pack s'adresse aux femmes qui ressentent des inconforts durant leur cycle menstruel et recherchent un accompagnement naturel basé sur les savoirs traditionnels.",
    synergy:
      "L'acore est traditionnellement reconnu pour ses propriétés apaisantes sur les tensions musculaires. Le vétiver favorise la détente générale. Le badamier accompagne l'équilibre de la zone intime.",
    protocol: `Protocole recommandé :
• 3 jours avant les règles : Commencer la décoction d'acore (1 tasse matin et soir)
• Pendant les règles : Continuer l'acore + bain de siège au vétiver chaque soir
• Après les règles : Bain de siège au badamier pour accompagner la période post-menstruelle`,
    duration: 'À chaque cycle',
    price: 32.9,
    originalPrice: 41.7,
    images: ['/images/2.png'],
    categories: ['cycle-feminin', 'confort-menstruel'],
    items: [
      { productSlug: 'ecorce-acore-odorant', quantity: '100g' },
      { productSlug: 'racines-vetiver', quantity: '50g' },
      { productSlug: 'feuilles-badamier', quantity: '30g' },
    ],
  },
  {
    name: 'Pack Fertilité Sacrée',
    slug: 'fertilite-sacree',
    subtitle: 'Rituel de Préparation & Renouveau',
    description:
      "Un rituel ancestral pour les femmes qui souhaitent préparer leur corps et leur esprit à accueillir la vie. Ce pack réunit des plantes symboliques de renouveau et de vitalité.",
    targetProblem:
      "Ce pack accompagne les femmes en période de projet de conception, souhaitant préparer leur organisme de manière naturelle et se reconnecter aux rituels ancestraux de fertilité.",
    synergy:
      "La Rose de Jéricho symbolise le renouveau et accompagne les rituels de purification. Le néré, riche en fer naturel, soutient la vitalité selon les traditions. Le ditakh contribue à la purification générale de l'organisme.",
    protocol: `Protocole recommandé (cure de 1 mois, renouvelable) :
• Semaine 1-2 : Décoction de ditakh quotidienne (accompagnement détox)
• Semaine 3-4 : Décoction de néré quotidienne (soutien vitalité)
• Tout le mois : Bain de siège hebdomadaire avec l'eau de la Rose de Jéricho
• Important : Arrêter dès confirmation de grossesse`,
    duration: '1 mois (renouvelable)',
    price: 44.9,
    originalPrice: 47.7,
    images: ['/images/4.png'],
    categories: ['fertilite', 'preparation', 'renouveau'],
    items: [
      { productSlug: 'rose-jericho', quantity: '1 plante' },
      { productSlug: 'gousses-nere', quantity: '150g' },
      { productSlug: 'ditakh-tamarin-velours', quantity: '100g' },
    ],
  },
  {
    name: 'Pack Renaissance Post-Partum',
    slug: 'renaissance-post-partum',
    subtitle: 'Rituel de Récupération Traditionnelle',
    description:
      "Un accompagnement complet inspiré des traditions africaines du repos post-partum. Ce pack réunit quatre plantes pour soutenir les jeunes mamans dans leur période de récupération.",
    targetProblem:
      "Ce pack s'adresse aux femmes après l'accouchement, souhaitant être accompagnées dans leur récupération selon les traditions ancestrales africaines.",
    synergy:
      "L'acore accompagne traditionnellement la tonification. Le néré, riche en fer naturel, soutient la vitalité après l'accouchement. Le vétiver favorise la détente et apporte son parfum apaisant. Le badamier contribue à l'hygiène intime.",
    protocol: `Protocole recommandé (dès 1 semaine après accouchement) :
• Matin : 1 verre de décoction de néré (soutien vitalité)
• Journée : Tisane légère d'acore (1-2 tasses)
• Soir : Bain de siège au vétiver + badamier (mélangés), 20 minutes
• Durée traditionnelle : 40 jours (tradition africaine du repos post-partum)`,
    duration: '40 jours',
    price: 39.9,
    originalPrice: 56.6,
    images: ['/images/3.png'],
    categories: ['post-partum', 'recuperation', 'vitalite'],
    items: [
      { productSlug: 'ecorce-acore-odorant', quantity: '100g' },
      { productSlug: 'gousses-nere', quantity: '150g' },
      { productSlug: 'racines-vetiver', quantity: '100g' },
      { productSlug: 'feuilles-badamier', quantity: '30g' },
    ],
  },
  {
    name: 'Pack Séduction Naturelle',
    slug: 'seduction-naturelle',
    subtitle: 'Rituel Bien-être Intime & Parfum',
    description:
      "Un rituel quotidien pour cultiver son bien-être intime et sa confiance en soi. Ce duo traditionnel associe purification et parfum naturel pour un confort au quotidien.",
    targetProblem:
      "Ce pack s'adresse aux femmes souhaitant maintenir une hygiène intime naturelle au quotidien et appréciant les parfums naturels pour leur bien-être personnel.",
    synergy:
      "Le vétiver parfume naturellement et durablement avec ses notes boisées caractéristiques, tout en contribuant à l'équilibre de la zone intime. Le badamier assure une hygiène douce sans perturber l'équilibre naturel.",
    protocol: `Protocole recommandé :
• Toilette quotidienne : Rinçage à l'infusion légère de badamier
• 2-3x par semaine : Bain de siège au vétiver (15 minutes)
• Astuce traditionnelle : Placer quelques racines de vétiver dans le tiroir à sous-vêtements pour les parfumer naturellement`,
    duration: 'Usage quotidien',
    price: 29.9,
    originalPrice: 29.8,
    images: ['/images/5.png'],
    categories: ['hygiene-quotidienne', 'parfum-naturel', 'bien-etre'],
    items: [
      { productSlug: 'racines-vetiver', quantity: '100g' },
      { productSlug: 'feuilles-badamier', quantity: '30g' },
    ],
  },
  {
    name: 'Pack Détox Féminine',
    slug: 'detox-feminine',
    subtitle: 'Rituel de Purification Complète',
    description:
      "Une cure de renouveau pour les femmes souhaitant faire une pause régénérante. Ce pack accompagne la purification de l'organisme et de la zone intime.",
    targetProblem:
      "Ce pack convient aux femmes souhaitant réaliser une cure détox saisonnière, après une période de stress, ou simplement pour un moment de régénération personnelle.",
    synergy:
      "Le ditakh contribue à la purification générale de l'organisme. Le badamier nettoie la sphère intime. La Rose de Jéricho symbolise et accompagne ce rituel de renaissance globale.",
    protocol: `Protocole recommandé (cure de 2 semaines) :
• Jours 1-10 : Décoction de ditakh (2 verres/jour)
• Jours 1-14 : Bain de siège au badamier (soir, 15 minutes)
• Jour 1 et jour 14 : Rituel de la Rose de Jéricho (observer son ouverture, utiliser son eau en bain de siège)`,
    duration: '2 semaines',
    price: 37.9,
    originalPrice: 45.7,
    images: ['/images/6.png'],
    categories: ['detox', 'purification', 'renouveau'],
    items: [
      { productSlug: 'ditakh-tamarin-velours', quantity: '150g' },
      { productSlug: 'feuilles-badamier', quantity: '50g' },
      { productSlug: 'rose-jericho', quantity: '1 plante' },
    ],
  },
];
