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
];
