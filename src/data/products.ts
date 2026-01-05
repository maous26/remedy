import { Product } from '@/types';

export const products: Omit<Product, 'id'>[] = [
  {
    name: 'Feuilles de Badamier',
    slug: 'feuilles-badamier',
    subtitle: 'Purificateur Intime Naturel',
    description:
      "Le badamier, aussi appelé \"amandier tropical\", est vénéré depuis des générations par les femmes africaines. Ses feuilles sont traditionnellement reconnues pour leurs propriétés purifiantes et apaisantes dans les rituels d'hygiène intime.",
    origin: "Afrique de l'Ouest, Asie tropicale",
    history:
      "Les grands-mères transmettaient ce secret de beauté intime de mère en fille. Dans les villages côtiers d'Afrique de l'Ouest, les jeunes mariées recevaient traditionnellement un panier de ces feuilles pour leur hygiène et leur bien-être. Cette pratique ancestrale témoigne de la confiance accordée à cette plante depuis des générations.",
    benefits: [
      "Traditionnellement utilisé pour accompagner l'hygiène intime",
      "Reconnu dans les pratiques ancestrales pour ses propriétés purifiantes",
      "Contribue au confort de la zone intime",
      "Favorise une sensation de fraîcheur naturelle",
      "Utilisé traditionnellement pour apaiser les inconforts",
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
    origin: "Inde, cultivé en Afrique de l'Ouest (Sénégal, Mali, Côte d'Ivoire)",
    description:
      "Surnommé \"l'huile de la tranquillité\" en Inde et \"khus\" en Afrique, le vétiver accompagne les rituels féminins depuis l'Antiquité. Son parfum envoûtant, boisé et terreux, en fait un allié précieux reconnu par les traditions ancestrales.",
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
    origin: "Savanes d'Afrique de l'Ouest (du Sénégal au Cameroun)",
    description:
      "Le néré est un arbre sacré dans de nombreuses cultures africaines. Appelé \"nététou\" au Sénégal ou \"dawadawa\" au Nigeria, il nourrit et accompagne les communautés depuis des millénaires. Sa pulpe sucrée est traditionnellement appréciée pour ses propriétés fortifiantes.",
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
    origin: "Déserts du Moyen-Orient et d'Afrique du Nord",
    description:
      'Appelée "plante de la résurrection", cette merveille de la nature peut survivre des décennies complètement desséchée, puis revivre au contact de l\'eau. Cette symbolique puissante en a fait un symbole de renouveau et de renaissance.',
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
    origin: "Forêts d'Afrique de l'Ouest (Sénégal, Guinée, Côte d'Ivoire)",
    description:
      'Le ditakh, ou "velvet tamarind", est un trésor des forêts africaines. Son goût acidulé-sucré unique en fait une friandise populaire, mais les femmes connaissent surtout ses vertus traditionnelles pour le bien-être général.',
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
    origin: "Zones humides d'Asie et d'Afrique",
    description:
      "L'acore odorant, aussi appelé \"roseau aromatique\", était déjà mentionné dans les papyrus égyptiens comme plante sacrée. Son parfum caractéristique, entre le gingembre et la cannelle, en faisait un ingrédient apprécié dans les rituels féminins.",
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
  {
    name: 'Khamaré de Kayes',
    slug: 'khamare-kayes',
    subtitle: 'Le Parfum Intime Traditionnel',
    description:
      "Le Khamaré de Kayes est une variété prisée de vétiver originaire de la région de Kayes au Mali. Reconnu pour son parfum envoûtant et ses propriétés purifiantes, il est traditionnellement utilisé par les femmes africaines pour leur hygiène intime et leur bien-être.",
    origin: 'Kayes, Mali',
    history:
      "Les femmes de Kayes transmettent ce secret de génération en génération. Cette variété est particulièrement appréciée pour son parfum délicat et durable qui accompagne les femmes au quotidien.",
    benefits: [
      'Parfum naturel délicat et durable',
      'Traditionnellement utilisé pour l\'hygiène intime',
      'Reconnu pour ses propriétés purifiantes',
      'Contribue au bien-être féminin',
    ],
    usages: [
      {
        method: 'En infusion intime',
        instructions: "Placer 2-3 tiges dans 1L d'eau tiède. Laisser infuser 30 minutes. Utiliser pour la toilette intime.",
      },
      {
        method: 'En fumigation',
        instructions: 'Brûler une tige pour parfumer naturellement les sous-vêtements.',
      },
    ],
    precautions: "Usage externe uniquement. Ne pas utiliser pendant la grossesse sans avis médical.",
    price: 9.90,
    weight: '7 tiges',
    stock: 100,
    images: ['/images/vetiver.jpg'],
    categories: ['hygiene-intime', 'parfum-naturel', 'bien-etre-feminin'],
  },
  {
    name: 'Khamaré Corset',
    slug: 'khamare-corset',
    subtitle: 'Le Vétiver Premium',
    description:
      "Le Khamaré Corset est une sélection premium de vétiver, reconnu pour sa qualité supérieure et son parfum intense. Traditionnellement utilisé par les femmes pour leur bien-être intime et leur séduction naturelle.",
    origin: "Afrique de l'Ouest",
    history:
      "Appelé 'corset' pour sa capacité traditionnelle à accompagner la silhouette féminine, cette variété est particulièrement prisée lors des cérémonies et moments spéciaux.",
    benefits: [
      'Qualité premium, parfum intense',
      'Traditionnellement associé au bien-être féminin',
      'Reconnu pour ses propriétés tonifiantes',
      'Parfum naturel longue durée',
    ],
    usages: [
      {
        method: 'En bain de siège',
        instructions: "Faire bouillir 3-4 tiges dans 2L d'eau. Laisser tiédir et utiliser en bain de siège.",
      },
      {
        method: 'En infusion',
        instructions: "Une tige dans une tasse d'eau chaude, laisser infuser 10 minutes.",
      },
    ],
    precautions: "Déconseillé aux femmes enceintes. Consulter un professionnel de santé en cas de doute.",
    price: 9.90,
    weight: '7 tiges',
    stock: 80,
    images: ['/images/vetiver.jpg'],
    categories: ['hygiene-intime', 'parfum-naturel', 'bien-etre-feminin'],
  },
  {
    name: 'Khamaré de Seygou',
    slug: 'khamare-seygou',
    subtitle: 'Le Vétiver de Ségou',
    description:
      "Originaire de la région de Ségou au Mali, ce Khamaré est réputé pour ses propriétés exceptionnelles. Les femmes de cette région l'utilisent depuis des générations pour leur bien-être quotidien.",
    origin: 'Ségou, Mali',
    history:
      "Ségou, ancienne capitale de l'empire Bambara, est reconnue pour la qualité de ses plantes traditionnelles. Le Khamaré de Seygou est un héritage de cette riche tradition.",
    benefits: [
      'Variété authentique de Ségou',
      'Parfum caractéristique et agréable',
      'Traditionnellement utilisé pour la purification',
      'Contribue au confort intime',
    ],
    usages: [
      {
        method: 'En toilette intime',
        instructions: "Infuser 2-3 tiges dans 1L d'eau tiède pendant 20 minutes.",
      },
      {
        method: 'En fumigation traditionnelle',
        instructions: 'Faire brûler pour parfumer les tissus et l\'espace.',
      },
    ],
    precautions: "Usage externe uniquement. Ne pas utiliser pendant la grossesse.",
    price: 9.90,
    weight: '7 tiges',
    stock: 90,
    images: ['/images/vetiver.jpg'],
    categories: ['hygiene-intime', 'parfum-naturel', 'purification'],
  },
  {
    name: 'Khamaré de Selingue',
    slug: 'khamare-selingue',
    subtitle: 'Le Vétiver des Eaux',
    description:
      "Provenant de la région de Sélingué, près du barrage du même nom, ce Khamaré bénéficie d'un terroir unique. L'humidité de la région lui confère des propriétés particulièrement appréciées.",
    origin: 'Sélingué, Mali',
    history:
      "La région de Sélingué, avec ses eaux abondantes, produit un vétiver d'une qualité remarquable, transmis par les femmes de génération en génération.",
    benefits: [
      'Terroir unique près des eaux',
      'Parfum frais et délicat',
      'Propriétés purifiantes reconnues',
      'Idéal pour le bien-être quotidien',
    ],
    usages: [
      {
        method: 'En bain aromatique',
        instructions: "Ajouter 3-4 tiges à l'eau du bain tiède. Profiter du parfum relaxant.",
      },
      {
        method: 'En infusion',
        instructions: "Faire infuser 2 tiges dans 500ml d'eau chaude pendant 15 minutes.",
      },
    ],
    precautions: "Déconseillé pendant la grossesse. Usage externe recommandé.",
    price: 9.90,
    weight: '7 tiges',
    stock: 85,
    images: ['/images/vetiver.jpg'],
    categories: ['hygiene-intime', 'parfum-naturel', 'bien-etre'],
  },
  {
    name: 'Kinkelimba',
    slug: 'kinkelimba',
    subtitle: 'La Tisane Africaine Purifiante',
    description:
      "Le Kinkelimba est une plante emblématique d'Afrique de l'Ouest, connue pour ses propriétés digestives et purifiantes. Cette tisane traditionnelle est consommée quotidiennement par des millions de personnes.",
    origin: "Sénégal, Mali, Guinée",
    history:
      "Boisson nationale au Sénégal, le Kinkelimba accompagne les repas et les moments de convivialité. Ses vertus sont reconnues depuis des siècles par les guérisseurs traditionnels.",
    benefits: [
      'Favorise la digestion',
      'Propriétés purifiantes reconnues',
      'Riche en antioxydants naturels',
      'Contribue au bien-être général',
    ],
    usages: [
      {
        method: 'En tisane',
        instructions: "Faire bouillir une poignée de feuilles dans 1L d'eau pendant 10 minutes. Sucrer selon goût.",
      },
      {
        method: 'En infusion froide',
        instructions: "Laisser infuser dans l'eau froide pendant 2 heures pour une boisson rafraîchissante.",
      },
    ],
    precautions: "Peut être consommé quotidiennement. Réduire la consommation en cas de grossesse.",
    price: 9.90,
    weight: '50g',
    stock: 120,
    images: ['/images/Badamier.jpg'],
    categories: ['tisane', 'digestion', 'purification'],
  },
  {
    name: 'Nep Nep',
    slug: 'nep-nep',
    subtitle: 'Le Fruit de la Fertilité',
    description:
      "Le Nep Nep, aussi appelé fruit du jujubier sauvage, est traditionnellement utilisé par les femmes africaines pour accompagner leur fertilité et leur bien-être reproductif.",
    origin: "Sahel africain",
    history:
      "Les femmes sahéliennes consomment le Nep Nep depuis des générations pour soutenir leur fertilité. Ce petit fruit est considéré comme un trésor de la pharmacopée traditionnelle.",
    benefits: [
      'Traditionnellement associé à la fertilité',
      'Riche en nutriments naturels',
      'Soutient le bien-être féminin',
      'Contribue à l\'équilibre hormonal selon les traditions',
    ],
    usages: [
      {
        method: 'En décoction',
        instructions: "Faire bouillir une poignée de fruits dans 1L d'eau pendant 20 minutes. Boire 2 verres par jour.",
      },
      {
        method: 'En poudre',
        instructions: "Moudre les fruits et ajouter une cuillère à café dans les boissons ou repas.",
      },
    ],
    precautions: "Consulter un professionnel de santé en cas de traitement médical. Ce n'est pas un médicament.",
    price: 9.90,
    weight: '50g',
    stock: 70,
    images: ['/images/nere.jpg'],
    categories: ['fertilite', 'bien-etre-feminin', 'vitalite'],
  },
  {
    name: 'Moussoyiri',
    slug: 'moussoyiri',
    subtitle: 'La Plante des Femmes',
    description:
      "Le Moussoyiri, dont le nom signifie littéralement 'plante des femmes' en Bambara, est un remède traditionnel utilisé pour accompagner le bien-être féminin et les cycles menstruels.",
    origin: "Mali, Burkina Faso",
    history:
      "Les femmes Bambara et Mossi utilisent le Moussoyiri depuis des générations pour réguler leurs cycles et soulager les inconforts menstruels. C'est une plante sacrée de la féminité.",
    benefits: [
      'Accompagne le cycle menstruel',
      'Traditionnellement utilisé pour soulager les douleurs',
      'Contribue à l\'équilibre féminin',
      'Propriétés apaisantes reconnues',
    ],
    usages: [
      {
        method: 'En décoction',
        instructions: "Faire bouillir 2 cuillères à soupe dans 500ml d'eau pendant 15 minutes. Boire pendant les règles.",
      },
      {
        method: 'En bain de siège',
        instructions: "Préparer une décoction concentrée et utiliser en bain de siège tiède.",
      },
    ],
    precautions: "Ne pas utiliser pendant la grossesse. Consulter un médecin si les douleurs persistent.",
    price: 9.90,
    weight: '50g',
    stock: 65,
    images: ['/images/Badamier.jpg'],
    categories: ['cycle-feminin', 'bien-etre-feminin', 'soulagement'],
  },
  {
    name: 'Djeka',
    slug: 'djeka',
    subtitle: 'L\'Écorce Purifiante',
    description:
      "Le Djeka est une écorce traditionnelle utilisée par les femmes africaines pour leur hygiène intime et leur bien-être. Reconnue pour ses propriétés purifiantes et tonifiantes.",
    origin: "Côte d'Ivoire, Ghana",
    history:
      "Les femmes Akan utilisent le Djeka depuis des siècles dans leurs rituels de purification et de beauté intime. C'est un secret de beauté transmis de mère en fille.",
    benefits: [
      'Propriétés purifiantes puissantes',
      'Tonifie la zone intime',
      'Parfum naturel agréable',
      'Contribue au resserrement selon les traditions',
    ],
    usages: [
      {
        method: 'En bain de siège',
        instructions: "Faire bouillir 3-4 morceaux d'écorce dans 2L d'eau pendant 20 minutes. Utiliser tiède.",
      },
      {
        method: 'En toilette quotidienne',
        instructions: "Préparer une infusion légère pour la toilette intime quotidienne.",
      },
    ],
    precautions: "Usage externe uniquement. Ne pas utiliser pendant la grossesse ou en cas d'irritation.",
    price: 9.90,
    weight: '50g',
    stock: 75,
    images: ['/images/acore.jpg'],
    categories: ['hygiene-intime', 'purification', 'tonifiant'],
  },
  {
    name: 'Feuilles de Djeka',
    slug: 'feuilles-djeka',
    subtitle: 'Les Feuilles Purifiantes',
    description:
      "Les feuilles de Djeka complètent l'action de l'écorce. Plus douces, elles sont idéales pour un usage quotidien et une purification en douceur.",
    origin: "Côte d'Ivoire, Ghana",
    history:
      "Utilisées en complément de l'écorce, les feuilles de Djeka offrent une alternative plus douce pour l'entretien quotidien de l'hygiène intime féminine.",
    benefits: [
      'Action douce et quotidienne',
      'Propriétés purifiantes légères',
      'Parfum délicat',
      'Idéal pour entretien régulier',
    ],
    usages: [
      {
        method: 'En infusion',
        instructions: "Faire infuser une poignée de feuilles dans 1L d'eau chaude pendant 15 minutes.",
      },
      {
        method: 'En bain',
        instructions: "Ajouter l'infusion à l'eau du bain pour un moment de détente purifiante.",
      },
    ],
    precautions: "Usage externe uniquement. Convient pour un usage quotidien.",
    price: 9.90,
    weight: '50g',
    stock: 80,
    images: ['/images/Badamier.jpg'],
    categories: ['hygiene-intime', 'purification', 'soin-quotidien'],
  },
  {
    name: 'Aldanké',
    slug: 'aldanke',
    subtitle: 'Le Secret des Femmes Peules',
    description:
      "L'Aldanké est une plante précieuse utilisée par les femmes Peules pour leur beauté et leur bien-être intime. Son parfum caractéristique est très apprécié.",
    origin: "Sénégal, Guinée, Mali",
    history:
      "Les femmes Peules, reconnues pour leur beauté légendaire, utilisent l'Aldanké dans leurs rituels de beauté et de séduction depuis des générations.",
    benefits: [
      'Parfum envoûtant et durable',
      'Contribue à la beauté intime',
      'Propriétés purifiantes',
      'Secret de beauté Peul',
    ],
    usages: [
      {
        method: 'En fumigation',
        instructions: "Brûler sur du charbon pour parfumer le corps et les vêtements.",
      },
      {
        method: 'En infusion',
        instructions: "Faire infuser dans l'eau tiède pour la toilette parfumée.",
      },
    ],
    precautions: "Usage externe uniquement. Éviter le contact direct avec les muqueuses.",
    price: 9.90,
    weight: '50g',
    stock: 60,
    images: ['/images/vetiver.jpg'],
    categories: ['parfum-naturel', 'beaute', 'hygiene-intime'],
  },
  {
    name: '4 Côtés',
    slug: 'quatre-cotes',
    subtitle: 'Le Fruit Magique de la Fertilité',
    description:
      "Le fruit 4 Côtés, nommé ainsi pour sa forme caractéristique, est traditionnellement utilisé pour accompagner la fertilité féminine et le bien-être reproductif.",
    origin: "Afrique Centrale et de l'Ouest",
    history:
      "Ce fruit aux propriétés légendaires est utilisé depuis des siècles par les femmes africaines qui souhaitent concevoir. Il est considéré comme un puissant allié de la fertilité.",
    benefits: [
      'Traditionnellement associé à la fertilité',
      'Soutient le système reproductif',
      'Propriétés tonifiantes',
      'Contribue à l\'équilibre hormonal selon les traditions',
    ],
    usages: [
      {
        method: 'En décoction',
        instructions: "Faire bouillir 1 fruit dans 1L d'eau pendant 30 minutes. Boire 1 verre matin et soir.",
      },
      {
        method: 'En poudre',
        instructions: "Râper le fruit séché et ajouter à vos boissons ou repas.",
      },
    ],
    precautions: "Ne pas utiliser pendant la grossesse. Consulter un professionnel de santé avant utilisation.",
    price: 9.90,
    weight: '50g',
    stock: 55,
    images: ['/images/ditakh.jpg'],
    categories: ['fertilite', 'bien-etre-feminin', 'tonifiant'],
  },
  {
    name: 'Gowé',
    slug: 'gowe',
    subtitle: 'La Boisson Énergisante Traditionnelle',
    description:
      "Le Gowé est une préparation traditionnelle à base de mil fermenté, reconnue pour ses propriétés énergisantes et nutritives. C'est une boisson de vitalité consommée par les femmes africaines.",
    origin: "Sénégal, Mali, Burkina Faso",
    history:
      "Le Gowé accompagne les femmes africaines depuis des générations, notamment pendant les périodes de fatigue, d'allaitement ou de convalescence. C'est une source naturelle d'énergie.",
    benefits: [
      'Source naturelle d\'énergie',
      'Riche en nutriments',
      'Favorise la lactation selon les traditions',
      'Contribue à la vitalité générale',
    ],
    usages: [
      {
        method: 'En boisson',
        instructions: "Diluer 2-3 cuillères à soupe dans un verre d'eau froide. Sucrer selon goût.",
      },
      {
        method: 'En bouillie',
        instructions: "Mélanger avec de l'eau chaude pour obtenir une bouillie nourrissante.",
      },
    ],
    precautions: "Produit fermenté, consommer rapidement après préparation. Conserver au frais.",
    price: 9.90,
    weight: '50g',
    stock: 90,
    images: ['/images/nere.jpg'],
    categories: ['vitalite', 'energie', 'nutrition'],
  },
];
