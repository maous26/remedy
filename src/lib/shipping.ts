import { ShippingOption } from '@/types';

export const SHIPPING_OPTIONS: ShippingOption[] = [
  {
    id: 'standard',
    name: 'Livraison Standard',
    description: 'Colissimo suivi',
    price: 5.90,
    estimatedDays: '3-5 jours ouvrés',
  },
  {
    id: 'express',
    name: 'Livraison Express',
    description: 'Chronopost 24h',
    price: 12.90,
    estimatedDays: '1-2 jours ouvrés',
  },
];

export const FREE_SHIPPING_THRESHOLD = 60;

export const SHIPPING_ZONES: Record<string, { name: string; multiplier: number }> = {
  FR: { name: 'France métropolitaine', multiplier: 1 },
  BE: { name: 'Belgique', multiplier: 1.2 },
  LU: { name: 'Luxembourg', multiplier: 1.2 },
  CH: { name: 'Suisse', multiplier: 1.5 },
  DE: { name: 'Allemagne', multiplier: 1.3 },
  ES: { name: 'Espagne', multiplier: 1.3 },
  IT: { name: 'Italie', multiplier: 1.3 },
  PT: { name: 'Portugal', multiplier: 1.4 },
  NL: { name: 'Pays-Bas', multiplier: 1.2 },
  AT: { name: 'Autriche', multiplier: 1.3 },
  GB: { name: 'Royaume-Uni', multiplier: 1.8 },
};

export function getShippingPrice(
  basePrice: number,
  countryCode: string,
  subtotal: number
): number {
  if (subtotal >= FREE_SHIPPING_THRESHOLD) {
    return 0;
  }

  const zone = SHIPPING_ZONES[countryCode];
  const multiplier = zone?.multiplier ?? 2;

  return Math.round(basePrice * multiplier * 100) / 100;
}

export function getAvailableCountries(): { code: string; name: string }[] {
  return Object.entries(SHIPPING_ZONES).map(([code, { name }]) => ({
    code,
    name,
  }));
}
