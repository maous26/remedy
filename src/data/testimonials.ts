export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  product?: string;
  date: string;
  verified: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Aminata K.',
    location: 'Paris, France',
    rating: 5,
    text: "J'utilise le Khamaré depuis 3 mois et je suis ravie des résultats. L'odeur est agréable et je me sens beaucoup mieux. Livraison rapide et produit de qualité !",
    product: 'Khamaré (Vétiver)',
    date: '2024-01-15',
    verified: true,
  },
  {
    id: '2',
    name: 'Fatou D.',
    location: 'Lyon, France',
    rating: 5,
    text: "Le pack Rituel Fertilité m'accompagne depuis plusieurs semaines. Les plantes sont de très bonne qualité et les conseils d'utilisation sont clairs. Je recommande vivement !",
    product: 'Pack Rituel Fertilité',
    date: '2024-01-10',
    verified: true,
  },
  {
    id: '3',
    name: 'Marie-Claire T.',
    location: 'Bruxelles, Belgique',
    rating: 5,
    text: "Enfin une boutique qui propose des plantes africaines authentiques ! Le Djeka est exactement comme celui que ma grand-mère utilisait. Merci RootsRemedy !",
    product: 'Djeka',
    date: '2024-01-08',
    verified: true,
  },
  {
    id: '4',
    name: 'Aïssatou B.',
    location: 'Marseille, France',
    rating: 5,
    text: "Service client au top ! J'avais des questions sur l'utilisation des plantes et j'ai eu des réponses rapides et complètes. Les produits sont excellents.",
    product: 'Pack Bien-être Intime',
    date: '2024-01-05',
    verified: true,
  },
  {
    id: '5',
    name: 'Ndeye S.',
    location: 'Genève, Suisse',
    rating: 4,
    text: "Très satisfaite de ma commande. L'emballage est soigné et discret. Les plantes sont bien séchées et conservées. Je recommande cette boutique.",
    product: 'Gongoli',
    date: '2023-12-28',
    verified: true,
  },
  {
    id: '6',
    name: 'Carine M.',
    location: 'Bordeaux, France',
    rating: 5,
    text: "Je suis cliente fidèle depuis plusieurs mois. La qualité est toujours au rendez-vous et les prix sont raisonnables. Merci de nous permettre d'accéder à ces trésors !",
    product: 'Khamaré (Vétiver)',
    date: '2023-12-20',
    verified: true,
  },
];
