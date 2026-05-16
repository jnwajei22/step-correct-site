export type ProductCategory = "shirt" | "sticker" | "bundle" | "accessory";

export type ProductStatus = "available" | "limited" | "sold_out" | "coming_soon";

export type ProductSize = "S" | "M" | "L" | "XL" | "2XL";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  displayCategory: string;
  price: number;
  status: ProductStatus;
  displayStatus: string;
  description: string;
  imageLabel: string;
  hasSizes: boolean;
  sizes?: ProductSize[];
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: "step-correct-logo-tee",
    name: "Step Correct Logo Tee",
    category: "shirt",
    displayCategory: "Shirt",
    price: 35,
    status: "available",
    displayStatus: "Available",
    description:
      "A clean everyday graphic tee built around the Step Correct identity.",
    imageLabel: "Shirt",
    hasSizes: true,
    sizes: ["S", "M", "L", "XL", "2XL"],
    featured: true,
  },
  {
    id: "stand-ten-toes-tee",
    name: "Stand Ten Toes Tee",
    category: "shirt",
    displayCategory: "Shirt",
    price: 40,
    status: "available",
    displayStatus: "Available",
    description:
      "A statement tee for moving with confidence and standing on business.",
    imageLabel: "Shirt",
    hasSizes: true,
    sizes: ["S", "M", "L", "XL", "2XL"],
    featured: true,
  },
  {
    id: "correct-steps-sticker-pack",
    name: "Correct Steps Sticker Pack",
    category: "sticker",
    displayCategory: "Sticker Pack",
    price: 10,
    status: "available",
    displayStatus: "Available",
    description:
      "A mixed sticker pack for laptops, bottles, toolboxes, cars, and daily carry.",
    imageLabel: "Sticker Pack",
    hasSizes: false,
    featured: true,
  },
  {
    id: "first-drop-bundle",
    name: "First Drop Bundle",
    category: "bundle",
    displayCategory: "Bundle",
    price: 50,
    status: "limited",
    displayStatus: "Limited",
    description:
      "One shirt plus one sticker pack from the first Step Correct release.",
    imageLabel: "Bundle",
    hasSizes: true,
    sizes: ["S", "M", "L", "XL", "2XL"],
    featured: false,
  },
];

export const featuredProducts = products.filter((product) => product.featured);

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}