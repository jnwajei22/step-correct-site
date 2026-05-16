import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CheckoutClient from "./CheckoutClient";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Secure Step Correct checkout.",
};

export default function CheckoutPage() {
  return (
    <>
      <Header />

      <main className="site">
        <CheckoutClient />
      </main>

      <Footer />
    </>
  );
}