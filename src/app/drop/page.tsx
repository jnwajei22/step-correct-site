import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DropClient from "./DropClient";

export const metadata: Metadata = {
  title: "Drop",
  description: "Shop the latest Step Correct shirts, stickers, and limited releases.",
};

export default function DropPage() {
  return (
    <>
      <Header />

      <main className="site">
        <DropClient />
      </main>

      <Footer />
    </>
  );
}