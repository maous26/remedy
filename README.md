# RootsRemedy - E-commerce de Plantes Traditionnelles

Site e-commerce dédié à la vente de plantes traditionnelles africaines pour le bien-être féminin.

## Technologies

- **Framework**: Next.js 14 (App Router)
- **Base de données**: PostgreSQL avec Prisma ORM
- **Paiement**: Stripe Checkout
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Hébergement**: Railway

## Prérequis

- Node.js 18+
- npm ou yarn
- Compte Stripe
- Compte Railway (pour le déploiement)

## Installation locale

### 1. Cloner le projet

```bash
git clone <votre-repo>
cd rootsremedy
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configurer les variables d'environnement

Copier le fichier `.env.example` en `.env` :

```bash
cp .env.example .env
```

Remplir les variables :

```env
# Base de données PostgreSQL locale ou distante
DATABASE_URL="postgresql://user:password@localhost:5432/rootsremedy?schema=public"

# Stripe (récupérer depuis dashboard.stripe.com)
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."

# URL du site
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NODE_ENV="development"
```

### 4. Initialiser la base de données

```bash
# Générer le client Prisma
npx prisma generate

# Pousser le schéma vers la base de données
npx prisma db push

# Charger les données initiales (produits et packs)
npm run db:seed
```

### 5. Lancer le serveur de développement

```bash
npm run dev
```

Le site est accessible sur http://localhost:3000

## Configuration Stripe

### Clés API

1. Aller sur [dashboard.stripe.com](https://dashboard.stripe.com)
2. Menu Développeurs > Clés API
3. Copier la clé publique (`pk_test_...`) et la clé secrète (`sk_test_...`)

### Webhook local (pour tester)

Installer Stripe CLI :

```bash
# macOS
brew install stripe/stripe-cli/stripe

# Autres: https://stripe.com/docs/stripe-cli
```

Lancer le forwarding :

```bash
stripe listen --forward-to localhost:3000/api/webhook
```

Copier le webhook secret affiché (`whsec_...`) dans votre `.env`.

### Webhook production

1. Dashboard Stripe > Développeurs > Webhooks
2. Ajouter un endpoint : `https://votre-domaine.com/api/webhook`
3. Événements à écouter :
   - `checkout.session.completed`
   - `payment_intent.payment_failed`
   - `charge.refunded`
4. Copier le signing secret dans vos variables Railway

## Déploiement sur Railway

### 1. Créer un nouveau projet

1. Aller sur [railway.app](https://railway.app)
2. New Project > Deploy from GitHub repo
3. Sélectionner votre repository

### 2. Ajouter PostgreSQL

1. Dans le projet, cliquer sur "+ New"
2. Sélectionner "Database" > "PostgreSQL"
3. Railway configure automatiquement `DATABASE_URL`

### 3. Variables d'environnement

Dans l'onglet "Variables" du service web, ajouter :

```
STRIPE_SECRET_KEY=sk_live_... (ou sk_test_...)
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_... (ou pk_test_...)
NEXT_PUBLIC_SITE_URL=https://votre-app.railway.app
NODE_ENV=production
```

### 4. Configurer le déploiement

Railway détecte automatiquement Next.js. Vérifier les settings :
- Build Command: `npm run build`
- Start Command: `npm run start`

### 5. Initialiser la base de données

Après le premier déploiement, exécuter le seed via Railway CLI :

```bash
railway run npm run db:seed
```

Ou via l'interface Railway > Service > Shell.

## Structure du projet

```
rootsremedy/
├── prisma/
│   ├── schema.prisma      # Schéma base de données
│   └── seed.ts            # Données initiales
├── public/
│   ├── logo.jpeg          # Logo du site
│   └── images/            # Images produits
├── src/
│   ├── app/               # Pages Next.js (App Router)
│   │   ├── api/           # API routes (checkout, webhook)
│   │   ├── cart/          # Page panier
│   │   ├── legal/         # Pages légales
│   │   ├── packs/         # Pages packs
│   │   ├── product/       # Pages produits
│   │   ├── shop/          # Page boutique
│   │   └── ...
│   ├── components/        # Composants React
│   ├── data/              # Données produits/packs (fallback)
│   ├── lib/               # Utilitaires (Prisma, Stripe, etc.)
│   └── types/             # Types TypeScript
├── .env.example           # Template variables d'environnement
├── package.json
└── README.md
```

## Fonctionnalités

### Catalogue
- 6 plantes traditionnelles avec fiches détaillées
- 6 packs thématiques avec protocoles d'utilisation
- Filtrage par type et catégorie

### Panier
- Ajout/suppression de produits
- Modification des quantités
- Calcul automatique des frais de livraison
- Seuil de livraison gratuite (60€)

### Paiement
- Stripe Checkout (redirection sécurisée)
- Support carte, Apple Pay, Google Pay
- Webhooks pour confirmation des commandes

### Pages légales
- Mentions légales
- CGV
- Politique de confidentialité
- Avertissement santé (obligatoire)

## Conformité légale

Ce site vend des plantes traditionnelles à usage bien-être. Le langage utilisé respecte la réglementation européenne :
- Pas d'allégations médicales
- Formulations prudentes ("traditionnellement utilisé pour...")
- Avertissements clairs
- Conseils de consultation médicale

## Personnalisation

### Modifier les produits

Éditer `src/data/products.ts` et `src/data/packs.ts`, puis relancer le seed :

```bash
npm run db:seed
```

### Modifier les tarifs de livraison

Éditer `src/lib/shipping.ts`.

### Modifier le design

Les couleurs sont définies dans `tailwind.config.ts` :
- `earth`: tons beige/marron
- `sage`: tons verts
- `gold`: tons dorés
- `terracotta`: tons orangés

## Support

Pour toute question : contact@rootsremedy.com

## License

Propriétaire - Tous droits réservés
