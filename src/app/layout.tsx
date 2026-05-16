import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Step Correct",
    template: "%s | Step Correct",
  },
  description:
    "Streetwear, stickers, and limited drops. Stand ten toes down. Step correct.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}