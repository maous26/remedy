'use client';

import { useState, useEffect } from 'react';
import { useAdminStore } from '@/lib/adminStore';
import { products } from '@/data/products';
import { packs } from '@/data/packs';
import Image from 'next/image';
import { Plus, Trash2, Eye, EyeOff, Package, ShoppingBag } from 'lucide-react';

type Tab = 'site' | 'banner' | 'products' | 'packs';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<Tab>('site');
  const [mounted, setMounted] = useState(false);

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
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-stone-800 mb-8">
          Administration RootsRemedy
        </h1>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-stone-300">
          <TabButton active={activeTab === 'site'} onClick={() => setActiveTab('site')}>
            Site & Logo
          </TabButton>
          <TabButton active={activeTab === 'banner'} onClick={() => setActiveTab('banner')}>
            Bannière Promo
          </TabButton>
          <TabButton active={activeTab === 'products'} onClick={() => setActiveTab('products')}>
            <ShoppingBag className="w-4 h-4 mr-1 inline" />
            Produits
          </TabButton>
          <TabButton active={activeTab === 'packs'} onClick={() => setActiveTab('packs')}>
            <Package className="w-4 h-4 mr-1 inline" />
            Packs
          </TabButton>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          {activeTab === 'site' && <SiteConfigSection />}
          {activeTab === 'banner' && <BannerSection />}
          {activeTab === 'products' && <ProductsSection />}
          {activeTab === 'packs' && <PacksSection />}
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
      className={`px-4 py-3 font-medium transition-colors flex items-center ${
        active
          ? 'text-amber-800 border-b-2 border-amber-800'
          : 'text-stone-500 hover:text-stone-700'
      }`}
    >
      {children}
    </button>
  );
}

