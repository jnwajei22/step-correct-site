"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/products";

export default function CartClient() {
  const { items, subtotal, updateQuantity, removeItem, clearCart } = useCart();

  const hasItems = items.length > 0;

  return (
    <>
      <section className="container page-hero">
        <p className="kicker">Cart</p>

        <h1 className="page-title">Review your order.</h1>

        <p className="page-copy">
          Check your items, adjust quantities, and continue to checkout when
          everything looks correct.
        </p>
      </section>

      <section className="container section cart-layout">
        <div className="cart-items">
          {!hasItems ? (
            <div className="empty-cart">
              <p className="kicker">Empty Cart</p>
              <h2>Your cart is waiting on correct steps.</h2>
              <p>
                Add shirts, stickers, or bundles from the drop before heading to
                checkout.
              </p>

              <Link className="btn primary" href="/drop">
                Shop the Drop
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <article className="cart-item" key={item.id}>
                <div className="cart-item-image">
                  <span>{item.imageLabel}</span>
                </div>

                <div className="cart-item-details">
                  <p className="cart-item-label">
                    {item.size ? `Size ${item.size}` : "One Size"}
                  </p>

                  <h2>{item.name}</h2>

                  <div className="cart-item-actions">
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      +
                    </button>

                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <strong>{formatPrice(item.price * item.quantity)}</strong>
              </article>
            ))
          )}
        </div>

        <aside className="cart-summary">
          <p className="kicker">Order Summary</p>

          <div className="summary-line">
            <span>Subtotal</span>
            <strong>{formatPrice(subtotal)}</strong>
          </div>

          <div className="summary-line">
            <span>Shipping</span>
            <strong>Calculated later</strong>
          </div>

          <div className="summary-line">
            <span>Taxes</span>
            <strong>Calculated later</strong>
          </div>

          <div className="summary-total">
            <span>Estimated Total</span>
            <strong>{formatPrice(subtotal)}</strong>
          </div>

          {hasItems ? (
            <>
              <Link className="btn primary summary-button" href="/checkout">
                Proceed to Checkout
              </Link>

              <button
                className="btn summary-button cart-clear-button"
                type="button"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </>
          ) : (
            <Link className="btn primary summary-button" href="/drop">
              Shop the Drop
            </Link>
          )}

          <Link className="text-link" href="/drop">
            Continue shopping →
          </Link>
        </aside>
      </section>
    </>
  );
}