"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/products";

export default function CheckoutClient() {
  const { items, subtotal } = useCart();
  const hasItems = items.length > 0;

  return (
    <>
      <section className="container page-hero">
        <p className="kicker">Checkout</p>

        <h1 className="page-title">Secure checkout.</h1>

        <p className="page-copy">
          This page is scaffolded for Stripe integration. Payment fields should
          come from Stripe Elements or embedded checkout, not homemade card
          inputs. Homemade payment forms are where PCI compliance starts
          sharpening a knife.
        </p>
      </section>

      {!hasItems ? (
        <section className="container section">
          <div className="empty-cart">
            <p className="kicker">Empty Checkout</p>
            <h2>No items to checkout.</h2>
            <p>
              Add something from the drop before starting checkout. The payment
              flow should only activate when the customer has a real cart.
            </p>

            <div className="actions">
              <Link className="btn primary" href="/drop">
                Shop the Drop
              </Link>

              <Link className="btn" href="/cart">
                View Cart
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <section className="container section checkout-layout">
          <div className="checkout-form-shell">
            <section className="checkout-panel">
              <p className="checkout-step">01</p>
              <h2>Contact</h2>

              <div className="form-grid">
                <label>
                  Email
                  <input type="email" placeholder="customer@email.com" />
                </label>

                <label>
                  Phone
                  <input type="tel" placeholder="Optional" />
                </label>
              </div>
            </section>

            <section className="checkout-panel">
              <p className="checkout-step">02</p>
              <h2>Shipping</h2>

              <div className="form-grid">
                <label>
                  First Name
                  <input type="text" placeholder="First name" />
                </label>

                <label>
                  Last Name
                  <input type="text" placeholder="Last name" />
                </label>

                <label className="form-full">
                  Address
                  <input type="text" placeholder="Street address" />
                </label>

                <label>
                  City
                  <input type="text" placeholder="City" />
                </label>

                <label>
                  State
                  <input type="text" placeholder="State" />
                </label>

                <label>
                  ZIP
                  <input type="text" placeholder="ZIP code" />
                </label>
              </div>
            </section>

            <section className="checkout-panel">
              <p className="checkout-step">03</p>
              <h2>Payment</h2>

              <div className="stripe-placeholder">
                <p className="kicker">Stripe Element Placeholder</p>
                <p>
                  This area will be replaced by Stripe’s secure payment element
                  when payment processing is wired.
                </p>
              </div>
            </section>
          </div>

          <aside className="checkout-summary">
            <p className="kicker">Order Summary</p>

            <div className="checkout-summary-items">
              {items.map((item) => (
                <div className="checkout-summary-item" key={item.id}>
                  <div>
                    <strong>{item.name}</strong>
                    <span>
                      {item.size ? `Size ${item.size}` : "One Size"} ×{" "}
                      {item.quantity}
                    </span>
                  </div>

                  <strong>{formatPrice(item.price * item.quantity)}</strong>
                </div>
              ))}
            </div>

            <div className="summary-line">
              <span>Subtotal</span>
              <strong>{formatPrice(subtotal)}</strong>
            </div>

            <div className="summary-line">
              <span>Shipping</span>
              <strong>TBD</strong>
            </div>

            <div className="summary-line">
              <span>Taxes</span>
              <strong>TBD</strong>
            </div>

            <div className="summary-total">
              <span>Total</span>
              <strong>{formatPrice(subtotal)}</strong>
            </div>

            <button className="btn primary summary-button" type="button" disabled>
              Stripe Coming Soon
            </button>

            <Link className="text-link" href="/cart">
              Back to cart →
            </Link>
          </aside>
        </section>
      )}
    </>
  );
}