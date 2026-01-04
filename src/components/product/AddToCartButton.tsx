'use client';

import { ShoppingBag, Check } from 'lucide-react';
import { useState } from 'react';
import { useCartStore } from '@/lib/store';
import Button from '@/components/ui/Button';

interface AddToCartButtonProps {
  id: string;
  type: 'product' | 'pack';
  name: string;
  price: number;
  image?: string;
  weight?: string;
  className?: string;
}

export default function AddToCartButton({
  id,
  type,
  name,
  price,
  image,
  weight,
  className,
}: AddToCartButtonProps) {
  const [isAdded, setIsAdded] = useState(false);
  const { addItem, openCart } = useCartStore();

  const handleAddToCart = () => {
    addItem({
      id: `${type}-${id}`,
      type,
      [type === 'product' ? 'productId' : 'packId']: id,
      name,
      price,
      image: image || '',
      weight,
    });

    setIsAdded(true);
    openCart();

    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <Button
      onClick={handleAddToCart}
      className={className}
      size="lg"
      disabled={isAdded}
    >
      {isAdded ? (
        <>
          <Check className="h-5 w-5 mr-2" />
          Ajouté au panier
        </>
      ) : (
        <>
          <ShoppingBag className="h-5 w-5 mr-2" />
          Ajouter au panier
        </>
      )}
    </Button>
  );
}
