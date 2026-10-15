import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../data/products';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface PlacedOrder {
  orderId: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shippingFee: number;
  total: number;
  shippingDetails: {
    fullName: string;
    email: string;
    phone: string;
    addressLine: string;
    city: string;
    state: string;
    pincode: string;
  };
  paymentMethod: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  couponCode: string;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  subtotal: number; // in INR
  discountAmount: number;
  shippingFee: number;
  totalAmount: number;
  itemCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  lastOrder: PlacedOrder | null;
  setLastOrder: (order: PlacedOrder | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'gandhaniti_cart_v1';
const ORDER_STORAGE_KEY = 'gandhaniti_last_order_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [couponCode, setCouponCode] = useState<string>('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [lastOrder, setLastOrder] = useState<PlacedOrder | null>(() => {
    try {
      const saved = localStorage.getItem(ORDER_STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // storage unavailable or full
    }
  }, [cart]);

  useEffect(() => {
    try {
      if (lastOrder) {
        localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(lastOrder));
      }
    } catch {
      // storage unavailable
    }
  }, [lastOrder]);

  const addToCart = (product: Product, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    setCouponCode('');
  };

  const applyCoupon = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'KANNAUJ10') {
      setCouponCode('KANNAUJ10');
      return { success: true, message: '10% Kannauj Heritage discount applied successfully.' };
    }
    return { success: false, message: 'Invalid token. Use coupon KANNAUJ10 for 10% off.' };
  };

  const removeCoupon = () => {
    setCouponCode('');
  };

  // Financial calculations
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const isCouponApplied = couponCode === 'KANNAUJ10';
  const discountAmount = isCouponApplied ? Math.round(subtotal * 0.1) : 0;
  const discountedSubtotal = subtotal - discountAmount;
  // Shipping flat ₹70, free above ₹2,500
  const shippingFee = subtotal === 0 ? 0 : discountedSubtotal >= 2500 ? 0 : 70;
  const totalAmount = subtotal === 0 ? 0 : discountedSubtotal + shippingFee;
  const itemCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        couponCode,
        applyCoupon,
        removeCoupon,
        subtotal,
        discountAmount,
        shippingFee,
        totalAmount,
        itemCount,
        isCartOpen,
        setIsCartOpen,
        lastOrder,
        setLastOrder
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
