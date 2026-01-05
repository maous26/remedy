import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { SiteConfig, PromoBanner, ProductOverride, PackOverride, CustomProduct, CustomPack } from '@/types';

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

  // Pack overrides
  packOverrides: PackOverride[];
  setPackOverride: (override: PackOverride) => void;
  removePackOverride: (slug: string) => void;
  getPackOverride: (slug: string) => PackOverride | undefined;

  // Custom products (user-created)
  customProducts: CustomProduct[];
  addCustomProduct: (product: CustomProduct) => void;
  updateCustomProduct: (slug: string, product: Partial<CustomProduct>) => void;
  removeCustomProduct: (slug: string) => void;

  // Custom packs (user-created)
  customPacks: CustomPack[];
  addCustomPack: (pack: CustomPack) => void;
  updateCustomPack: (slug: string, pack: Partial<CustomPack>) => void;
  removeCustomPack: (slug: string) => void;

  // Hidden items
  hiddenProducts: string[];
  toggleProductVisibility: (slug: string) => void;
  hiddenPacks: string[];
  togglePackVisibility: (slug: string) => void;
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

      // Product overrides
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

      // Pack overrides
      packOverrides: [],
      setPackOverride: (override) =>
        set((state) => {
          const existing = state.packOverrides.findIndex(
            (p) => p.slug === override.slug
          );
          if (existing >= 0) {
            const newOverrides = [...state.packOverrides];
            newOverrides[existing] = { ...newOverrides[existing], ...override };
            return { packOverrides: newOverrides };
          }
          return { packOverrides: [...state.packOverrides, override] };
        }),
      removePackOverride: (slug) =>
        set((state) => ({
          packOverrides: state.packOverrides.filter((p) => p.slug !== slug),
        })),
      getPackOverride: (slug) =>
        get().packOverrides.find((p) => p.slug === slug),

      // Custom products
      customProducts: [],
      addCustomProduct: (product) =>
        set((state) => ({
          customProducts: [...state.customProducts, product],
        })),
      updateCustomProduct: (slug, product) =>
        set((state) => ({
          customProducts: state.customProducts.map((p) =>
            p.slug === slug ? { ...p, ...product } : p
          ),
        })),
      removeCustomProduct: (slug) =>
        set((state) => ({
          customProducts: state.customProducts.filter((p) => p.slug !== slug),
        })),

      // Custom packs
      customPacks: [],
      addCustomPack: (pack) =>
        set((state) => ({
          customPacks: [...state.customPacks, pack],
        })),
      updateCustomPack: (slug, pack) =>
        set((state) => ({
          customPacks: state.customPacks.map((p) =>
            p.slug === slug ? { ...p, ...pack } : p
          ),
        })),
      removeCustomPack: (slug) =>
        set((state) => ({
          customPacks: state.customPacks.filter((p) => p.slug !== slug),
        })),

      // Hidden items
      hiddenProducts: [],
      toggleProductVisibility: (slug) =>
        set((state) => ({
          hiddenProducts: state.hiddenProducts.includes(slug)
            ? state.hiddenProducts.filter((s) => s !== slug)
            : [...state.hiddenProducts, slug],
        })),
      hiddenPacks: [],
      togglePackVisibility: (slug) =>
        set((state) => ({
          hiddenPacks: state.hiddenPacks.includes(slug)
            ? state.hiddenPacks.filter((s) => s !== slug)
            : [...state.hiddenPacks, slug],
        })),
    }),
    {
      name: 'roots-remedy-admin',
    }
  )
);
