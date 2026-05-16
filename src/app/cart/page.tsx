import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartClient from "./CartClient";

export const metadata: Metadata = {
  title: "Cart",
  description: "Review your Step Correct cart before checkout.",
};

export default function CartPage() {
  return (
    <>
      <Header />

      <main className="site">
        <CartClient />
      </main>

      <Footer />
    </>
  );
}