function SiteConfigSection() {
  const { siteConfig, setSiteConfig } = useAdminStore();
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
            <Image src={logoUrl} alt="Logo actuel" width={120} height={120} className="object-contain" />
          </div>
          <div className="flex-1">
            <input
              type="text"
              value={logoUrl}
              onChange={(e) => setLogoUrl(e.target.value)}
              className="w-full px-4 py-2 border border-stone-300 rounded-lg mb-3"
              placeholder="/images/logo.png"
            />
            <div className="flex flex-wrap gap-2">
              {availableImages.map((img) => (
                <button
                  key={img}
                  onClick={() => setLogoUrl(img)}
                  className={`w-12 h-12 rounded border-2 overflow-hidden ${logoUrl === img ? 'border-amber-500' : 'border-stone-200'}`}
                >
                  <Image src={img} alt="" width={48} height={48} className="object-cover w-full h-full" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-stone-700">Image Hero (Page d&apos;accueil)</h3>
        <div className="flex gap-4 items-start">
          <div className="w-32 h-32 bg-stone-100 rounded-lg overflow-hidden flex items-center justify-center">
            <Image src={heroUrl} alt="Hero actuel" width={120} height={120} className="object-contain" />
          </div>
          <div className="flex-1">
            <input
              type="text"
              value={heroUrl}
              onChange={(e) => setHeroUrl(e.target.value)}
              className="w-full px-4 py-2 border border-stone-300 rounded-lg mb-3"
              placeholder="/images/hero.jpg"
            />
            <div className="flex flex-wrap gap-2">
              {availableImages.map((img) => (
                <button
                  key={img}
                  onClick={() => setHeroUrl(img)}
                  className={`w-12 h-12 rounded border-2 overflow-hidden ${heroUrl === img ? 'border-amber-500' : 'border-stone-200'}`}
                >
                  <Image src={img} alt="" width={48} height={48} className="object-cover w-full h-full" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button onClick={handleSave} className="px-6 py-3 bg-amber-800 text-white rounded-lg hover:bg-amber-900 transition-colors font-medium">
        Sauvegarder
      </button>
    </div>
  );
}

function BannerSection() {
  const { promoBanner, setPromoBanner } = useAdminStore();
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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-stone-800">Bannière Promotionnelle</h2>
        <label className="flex items-center gap-3 cursor-pointer">
          <span className="text-sm text-stone-600">Activer</span>
          <div
            className={`w-12 h-6 rounded-full transition-colors ${banner.enabled ? 'bg-amber-600' : 'bg-stone-300'}`}
            onClick={() => setBanner({ ...banner, enabled: !banner.enabled })}
          >
            <div className={`w-5 h-5 rounded-full bg-white shadow transform transition-transform mt-0.5 ${banner.enabled ? 'translate-x-6 ml-0.5' : 'translate-x-0.5'}`} />
          </div>
        </label>
      </div>

      {/* Preview */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-stone-600">Aperçu :</h3>
        <div className="py-2 px-4 text-center text-sm font-medium" style={{ backgroundColor: banner.backgroundColor, color: banner.textColor }}>
          {banner.message} {banner.linkText && <span className="underline ml-2">{banner.linkText}</span>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-stone-700">Message</label>
          <input type="text" value={banner.message} onChange={(e) => setBanner({ ...banner, message: e.target.value })} className="w-full px-4 py-2 border border-stone-300 rounded-lg" />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-stone-700">Texte du lien</label>
          <input type="text" value={banner.linkText || ''} onChange={(e) => setBanner({ ...banner, linkText: e.target.value })} className="w-full px-4 py-2 border border-stone-300 rounded-lg" />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-stone-700">URL du lien</label>
          <input type="text" value={banner.linkUrl || ''} onChange={(e) => setBanner({ ...banner, linkUrl: e.target.value })} className="w-full px-4 py-2 border border-stone-300 rounded-lg" />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-stone-700">Animation</label>
          <select value={banner.animation} onChange={(e) => setBanner({ ...banner, animation: e.target.value as typeof banner.animation })} className="w-full px-4 py-2 border border-stone-300 rounded-lg">
            {animationOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-stone-700">Vitesse</label>
          <select value={banner.speed} onChange={(e) => setBanner({ ...banner, speed: e.target.value as typeof banner.speed })} className="w-full px-4 py-2 border border-stone-300 rounded-lg">
            <option value="slow">Lent</option>
            <option value="normal">Normal</option>
            <option value="fast">Rapide</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-stone-700">Couleurs</label>
        <div className="flex flex-wrap gap-2">
          {colorPresets.map((preset) => (
            <button
              key={preset.name}
              onClick={() => setBanner({ ...banner, backgroundColor: preset.bg, textColor: preset.text })}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${banner.backgroundColor === preset.bg ? 'ring-2 ring-offset-2 ring-amber-500' : ''}`}
              style={{ backgroundColor: preset.bg, color: preset.text }}
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      <button onClick={handleSave} className="px-6 py-3 bg-amber-800 text-white rounded-lg hover:bg-amber-900 transition-colors font-medium">
        Sauvegarder
      </button>
    </div>
  );
}

function ProductsSection() {
  const {
    productOverrides,
    setProductOverride,
    customProducts,
    addCustomProduct,
    removeCustomProduct,
    hiddenProducts,
    toggleProductVisibility,
  } = useAdminStore();

  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [editData, setEditData] = useState<{
    name: string;
    subtitle: string;
    description: string;
    price: number;
    image: string;
    isCustom?: boolean;
  } | null>(null);

  const availableImages = [
    '/images/vetiver.jpg', '/images/nere.jpg', '/images/acore.jpg', '/images/ditakh.jpg',
    '/images/rose-jericho.jpg', '/images/Badamier.jpg', '/images/1.png', '/images/2.png',
    '/images/3.png', '/images/4.png', '/images/5.png', '/images/6.png',
  ];

  const allProducts = [
    ...products.map((p) => ({ ...p, isCustom: false })),
    ...customProducts.map((p) => ({ ...p, isCustom: true })),
  ];

  const handleSelectProduct = (slug: string, isCustom: boolean) => {
    if (isCustom) {
      const product = customProducts.find((p) => p.slug === slug);
      if (product) {
        setSelectedProduct(slug);
        setIsCreating(false);
        setEditData({
          name: product.name,
          subtitle: product.subtitle,
          description: product.description,
          price: product.price,
          image: product.images[0],
          isCustom: true,
        });
      }
    } else {
      const product = products.find((p) => p.slug === slug);
      const override = productOverrides.find((p) => p.slug === slug);
      if (product) {
        setSelectedProduct(slug);
        setIsCreating(false);
        setEditData({
          name: override?.name || product.name,
          subtitle: override?.subtitle || product.subtitle,
          description: override?.description || product.description,
          price: override?.price || product.price,
          image: override?.images?.[0] || product.images[0],
          isCustom: false,
        });
      }
    }
  };

  const handleCreateNew = () => {
    setIsCreating(true);
    setSelectedProduct(null);
    setEditData({
      name: '',
      subtitle: '',
      description: '',
      price: 9.90,
      image: '/images/vetiver.jpg',
      isCustom: true,
    });
  };

  const handleSave = () => {
    if (!editData) return;

    if (isCreating) {
      const slug = editData.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      addCustomProduct({
        id: `custom-${Date.now()}`,
        slug,
        name: editData.name,
        subtitle: editData.subtitle,
        description: editData.description,
        origin: 'Afrique de l\'Ouest',
        price: editData.price,
        weight: '50g',
        stock: 100,
        images: [editData.image],
        categories: ['bien-etre'],
        benefits: [],
        precautions: '',
      });
      alert('Produit créé !');
      setIsCreating(false);
      setEditData(null);
    } else if (selectedProduct) {
      if (editData.isCustom) {
        const { isCustom, ...rest } = editData;
        void isCustom;
        useAdminStore.getState().updateCustomProduct(selectedProduct, {
          name: rest.name,
          subtitle: rest.subtitle,
          description: rest.description,
          price: rest.price,
          images: [rest.image],
        });
      } else {
        setProductOverride({
          slug: selectedProduct,
          name: editData.name,
          subtitle: editData.subtitle,
          description: editData.description,
          price: editData.price,
          images: [editData.image],
        });
      }
      alert('Produit mis à jour !');
    }
  };

  const handleDelete = (slug: string, isCustom: boolean) => {
    if (confirm('Supprimer ce produit ?')) {
      if (isCustom) {
        removeCustomProduct(slug);
      } else {
        toggleProductVisibility(slug);
      }
      setSelectedProduct(null);
      setEditData(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-stone-800">Gestion des Produits</h2>
        <button onClick={handleCreateNew} className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
          <Plus className="w-4 h-4" /> Nouveau produit
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Product List */}
        <div className="lg:col-span-1 space-y-2 max-h-[600px] overflow-y-auto pr-2">
          {allProducts.map((product) => {
            const override = productOverrides.find((p) => p.slug === product.slug);
            const isHidden = hiddenProducts.includes(product.slug);
            return (
              <div key={product.slug} className={`relative ${isHidden ? 'opacity-50' : ''}`}>
                <button
                  onClick={() => handleSelectProduct(product.slug, product.isCustom)}
                  className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${selectedProduct === product.slug ? 'border-amber-500 bg-amber-50' : 'border-stone-200 hover:border-stone-300'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-stone-100 overflow-hidden flex-shrink-0">
                      <Image src={override?.images?.[0] || product.images[0]} alt={product.name} width={40} height={40} className="object-cover w-full h-full" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-stone-800 truncate">{override?.name || product.name}</p>
                      <p className="text-sm text-stone-500">{(override?.price || product.price).toFixed(2)}€</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {product.isCustom && <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">Ajouté</span>}
                      {override && !product.isCustom && <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded">Modifié</span>}
                    </div>
                  </div>
                </button>
                <button onClick={() => toggleProductVisibility(product.slug)} className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-600">
                  {isHidden ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            );
          })}
        </div>

        {/* Edit Form */}
        <div className="lg:col-span-2">
          {(selectedProduct || isCreating) && editData ? (
            <div className="space-y-4 bg-stone-50 rounded-xl p-6">
              <h3 className="text-lg font-medium text-stone-800">
                {isCreating ? 'Nouveau produit' : 'Modifier le produit'}
              </h3>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-stone-700">Image</label>
                <div className="flex gap-4 items-start">
                  <div className="w-20 h-20 rounded-lg bg-white overflow-hidden">
                    <Image src={editData.image} alt="Aperçu" width={80} height={80} className="object-cover w-full h-full" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {availableImages.map((img) => (
                      <button key={img} onClick={() => setEditData({ ...editData, image: img })} className={`w-10 h-10 rounded border-2 overflow-hidden ${editData.image === img ? 'border-amber-500' : 'border-stone-200'}`}>
                        <Image src={img} alt="" width={40} height={40} className="object-cover w-full h-full" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-stone-700">Nom</label>
                  <input type="text" value={editData.name} onChange={(e) => setEditData({ ...editData, name: e.target.value })} className="w-full px-3 py-2 border border-stone-300 rounded-lg" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-stone-700">Prix (€)</label>
                  <input type="number" step="0.01" value={editData.price} onChange={(e) => setEditData({ ...editData, price: parseFloat(e.target.value) || 0 })} className="w-full px-3 py-2 border border-stone-300 rounded-lg" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-stone-700">Sous-titre</label>
                <input type="text" value={editData.subtitle} onChange={(e) => setEditData({ ...editData, subtitle: e.target.value })} className="w-full px-3 py-2 border border-stone-300 rounded-lg" />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-stone-700">Description</label>
                <textarea value={editData.description} onChange={(e) => setEditData({ ...editData, description: e.target.value })} rows={4} className="w-full px-3 py-2 border border-stone-300 rounded-lg resize-none" />
              </div>

              <div className="flex gap-3">
                <button onClick={handleSave} className="px-6 py-2 bg-amber-800 text-white rounded-lg hover:bg-amber-900 font-medium">
                  {isCreating ? 'Créer' : 'Sauvegarder'}
                </button>
                {selectedProduct && editData.isCustom && (
                  <button onClick={() => handleDelete(selectedProduct, true)} className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium flex items-center gap-2">
                    <Trash2 className="w-4 h-4" /> Supprimer
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-stone-500 bg-stone-50 rounded-xl p-12">
              <p>Sélectionnez un produit ou créez-en un nouveau</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function PacksSection() {
  const {
    packOverrides,
    setPackOverride,
    customPacks,
    addCustomPack,
    removeCustomPack,
    hiddenPacks,
    togglePackVisibility,
  } = useAdminStore();

  const [selectedPack, setSelectedPack] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [editData, setEditData] = useState<{
    name: string;
    subtitle: string;
    description: string;
    price: number;
    originalPrice: number;
    image: string;
    duration: string;
    isCustom?: boolean;
  } | null>(null);

  const availableImages = [
    '/images/1.png', '/images/2.png', '/images/3.png', '/images/4.png', '/images/5.png', '/images/6.png',
    '/images/vetiver.jpg', '/images/nere.jpg', '/images/acore.jpg', '/images/ditakh.jpg',
  ];

  const allPacks = [
    ...packs.map((p) => ({ ...p, isCustom: false })),
    ...customPacks.map((p) => ({ ...p, isCustom: true })),
  ];

  const handleSelectPack = (slug: string, isCustom: boolean) => {
    if (isCustom) {
      const pack = customPacks.find((p) => p.slug === slug);
      if (pack) {
        setSelectedPack(slug);
        setIsCreating(false);
        setEditData({
          name: pack.name,
          subtitle: pack.subtitle,
          description: pack.description,
          price: pack.price,
          originalPrice: pack.originalPrice,
          image: pack.images[0],
          duration: pack.duration,
          isCustom: true,
        });
      }
    } else {
      const pack = packs.find((p) => p.slug === slug);
      const override = packOverrides.find((p) => p.slug === slug);
      if (pack) {
        setSelectedPack(slug);
        setIsCreating(false);
        setEditData({
          name: override?.name || pack.name,
          subtitle: override?.subtitle || pack.subtitle,
          description: override?.description || pack.description,
          price: override?.price || pack.price,
          originalPrice: override?.originalPrice || pack.originalPrice,
          image: override?.images?.[0] || pack.images[0],
          duration: pack.duration,
          isCustom: false,
        });
      }
    }
  };

  const handleCreateNew = () => {
    setIsCreating(true);
    setSelectedPack(null);
    setEditData({
      name: '',
      subtitle: '',
      description: '',
      price: 29.90,
      originalPrice: 39.90,
      image: '/images/1.png',
      duration: '3 semaines',
      isCustom: true,
    });
  };

  const handleSave = () => {
    if (!editData) return;

    if (isCreating) {
      const slug = editData.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      addCustomPack({
        id: `custom-pack-${Date.now()}`,
        slug,
        name: editData.name,
        subtitle: editData.subtitle,
        description: editData.description,
        price: editData.price,
        originalPrice: editData.originalPrice,
        images: [editData.image],
        categories: ['bien-etre'],
        duration: editData.duration,
      });
      alert('Pack créé !');
      setIsCreating(false);
      setEditData(null);
    } else if (selectedPack) {
      if (editData.isCustom) {
        useAdminStore.getState().updateCustomPack(selectedPack, {
          name: editData.name,
          subtitle: editData.subtitle,
          description: editData.description,
          price: editData.price,
          originalPrice: editData.originalPrice,
          images: [editData.image],
          duration: editData.duration,
        });
      } else {
        setPackOverride({
          slug: selectedPack,
          name: editData.name,
          subtitle: editData.subtitle,
          description: editData.description,
          price: editData.price,
          originalPrice: editData.originalPrice,
          images: [editData.image],
        });
      }
      alert('Pack mis à jour !');
    }
  };

  const handleDelete = (slug: string, isCustom: boolean) => {
    if (confirm('Supprimer ce pack ?')) {
      if (isCustom) {
        removeCustomPack(slug);
      } else {
        togglePackVisibility(slug);
      }
      setSelectedPack(null);
      setEditData(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-stone-800">Gestion des Packs</h2>
        <button onClick={handleCreateNew} className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
          <Plus className="w-4 h-4" /> Nouveau pack
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pack List */}
        <div className="lg:col-span-1 space-y-2 max-h-[600px] overflow-y-auto pr-2">
          {allPacks.map((pack) => {
            const override = packOverrides.find((p) => p.slug === pack.slug);
            const isHidden = hiddenPacks.includes(pack.slug);
            return (
              <div key={pack.slug} className={`relative ${isHidden ? 'opacity-50' : ''}`}>
                <button
                  onClick={() => handleSelectPack(pack.slug, pack.isCustom)}
                  className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${selectedPack === pack.slug ? 'border-amber-500 bg-amber-50' : 'border-stone-200 hover:border-stone-300'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-stone-100 overflow-hidden flex-shrink-0">
                      <Image src={override?.images?.[0] || pack.images[0]} alt={pack.name} width={40} height={40} className="object-cover w-full h-full" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-stone-800 truncate">{override?.name || pack.name}</p>
                      <p className="text-sm text-stone-500">{(override?.price || pack.price).toFixed(2)}€</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {pack.isCustom && <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">Ajouté</span>}
                      {override && !pack.isCustom && <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded">Modifié</span>}
                    </div>
                  </div>
                </button>
                <button onClick={() => togglePackVisibility(pack.slug)} className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-600">
                  {isHidden ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            );
          })}
        </div>

        {/* Edit Form */}
        <div className="lg:col-span-2">
          {(selectedPack || isCreating) && editData ? (
            <div className="space-y-4 bg-stone-50 rounded-xl p-6">
              <h3 className="text-lg font-medium text-stone-800">
                {isCreating ? 'Nouveau pack' : 'Modifier le pack'}
              </h3>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-stone-700">Image</label>
                <div className="flex gap-4 items-start">
                  <div className="w-20 h-20 rounded-lg bg-white overflow-hidden">
                    <Image src={editData.image} alt="Aperçu" width={80} height={80} className="object-cover w-full h-full" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {availableImages.map((img) => (
                      <button key={img} onClick={() => setEditData({ ...editData, image: img })} className={`w-10 h-10 rounded border-2 overflow-hidden ${editData.image === img ? 'border-amber-500' : 'border-stone-200'}`}>
                        <Image src={img} alt="" width={40} height={40} className="object-cover w-full h-full" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-stone-700">Nom</label>
                  <input type="text" value={editData.name} onChange={(e) => setEditData({ ...editData, name: e.target.value })} className="w-full px-3 py-2 border border-stone-300 rounded-lg" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-stone-700">Prix (€)</label>
                  <input type="number" step="0.01" value={editData.price} onChange={(e) => setEditData({ ...editData, price: parseFloat(e.target.value) || 0 })} className="w-full px-3 py-2 border border-stone-300 rounded-lg" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-stone-700">Prix barré (€)</label>
                  <input type="number" step="0.01" value={editData.originalPrice} onChange={(e) => setEditData({ ...editData, originalPrice: parseFloat(e.target.value) || 0 })} className="w-full px-3 py-2 border border-stone-300 rounded-lg" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-stone-700">Sous-titre</label>
                  <input type="text" value={editData.subtitle} onChange={(e) => setEditData({ ...editData, subtitle: e.target.value })} className="w-full px-3 py-2 border border-stone-300 rounded-lg" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-stone-700">Durée</label>
                  <input type="text" value={editData.duration} onChange={(e) => setEditData({ ...editData, duration: e.target.value })} className="w-full px-3 py-2 border border-stone-300 rounded-lg" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-stone-700">Description</label>
                <textarea value={editData.description} onChange={(e) => setEditData({ ...editData, description: e.target.value })} rows={4} className="w-full px-3 py-2 border border-stone-300 rounded-lg resize-none" />
              </div>

              <div className="flex gap-3">
                <button onClick={handleSave} className="px-6 py-2 bg-amber-800 text-white rounded-lg hover:bg-amber-900 font-medium">
                  {isCreating ? 'Créer' : 'Sauvegarder'}
                </button>
                {selectedPack && editData.isCustom && (
                  <button onClick={() => handleDelete(selectedPack, true)} className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium flex items-center gap-2">
                    <Trash2 className="w-4 h-4" /> Supprimer
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-stone-500 bg-stone-50 rounded-xl p-12">
              <p>Sélectionnez un pack ou créez-en un nouveau</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
