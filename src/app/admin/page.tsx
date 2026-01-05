'use client';

import { useState, useEffect } from 'react';
import { useAdminStore } from '@/lib/adminStore';
import { products } from '@/data/products';
import Image from 'next/image';

type Tab = 'site' | 'banner' | 'products';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<Tab>('site');
  const [mounted, setMounted] = useState(false);

  const {
    siteConfig,
    setSiteConfig,
    promoBanner,
    setPromoBanner,
    productOverrides,
    setProductOverride,
  } = useAdminStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-stone-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-800"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-stone-800 mb-8">
          Administration RootsRemedy
        </h1>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-stone-300">
          <TabButton
            active={activeTab === 'site'}
            onClick={() => setActiveTab('site')}
          >
            Site & Logo
          </TabButton>
          <TabButton
            active={activeTab === 'banner'}
            onClick={() => setActiveTab('banner')}
          >
            Bannière Promo
          </TabButton>
          <TabButton
            active={activeTab === 'products'}
            onClick={() => setActiveTab('products')}
          >
            Produits
          </TabButton>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          {activeTab === 'site' && (
            <SiteConfigSection
              siteConfig={siteConfig}
              setSiteConfig={setSiteConfig}
            />
          )}
          {activeTab === 'banner' && (
            <BannerSection
              promoBanner={promoBanner}
              setPromoBanner={setPromoBanner}
            />
          )}
          {activeTab === 'products' && (
            <ProductsSection
              productOverrides={productOverrides}
              setProductOverride={setProductOverride}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function TabButton({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 font-medium transition-colors ${
        active
          ? 'text-amber-800 border-b-2 border-amber-800'
          : 'text-stone-500 hover:text-stone-700'
      }`}
    >
      {children}
    </button>
  );
}

function SiteConfigSection({
  siteConfig,
  setSiteConfig,
}: {
  siteConfig: ReturnType<typeof useAdminStore>['siteConfig'];
  setSiteConfig: ReturnType<typeof useAdminStore>['setSiteConfig'];
}) {
  const [logoUrl, setLogoUrl] = useState(siteConfig.logo);
  const [heroUrl, setHeroUrl] = useState(siteConfig.heroImage);

  const availableImages = [
    '/logo3.png',
    '/images/1.png',
    '/images/2.png',
    '/images/3.png',
    '/images/4.png',
    '/images/5.png',
    '/images/6.png',
    '/images/vetiver.jpg',
    '/images/nere.jpg',
    '/images/acore.jpg',
    '/images/ditakh.jpg',
    '/images/rose-jericho.jpg',
    '/images/Badamier.jpg',
  ];

  const handleSave = () => {
    setSiteConfig({ logo: logoUrl, heroImage: heroUrl });
    alert('Configuration sauvegardée !');
  };

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-stone-800">Configuration du Site</h2>

      {/* Logo */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-stone-700">Logo du Header</h3>
        <div className="flex gap-4 items-start">
          <div className="w-32 h-32 bg-stone-100 rounded-lg overflow-hidden flex items-center justify-center">
            <Image
              src={logoUrl}
              alt="Logo actuel"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm text-stone-600 mb-2">
              URL de l&apos;image ou chemin local
            </label>
            <input
              type="text"
              value={logoUrl}
              onChange={(e) => setLogoUrl(e.target.value)}
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              placeholder="/images/logo.png"
            />
            <div className="mt-3">
              <p className="text-sm text-stone-500 mb-2">Images disponibles :</p>
              <div className="flex flex-wrap gap-2">
                {availableImages.map((img) => (
                  <button
                    key={img}
                    onClick={() => setLogoUrl(img)}
                    className={`w-12 h-12 rounded border-2 overflow-hidden ${
                      logoUrl === img ? 'border-amber-500' : 'border-stone-200'
                    }`}
                  >
                    <Image
                      src={img}
                      alt=""
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-stone-700">Image Hero (Page d&apos;accueil)</h3>
        <div className="flex gap-4 items-start">
          <div className="w-32 h-32 bg-stone-100 rounded-lg overflow-hidden flex items-center justify-center">
            <Image
              src={heroUrl}
              alt="Hero actuel"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm text-stone-600 mb-2">
              URL de l&apos;image ou chemin local
            </label>
            <input
              type="text"
              value={heroUrl}
              onChange={(e) => setHeroUrl(e.target.value)}
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              placeholder="/images/hero.jpg"
            />
            <div className="mt-3">
              <p className="text-sm text-stone-500 mb-2">Images disponibles :</p>
              <div className="flex flex-wrap gap-2">
                {availableImages.map((img) => (
                  <button
                    key={img}
                    onClick={() => setHeroUrl(img)}
                    className={`w-12 h-12 rounded border-2 overflow-hidden ${
                      heroUrl === img ? 'border-amber-500' : 'border-stone-200'
                    }`}
                  >
                    <Image
                      src={img}
                      alt=""
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleSave}
        className="px-6 py-3 bg-amber-800 text-white rounded-lg hover:bg-amber-900 transition-colors font-medium"
      >
        Sauvegarder les modifications
      </button>
    </div>
  );
}

function BannerSection({
  promoBanner,
  setPromoBanner,
}: {
  promoBanner: ReturnType<typeof useAdminStore>['promoBanner'];
  setPromoBanner: ReturnType<typeof useAdminStore>['setPromoBanner'];
}) {
  const [banner, setBanner] = useState(promoBanner);

  const handleSave = () => {
    setPromoBanner(banner);
    alert('Bannière sauvegardée !');
  };

  const animationOptions = [
    { value: 'none', label: 'Aucune' },
    { value: 'scroll', label: 'Défilement' },
    { value: 'blink', label: 'Clignotement' },
    { value: 'pulse', label: 'Pulsation' },
    { value: 'bounce', label: 'Rebond' },
  ];

  const speedOptions = [
    { value: 'slow', label: 'Lent' },
    { value: 'normal', label: 'Normal' },
    { value: 'fast', label: 'Rapide' },
  ];

  const colorPresets = [
    { bg: '#8B5A2B', text: '#FFFFFF', name: 'Marron' },
    { bg: '#DC2626', text: '#FFFFFF', name: 'Rouge' },
    { bg: '#059669', text: '#FFFFFF', name: 'Vert' },
    { bg: '#2563EB', text: '#FFFFFF', name: 'Bleu' },
    { bg: '#7C3AED', text: '#FFFFFF', name: 'Violet' },
    { bg: '#F59E0B', text: '#000000', name: 'Orange' },
    { bg: '#000000', text: '#FFFFFF', name: 'Noir' },
    { bg: '#EC4899', text: '#FFFFFF', name: 'Rose' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-stone-800">Bannière Promotionnelle</h2>
        <label className="flex items-center gap-3 cursor-pointer">
          <span className="text-sm text-stone-600">Activer</span>
          <div
            className={`w-12 h-6 rounded-full transition-colors ${
              banner.enabled ? 'bg-amber-600' : 'bg-stone-300'
            }`}
            onClick={() => setBanner({ ...banner, enabled: !banner.enabled })}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white shadow transform transition-transform mt-0.5 ${
                banner.enabled ? 'translate-x-6 ml-0.5' : 'translate-x-0.5'
              }`}
            />
          </div>
        </label>
      </div>

      {/* Preview */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-stone-600">Aperçu :</h3>
        <BannerPreview banner={banner} />
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-stone-700">
          Message de la bannière
        </label>
        <input
          type="text"
          value={banner.message}
          onChange={(e) => setBanner({ ...banner, message: e.target.value })}
          className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          placeholder="Livraison gratuite dès 50€ d'achat !"
        />
      </div>

      {/* Link */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-stone-700">
            Texte du lien (optionnel)
          </label>
          <input
            type="text"
            value={banner.linkText || ''}
            onChange={(e) => setBanner({ ...banner, linkText: e.target.value })}
            className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            placeholder="En profiter"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-stone-700">
            URL du lien (optionnel)
          </label>
          <input
            type="text"
            value={banner.linkUrl || ''}
            onChange={(e) => setBanner({ ...banner, linkUrl: e.target.value })}
            className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            placeholder="/shop"
          />
        </div>
      </div>

      {/* Colors */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-stone-700">Couleurs</h3>
        <div className="flex flex-wrap gap-2">
          {colorPresets.map((preset) => (
            <button
              key={preset.name}
              onClick={() =>
                setBanner({
                  ...banner,
                  backgroundColor: preset.bg,
                  textColor: preset.text,
                })
              }
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                banner.backgroundColor === preset.bg
                  ? 'ring-2 ring-offset-2 ring-amber-500'
                  : ''
              }`}
              style={{ backgroundColor: preset.bg, color: preset.text }}
            >
              {preset.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm text-stone-600">Couleur de fond</label>
            <div className="flex gap-2">
              <input
                type="color"
                value={banner.backgroundColor}
                onChange={(e) =>
                  setBanner({ ...banner, backgroundColor: e.target.value })
                }
                className="w-12 h-10 rounded cursor-pointer"
              />
              <input
                type="text"
                value={banner.backgroundColor}
                onChange={(e) =>
                  setBanner({ ...banner, backgroundColor: e.target.value })
                }
                className="flex-1 px-3 py-2 border border-stone-300 rounded-lg text-sm"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm text-stone-600">Couleur du texte</label>
            <div className="flex gap-2">
              <input
                type="color"
                value={banner.textColor}
                onChange={(e) => setBanner({ ...banner, textColor: e.target.value })}
                className="w-12 h-10 rounded cursor-pointer"
              />
              <input
                type="text"
                value={banner.textColor}
                onChange={(e) => setBanner({ ...banner, textColor: e.target.value })}
                className="flex-1 px-3 py-2 border border-stone-300 rounded-lg text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Animation */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-stone-700">Animation</label>
          <select
            value={banner.animation}
            onChange={(e) =>
              setBanner({
                ...banner,
                animation: e.target.value as typeof banner.animation,
              })
            }
            className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          >
            {animationOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-stone-700">Vitesse</label>
          <select
            value={banner.speed}
            onChange={(e) =>
              setBanner({
                ...banner,
                speed: e.target.value as typeof banner.speed,
              })
            }
            className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          >
            {speedOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleSave}
        className="px-6 py-3 bg-amber-800 text-white rounded-lg hover:bg-amber-900 transition-colors font-medium"
      >
        Sauvegarder la bannière
      </button>
    </div>
  );
}

function BannerPreview({
  banner,
}: {
  banner: ReturnType<typeof useAdminStore>['promoBanner'];
}) {
  const getAnimationClass = () => {
    const speedMap = {
      slow: { scroll: '20s', blink: '2s', pulse: '3s', bounce: '2s' },
      normal: { scroll: '12s', blink: '1s', pulse: '2s', bounce: '1s' },
      fast: { scroll: '6s', blink: '0.5s', pulse: '1s', bounce: '0.5s' },
    };

    switch (banner.animation) {
      case 'scroll':
        return `animate-marquee`;
      case 'blink':
        return 'animate-blink';
      case 'pulse':
        return 'animate-pulse';
      case 'bounce':
        return 'animate-bounce';
      default:
        return '';
    }
  };

  const getDuration = () => {
    const durations = {
      scroll: { slow: '20s', normal: '12s', fast: '6s' },
      blink: { slow: '2s', normal: '1s', fast: '0.5s' },
      pulse: { slow: '3s', normal: '2s', fast: '1s' },
      bounce: { slow: '2s', normal: '1s', fast: '0.5s' },
    };
    if (banner.animation === 'none') return undefined;
    return durations[banner.animation]?.[banner.speed];
  };

  return (
    <div
      className="py-2 px-4 text-center text-sm font-medium overflow-hidden"
      style={{ backgroundColor: banner.backgroundColor, color: banner.textColor }}
    >
      <div
        className={`inline-flex items-center gap-2 ${getAnimationClass()}`}
        style={{ animationDuration: getDuration() }}
      >
        <span>{banner.message}</span>
        {banner.linkText && banner.linkUrl && (
          <span className="underline font-semibold">{banner.linkText}</span>
        )}
      </div>
    </div>
  );
}

function ProductsSection({
  productOverrides,
  setProductOverride,
}: {
  productOverrides: ReturnType<typeof useAdminStore>['productOverrides'];
  setProductOverride: ReturnType<typeof useAdminStore>['setProductOverride'];
}) {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [editData, setEditData] = useState<{
    name: string;
    subtitle: string;
    description: string;
    price: number;
    image: string;
  } | null>(null);

  const availableImages = [
    '/images/vetiver.jpg',
    '/images/nere.jpg',
    '/images/acore.jpg',
    '/images/ditakh.jpg',
    '/images/rose-jericho.jpg',
    '/images/Badamier.jpg',
    '/images/1.png',
    '/images/2.png',
    '/images/3.png',
    '/images/4.png',
    '/images/5.png',
    '/images/6.png',
  ];

  const handleSelectProduct = (slug: string) => {
    const product = products.find((p) => p.slug === slug);
    const override = productOverrides.find((p) => p.slug === slug);

    if (product) {
      setSelectedProduct(slug);
      setEditData({
        name: override?.name || product.name,
        subtitle: override?.subtitle || product.subtitle,
        description: override?.description || product.description,
        price: override?.price || product.price,
        image: override?.images?.[0] || product.images[0],
      });
    }
  };

  const handleSave = () => {
    if (selectedProduct && editData) {
      setProductOverride({
        slug: selectedProduct,
        name: editData.name,
        subtitle: editData.subtitle,
        description: editData.description,
        price: editData.price,
        images: [editData.image],
      });
      alert('Produit mis à jour !');
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-stone-800">Gestion des Produits</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Product List */}
        <div className="lg:col-span-1 space-y-2 max-h-[600px] overflow-y-auto pr-2">
          <h3 className="text-sm font-medium text-stone-600 sticky top-0 bg-white py-2">
            Sélectionner un produit
          </h3>
          {products.map((product) => {
            const override = productOverrides.find((p) => p.slug === product.slug);
            const hasOverride = !!override;
            return (
              <button
                key={product.slug}
                onClick={() => handleSelectProduct(product.slug)}
                className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${
                  selectedProduct === product.slug
                    ? 'border-amber-500 bg-amber-50'
                    : 'border-stone-200 hover:border-stone-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-stone-100 overflow-hidden flex-shrink-0">
                    <Image
                      src={override?.images?.[0] || product.images[0]}
                      alt={product.name}
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-stone-800 truncate">
                      {override?.name || product.name}
                    </p>
                    <p className="text-sm text-stone-500">
                      {override?.price?.toFixed(2) || product.price.toFixed(2)}€
                    </p>
                  </div>
                  {hasOverride && (
                    <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">
                      Modifié
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Edit Form */}
        <div className="lg:col-span-2">
          {selectedProduct && editData ? (
            <div className="space-y-6 bg-stone-50 rounded-xl p-6">
              <h3 className="text-lg font-medium text-stone-800">
                Modifier le produit
              </h3>

              {/* Image */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-stone-700">
                  Image du produit
                </label>
                <div className="flex gap-4 items-start">
                  <div className="w-24 h-24 rounded-lg bg-white overflow-hidden">
                    <Image
                      src={editData.image}
                      alt="Aperçu"
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2">
                      {availableImages.map((img) => (
                        <button
                          key={img}
                          onClick={() => setEditData({ ...editData, image: img })}
                          className={`w-12 h-12 rounded border-2 overflow-hidden ${
                            editData.image === img
                              ? 'border-amber-500'
                              : 'border-stone-200'
                          }`}
                        >
                          <Image
                            src={img}
                            alt=""
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </button>
                      ))}
                    </div>
                    <input
                      type="text"
                      value={editData.image}
                      onChange={(e) =>
                        setEditData({ ...editData, image: e.target.value })
                      }
                      className="mt-3 w-full px-3 py-2 border border-stone-300 rounded-lg text-sm"
                      placeholder="URL de l'image"
                    />
                  </div>
                </div>
              </div>

              {/* Name */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-stone-700">
                  Nom du produit
                </label>
                <input
                  type="text"
                  value={editData.name}
                  onChange={(e) =>
                    setEditData({ ...editData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              {/* Subtitle */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-stone-700">
                  Sous-titre
                </label>
                <input
                  type="text"
                  value={editData.subtitle}
                  onChange={(e) =>
                    setEditData({ ...editData, subtitle: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              {/* Price */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-stone-700">
                  Prix (€)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={editData.price}
                  onChange={(e) =>
                    setEditData({ ...editData, price: parseFloat(e.target.value) || 0 })
                  }
                  className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-stone-700">
                  Description
                </label>
                <textarea
                  value={editData.description}
                  onChange={(e) =>
                    setEditData({ ...editData, description: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleSave}
                  className="px-6 py-3 bg-amber-800 text-white rounded-lg hover:bg-amber-900 transition-colors font-medium"
                >
                  Sauvegarder
                </button>
                <button
                  onClick={() => {
                    const product = products.find((p) => p.slug === selectedProduct);
                    if (product) {
                      setEditData({
                        name: product.name,
                        subtitle: product.subtitle,
                        description: product.description,
                        price: product.price,
                        image: product.images[0],
                      });
                    }
                  }}
                  className="px-6 py-3 border border-stone-300 text-stone-700 rounded-lg hover:bg-stone-50 transition-colors font-medium"
                >
                  Réinitialiser
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-stone-500 bg-stone-50 rounded-xl p-12">
              <p>Sélectionnez un produit pour le modifier</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
