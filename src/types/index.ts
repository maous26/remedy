export interface Product {
  id: string;
  name: string;
  slug: string;
  subtitle: string;
  description: string;
  origin: string;
  history: string;
  benefits: string[];
  usages: Usage[];
  precautions: string;
  price: number;
  weight: string;
  stock: number;
  images: string[];
  categories: string[];
}

export interface Usage {
  method: string;
  instructions: string;
}

export interface Pack {
  id: string;
  name: string;
  slug: string;
  subtitle: string;
  description: string;
  targetProblem: string;
  synergy: string;
  protocol: string;
  duration: string;
  price: number;
  originalPrice: number;
  images: string[];
  categories: string[];
  items: PackItem[];
}

export interface PackItem {
  id: string;
  productId: string;
  quantity: string;
  product?: Product;
}

export interface CartItem {
  id: string;
  type: 'product' | 'pack';
  productId?: string;
  packId?: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  weight?: string;
}

export interface ShippingAddress {
  name: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  phone?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  status: OrderStatus;
  email: string;
  shippingAddress: ShippingAddress;
  subtotal: number;
  shippingCost: number;
  total: number;
  currency: string;
  items: OrderItem[];
  createdAt: Date;
}

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  productId?: string;
  packId?: string;
}

export type OrderStatus =
  | 'PENDING'
  | 'PAID'
  | 'PROCESSING'
  | 'SHIPPED'
  | 'DELIVERED'
  | 'CANCELLED'
  | 'REFUNDED';

export interface ShippingOption {
  id: string;
  name: string;
  description: string;
  price: number;
  estimatedDays: string;
}
