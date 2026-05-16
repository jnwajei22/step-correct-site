"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Drop", href: "/drop" },
  { label: "Story", href: "/story" },
];

export default function Header() {
  const { itemCount } = useCart();

  return (
    <header className="site-header">
      <Link href="/" className="site-logo" aria-label="Step Correct home">
        <span className="site-logo-mark">SC</span>
        <span className="site-logo-text">STEP CORRECT</span>
      </Link>

      <nav className="site-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="site-nav-link">
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="site-header-actions">
        <Link href="/cart" className="site-cart-link" aria-label="View cart">
          Cart{itemCount > 0 ? ` (${itemCount})` : ""}
        </Link>

        <Link href="/drop" className="site-header-cta">
          Shop Drop
        </Link>
      </div>
    </header>
  );
}