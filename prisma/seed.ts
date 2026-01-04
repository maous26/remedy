import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const products = [
  {
    name: 'Feuilles de Badamier',
    slug: 'feuilles-badamier',
    subtitle: 'Purificateur Intime Naturel',
    description:
      'Le badamier, aussi appelé "amandier tropical", est vénéré depuis des générations par les femmes africaines. Ses feuilles sont traditionnellement reconnues pour leurs propriétés purifiantes et apaisantes dans les rituels d\'hygiène intime.',
    origin: "Afrique de l'Ouest, Asie tropicale",
    history:
      "Les grands-mères transmettaient ce secret de beauté intime de mère en fille. Dans les villages côtiers d'Afrique de l'Ouest, les jeunes mariées recevaient traditionnellement un panier de ces feuilles pour leur hygiène et leur bien-être. Cette pratique ancestrale témoigne de la confiance accordée à cette plante depuis des générations.",
    benefits: [
      "Traditionnellement utilisé pour accompagner l'hygiène intime",
      'Reconnu dans les pratiques ancestrales pour ses propriétés purifiantes',
      'Contribue au confort de la zone intime',
      'Favorise une sensation de fraîcheur naturelle',
      'Utilisé traditionnellement pour apaiser les inconforts',
    ],
    usages: [
      {
        method: 'En bain de siège',
        instructions:
          "Faire bouillir 5-6 feuilles dans 2L d'eau pendant 15 minutes. Laisser tiédir jusqu'à une température confortable. Utiliser en bain de siège pendant 15-20 minutes.",
      },
      {
        method: 'En toilette intime',
        instructions:
          "Préparer une infusion plus légère avec 3 feuilles dans 1L d'eau. Laisser refroidir et utiliser pour un rinçage doux.",
      },
    ],
    precautions:
      "Usage externe uniquement. Ne pas utiliser pendant la grossesse sans avis médical. En cas d'irritation, cesser l'utilisation. Ce produit n'est pas un médicament et ne remplace pas un avis médical professionnel.",
    price: 12.9,
    weight: '50g (environ 20-25 feuilles)',
    stock: 100,
    images: ['/images/badamier.jpg'],
    categories: ['hygiene-intime', 'purification', 'bain-de-siege'],
  },
  {
    name: 'Racines de Vétiver',
    slug: 'racines-vetiver',
    subtitle: "L'Or Parfumé des Femmes",
    description:
      'Surnommé "l\'huile de la tranquillité" en Inde et "khus" en Afrique, le vétiver accompagne les rituels féminins depuis l\'Antiquité. Son parfum envoûtant, boisé et terreux, en fait un allié précieux reconnu par les traditions ancestrales.',
    origin: "Inde, cultivé en Afrique de l'Ouest (Sénégal, Mali, Côte d'Ivoire)",
    history:
      "Les femmes peules l'utilisaient pour parfumer leur intimité et cultiver leur bien-être. Au-delà de son parfum caractéristique, cette racine est un allié reconnu par les guérisseuses traditionnelles depuis des siècles. Les rituels au vétiver faisaient partie intégrante des cérémonies féminines.",
    benefits: [
      'Traditionnellement associé au soulagement des inconforts menstruels',
      'Reconnu pour ses propriétés parfumantes naturelles et durables',
      'Utilisé dans les pratiques ancestrales pour favoriser la détente',
      'Contribue à une sensation de bien-être intime',
      'Traditionnellement apprécié pour ses propriétés tonifiantes',
    ],
    usages: [
      {
        method: 'En bain de siège',
        instructions:
          "Placer une poignée de racines dans 2L d'eau bouillante. Laisser infuser 30 minutes. Utiliser tiède en bain de siège.",
      },
      {
        method: 'En fumigation traditionnelle',
        instructions:
          'Brûler quelques racines pour parfumer naturellement les tissus (tradition africaine).',
      },
      {
        method: 'En infusion',
        instructions:
          "Une petite pincée dans une tasse d'eau chaude. Laisser infuser 10 minutes.",
      },
    ],
    precautions:
      "Déconseillé aux femmes enceintes, particulièrement durant les premiers mois. Consulter un professionnel de santé en cas de doute. Ce produit n'est pas un médicament.",
    price: 16.9,
    weight: '100g (fagot traditionnel)',
    stock: 80,
    images: ['/images/vetiver.jpg'],
    categories: ['bien-etre', 'parfum-naturel', 'cycle-feminin'],
  },
  {
    name: 'Gousses de Néré',
    slug: 'gousses-nere',
    subtitle: 'Le Fortifiant Féminin Ancestral',
    description:
      'Le néré est un arbre sacré dans de nombreuses cultures africaines. Appelé "nététou" au Sénégal ou "dawadawa" au Nigeria, il nourrit et accompagne les communautés depuis des millénaires. Sa pulpe sucrée est traditionnellement appréciée pour ses propriétés fortifiantes.',
    origin: "Savanes d'Afrique de l'Ouest (du Sénégal au Cameroun)",
    history:
      'Les femmes dogon du Mali considèrent ses gousses comme un don des ancêtres pour accompagner le bien-être féminin. La pulpe jaune sucrée était traditionnellement donnée aux jeunes filles à la puberté pour les soutenir dans cette transition. Cette pratique perdure encore dans de nombreuses communautés.',
    benefits: [
      'Traditionnellement reconnu pour sa richesse en fer naturel',
      'Utilisé dans les pratiques ancestrales pour soutenir la vitalité',
      'Contribue au bien-être général selon les traditions africaines',
      'Traditionnellement consommé pour accompagner les périodes de fatigue',
      'Reconnu pour ses propriétés fortifiantes naturelles',
    ],
    usages: [
      {
        method: 'En décoction',
        instructions:
          "Faire bouillir 2-3 gousses dans 1L d'eau pendant 20 minutes. Filtrer et consommer 1 verre matin et soir.",
      },
      {
        method: 'Consommation directe',
        instructions: 'Mâcher directement la pulpe sucrée des gousses.',
      },
    ],
    precautions:
      "Peut interagir avec certains traitements médicaux. Consulter un professionnel de santé en cas de traitement en cours ou de grossesse. Ce produit n'est pas un médicament.",
    price: 14.9,
    weight: '200g (environ 8-10 gousses)',
    stock: 60,
    images: ['/images/nere.jpg'],
    categories: ['vitalite', 'fortifiant', 'bien-etre-feminin'],
  },
  {
    name: 'Rose de Jéricho',
    slug: 'rose-jericho',
    subtitle: 'La Fleur de la Renaissance Féminine',
    description:
      'Appelée "plante de la résurrection", cette merveille de la nature peut survivre des décennies complètement desséchée, puis revivre au contact de l\'eau. Cette symbolique puissante en a fait un symbole de renouveau et de renaissance.',
    origin: "Déserts du Moyen-Orient et d'Afrique du Nord",
    history:
      "Les sages-femmes traditionnelles utilisaient cette plante lors des moments importants de la vie féminine. On plaçait la plante dans l'eau et on observait sa renaissance comme symbole d'ouverture et de nouveau départ. Au Sénégal, elle est appelée \"khamsa\" et considérée comme une plante de bénédiction.",
    benefits: [
      'Symbole traditionnel de renouveau et de renaissance',
      'Utilisée dans les rituels ancestraux de purification',
      'Traditionnellement associée aux transitions de vie importantes',
      'Reconnue pour sa symbolique de régénération',
      'Utilisée dans les pratiques spirituelles féminines',
    ],
    usages: [
      {
        method: 'En rituel de renouveau',
        instructions:
          "Placer la plante dans un bol d'eau tiède. Observer sa renaissance sur plusieurs heures. L'eau peut être utilisée en petites quantités ou en bain de siège.",
      },
      {
        method: 'En bain de siège',
        instructions:
          "Après ouverture complète de la plante, utiliser l'eau pour un bain de siège purifiant.",
      },
    ],
    precautions:
      "Ne pas utiliser pendant la grossesse. L'eau ne se conserve pas plus de 24 heures. Ce produit est à usage traditionnel et rituel. Ce n'est pas un médicament.",
    price: 18.9,
    weight: '1 plante entière',
    stock: 40,
    images: ['/images/rose-jericho.jpg'],
    categories: ['rituel', 'purification', 'renouveau'],
  },
  {
    name: 'Ditakh (Tamarin Velours)',
    slug: 'ditakh-tamarin-velours',
    subtitle: 'Le Fruit Détox de la Femme Africaine',
    description:
      'Le ditakh, ou "velvet tamarind", est un trésor des forêts africaines. Son goût acidulé-sucré unique en fait une friandise populaire, mais les femmes connaissent surtout ses vertus traditionnelles pour le bien-être général.',
    origin: "Forêts d'Afrique de l'Ouest (Sénégal, Guinée, Côte d'Ivoire)",
    history:
      "Les guérisseuses casamançaises recommandaient traditionnellement le ditakh aux femmes recherchant un bien-être urinaire. Sa richesse naturelle en vitamine C et antioxydants en fait un fruit apprécié pour ses propriétés purifiantes selon les savoirs traditionnels.",
    benefits: [
      'Traditionnellement utilisé pour accompagner le bien-être urinaire',
      'Reconnu pour sa richesse naturelle en vitamine C',
      'Contribue à une sensation de purification selon les traditions',
      'Naturellement riche en antioxydants',
      'Traditionnellement apprécié pour soutenir le confort digestif',
    ],
    usages: [
      {
        method: 'En décoction',
        instructions:
          "Faire bouillir 4-5 gousses dans 1L d'eau pendant 15 minutes. Boire 2-3 verres par jour.",
      },
      {
        method: 'Consommation directe',
        instructions: 'Sucer directement la pulpe acidulée des gousses.',
      },
      {
        method: 'En bain de siège',
        instructions:
          'Préparer une décoction concentrée pour un usage en bain de siège purifiant.',
      },
    ],
    precautions:
      "L'acidité peut irriter les estomacs sensibles. À prendre de préférence après les repas. Consulter un professionnel de santé en cas de doute. Ce produit n'est pas un médicament.",
    price: 13.9,
    weight: '150g (environ 15-20 gousses)',
    stock: 70,
    images: ['/images/ditakh.jpg'],
    categories: ['detox', 'bien-etre-urinaire', 'purification'],
  },
  {
    name: "Écorce d'Acore Odorant",
    slug: 'ecorce-acore-odorant',
    subtitle: 'Le Tonique Utérin Traditionnel',
    description:
      "L'acore odorant, aussi appelé \"roseau aromatique\", était déjà mentionné dans les papyrus égyptiens comme plante sacrée. Son parfum caractéristique, entre le gingembre et la cannelle, en faisait un ingrédient apprécié dans les rituels féminins.",
    origin: "Zones humides d'Asie et d'Afrique",
    history:
      "Les femmes utilisaient traditionnellement l'acore pour accompagner leur bien-être durant les moments importants de leur vie. Son parfum distinctif en faisait également un élément de préparation personnelle apprécié dans de nombreuses cultures anciennes.",
    benefits: [
      'Traditionnellement associé au soulagement des inconforts menstruels',
      'Reconnu dans les pratiques ancestrales pour ses propriétés tonifiantes',
      'Utilisé traditionnellement pour accompagner la récupération post-natale',
      'Contribue au bien-être de la zone pelvienne selon les traditions',
      'Traditionnellement apprécié pour ses propriétés apaisantes',
    ],
    usages: [
      {
        method: 'En décoction',
        instructions:
          "Faire bouillir 2-3 morceaux d'écorce dans 500ml d'eau pendant 10 minutes. Boire 1 tasse 2 fois par jour durant la période menstruelle.",
      },
      {
        method: 'En bain de siège',
        instructions:
          "Préparer une décoction et l'ajouter à l'eau du bain pour un effet tonifiant traditionnel.",
      },
    ],
    precautions:
      "STRICTEMENT INTERDIT pendant la grossesse. Ne pas dépasser les doses recommandées. Consulter un professionnel de santé avant utilisation. Ce produit n'est pas un médicament.",
    price: 15.9,
    weight: '100g',
    stock: 50,
    images: ['/images/acore.jpg'],
    categories: ['cycle-feminin', 'tonifiant', 'post-partum'],
  },
];

