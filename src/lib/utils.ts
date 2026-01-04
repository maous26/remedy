import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number, currency: string = 'EUR'): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency,
  }).format(price);
}

export function generateOrderNumber(): string {
  const date = new Date();
  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `RR${year}${month}${day}-${random}`;
}

export function calculateShipping(subtotal: number, country: string): number {
  // Livraison gratuite au-dessus de 60€
  if (subtotal >= 60) return 0;

  // Tarifs par zone
  const shippingRates: Record<string, number> = {
    FR: 5.90,
    BE: 7.90,
    CH: 9.90,
    LU: 7.90,
    DE: 8.90,
    ES: 8.90,
    IT: 8.90,
    PT: 9.90,
    NL: 7.90,
    AT: 8.90,
    // Reste de l'Europe
    DEFAULT: 12.90,
  };

  return shippingRates[country] ?? shippingRates.DEFAULT;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
