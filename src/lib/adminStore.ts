import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { SiteConfig, PromoBanner, ProductOverride } from '@/types';

interface AdminState {
  // Site configuration
  siteConfig: SiteConfig;
  setSiteConfig: (config: Partial<SiteConfig>) => void;

  // Promo banner
  promoBanner: PromoBanner;
  setPromoBanner: (banner: Partial<PromoBanner>) => void;

  // Product overrides
  productOverrides: ProductOverride[];
  setProductOverride: (override: ProductOverride) => void;
  removeProductOverride: (slug: string) => void;
  getProductOverride: (slug: string) => ProductOverride | undefined;
}

const defaultSiteConfig: SiteConfig = {
  logo: '/logo3.png',
  heroImage: '/logo3.png',
};

const defaultPromoBanner: PromoBanner = {
  id: 'main-banner',
  enabled: false,
  message: 'Livraison gratuite dès 50€ d\'achat !',
  linkText: 'En profiter',
  linkUrl: '/shop',
  backgroundColor: '#8B5A2B',
  textColor: '#FFFFFF',
  animation: 'none',
  speed: 'normal',
};

export const useAdminStore = create<AdminState>()(
  persist(
    (set, get) => ({
      siteConfig: defaultSiteConfig,
      setSiteConfig: (config) =>
        set((state) => ({
          siteConfig: { ...state.siteConfig, ...config },
        })),

      promoBanner: defaultPromoBanner,
      setPromoBanner: (banner) =>
        set((state) => ({
          promoBanner: { ...state.promoBanner, ...banner },
        })),

      productOverrides: [],
      setProductOverride: (override) =>
        set((state) => {
          const existing = state.productOverrides.findIndex(
            (p) => p.slug === override.slug
          );
          if (existing >= 0) {
            const newOverrides = [...state.productOverrides];
            newOverrides[existing] = { ...newOverrides[existing], ...override };
            return { productOverrides: newOverrides };
          }
          return { productOverrides: [...state.productOverrides, override] };
        }),
      removeProductOverride: (slug) =>
        set((state) => ({
          productOverrides: state.productOverrides.filter((p) => p.slug !== slug),
        })),
      getProductOverride: (slug) =>
        get().productOverrides.find((p) => p.slug === slug),
    }),
    {
      name: 'roots-remedy-admin',
    }
  )
);