const packs = [
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
    images: ['/images/pack-purete.jpg'],
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
    images: ['/images/pack-cycle.jpg'],
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
    images: ['/images/pack-fertilite.jpg'],
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
    images: ['/images/pack-postpartum.jpg'],
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
    images: ['/images/pack-seduction.jpg'],
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
    images: ['/images/pack-detox.jpg'],
    categories: ['detox', 'purification', 'renouveau'],
    items: [
      { productSlug: 'ditakh-tamarin-velours', quantity: '150g' },
      { productSlug: 'feuilles-badamier', quantity: '50g' },
      { productSlug: 'rose-jericho', quantity: '1 plante' },
    ],
  },
];

async function main() {
  console.log('Seeding database...');

  // Create products
  console.log('Creating products...');
  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: product,
      create: product,
    });
    console.log(`  Created product: ${product.name}`);
  }

  // Create packs
  console.log('Creating packs...');
  for (const pack of packs) {
    const { items, ...packData } = pack;

    // Create or update pack
    const createdPack = await prisma.pack.upsert({
      where: { slug: pack.slug },
      update: packData,
      create: packData,
    });

    // Delete existing pack items
    await prisma.packItem.deleteMany({
      where: { packId: createdPack.id },
    });

    // Create pack items
    for (const item of items) {
      const product = await prisma.product.findUnique({
        where: { slug: item.productSlug },
      });

      if (product) {
        await prisma.packItem.create({
          data: {
            packId: createdPack.id,
            productId: product.id,
            quantity: item.quantity,
          },
        });
      }
    }

    console.log(`  Created pack: ${pack.name}`);
  }

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
