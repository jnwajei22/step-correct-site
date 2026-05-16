"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  formatPrice,
  getProductById,
  type Product,
  type ProductSize,
} from "@/lib/products";

export type CartItem = {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  size?: ProductSize;
  imageLabel: string;
};

type AddToCartInput = {
  product: Product;
  quantity?: number;
  size?: ProductSize;
};

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  formattedSubtotal: string;
  addItem: (input: AddToCartInput) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = "step-correct-cart";

function buildCartItemId(productId: string, size?: ProductSize) {
  return size ? `${productId}-${size}` : productId;
}

function normalizeQuantity(quantity: number) {
  if (!Number.isFinite(quantity)) return 1;
  return Math.max(1, Math.floor(quantity));
}

function readStoredCart(): CartItem[] {
  if (typeof window === "undefined") return [];

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];

    const parsed = JSON.parse(stored);

    if (!Array.isArray(parsed)) return [];

    return parsed.filter((item): item is CartItem => {
      return (
        typeof item.id === "string" &&
        typeof item.productId === "string" &&
        typeof item.name === "string" &&
        typeof item.price === "number" &&
        typeof item.quantity === "number" &&
        typeof item.imageLabel === "string"
      );
    });
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hasLoadedCart, setHasLoadedCart] = useState(false);

  useEffect(() => {
    setItems(readStoredCart());
    setHasLoadedCart(true);
  }, []);

  useEffect(() => {
    if (!hasLoadedCart) return;

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hasLoadedCart]);

  const cartValue = useMemo<CartContextValue>(() => {
    const itemCount = items.reduce((total, item) => total + item.quantity, 0);

    const subtotal = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );

    return {
      items,
      itemCount,
      subtotal,
      formattedSubtotal: formatPrice(subtotal),

      addItem: ({ product, quantity = 1, size }) => {
        const safeQuantity = normalizeQuantity(quantity);
        const itemId = buildCartItemId(product.id, size);

        setItems((currentItems) => {
          const existingItem = currentItems.find((item) => item.id === itemId);

          if (existingItem) {
            return currentItems.map((item) =>
              item.id === itemId
                ? { ...item, quantity: item.quantity + safeQuantity }
                : item,
            );
          }

          return [
            ...currentItems,
            {
              id: itemId,
              productId: product.id,
              name: product.name,
              price: product.price,
              quantity: safeQuantity,
              size,
              imageLabel: product.imageLabel,
            },
          ];
        });
      },

      removeItem: (itemId) => {
        setItems((currentItems) =>
          currentItems.filter((item) => item.id !== itemId),
        );
      },

      updateQuantity: (itemId, quantity) => {
        const safeQuantity = Math.floor(quantity);

        if (safeQuantity <= 0) {
          setItems((currentItems) =>
            currentItems.filter((item) => item.id !== itemId),
          );
          return;
        }

        setItems((currentItems) =>
          currentItems.map((item) =>
            item.id === itemId ? { ...item, quantity: safeQuantity } : item,
          ),
        );
      },

      clearCart: () => {
        setItems([]);
      },
    };
  }, [items]);

  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider.");
  }

  return context;
}

export function useCartProduct(productId: string) {
  const product = getProductById(productId);

  if (!product) {
    throw new Error(`Product not found: ${productId}`);
  }

  return product;
}