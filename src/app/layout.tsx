import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Step Correct | Streetwear & Stickers",
  description: "Streetwear, stickers, and limited drops. Move correct. Dress correct.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
