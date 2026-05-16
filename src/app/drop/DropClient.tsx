"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { formatPrice, products, type Product, type ProductSize } from "@/lib/products";

type SelectedSizes = Record<string, ProductSize | "">;

function getInitialSelectedSizes() {
  return products.reduce<SelectedSizes>((sizes, product) => {
    sizes[product.id] = "";
    return sizes;
  }, {});
}

function canAddToCart(product: Product) {
  return product.status === "available" || product.status === "limited";
}

export default function DropClient() {
  const { addItem, itemCount } = useCart();
  const [selectedSizes, setSelectedSizes] = useState<SelectedSizes>(
    getInitialSelectedSizes,
  );
  const [feedback, setFeedback] = useState("");

  function handleSizeChange(productId: string, size: ProductSize) {
    setSelectedSizes((current) => ({
      ...current,
      [productId]: size,
    }));
  }

  function handleAddToCart(product: Product) {
    if (!canAddToCart(product)) {
      setFeedback(`${product.name} is not available yet.`);
      return;
    }

    const selectedSize = selectedSizes[product.id];

    if (product.hasSizes && !selectedSize) {
      setFeedback(`Choose a size for ${product.name}.`);
      return;
    }

    addItem({
      product,
      size: product.hasSizes ? selectedSize || undefined : undefined,
      quantity: 1,
    });

    setFeedback(`${product.name} added to cart.`);
  }

  return (
    <>
      <section className="container page-hero">
        <p className="kicker">The Drop</p>

        <h1 className="page-title">Shop the first Step Correct release.</h1>

        <p className="page-copy">
          Shirts, stickers, and limited pieces built for people who move with
          intent. Pick your item, choose your size, and check out through a
          branded flow built to feel native to Step Correct.
        </p>

        <div className="actions">
          <a className="btn primary" href="#first-drop">
            Shop Items
          </a>

          <Link className="btn" href="/cart">
            View Cart{itemCount > 0 ? ` (${itemCount})` : ""}
          </Link>
        </div>
      </section>

      <section className="container section" id="first-drop">
        <div className="drop-toolbar">
          <div>
            <p className="kicker">Current Release</p>
            <h2>First Drop</h2>
          </div>

          <p className="drop-note">Direct checkout scaffold</p>
        </div>

        {feedback ? <p className="product-feedback">{feedback}</p> : null}

        <div className="product-grid">
          {products.map((product) => {
            const isPurchasable = canAddToCart(product);

            return (
              <article className="product-card" key={product.id}>
                <div className="product-image">
                  <span>{product.imageLabel}</span>
                </div>

                <div className="product-content">
                  <div className="product-meta">
                    <span>{product.displayCategory}</span>
                    <span>{product.displayStatus}</span>
                  </div>

                  <h3>{product.name}</h3>
                  <p>{product.description}</p>

                  <div className="product-purchase-row">
                    <strong>{formatPrice(product.price)}</strong>

                    {product.hasSizes && product.sizes ? (
                      <select
                        className="product-select"
                        aria-label={`Choose size for ${product.name}`}
                        value={selectedSizes[product.id]}
                        onChange={(event) =>
                          handleSizeChange(
                            product.id,
                            event.target.value as ProductSize,
                          )
                        }
                      >
                        <option value="" disabled>
                          Size
                        </option>

                        {product.sizes.map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <span className="product-one-size">One Size</span>
                    )}
                  </div>

                  <button
                    className="btn primary product-button"
                    type="button"
                    disabled={!isPurchasable}
                    onClick={() => handleAddToCart(product)}
                  >
                    {isPurchasable ? "Add to Cart" : "Unavailable"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container section">
        <div className="checkout-preview">
          <div>
            <p className="kicker">Storefront Flow</p>
            <h2>Browse, cart, checkout. All under the brand.</h2>
            <p>
              Customers can now add items from the drop into a real local cart.
              Next, the cart and checkout pages need to read from that same cart
              state instead of using dummy items.
            </p>
          </div>

          <div className="checkout-box">
            <p className="checkout-label">Cart Status</p>

            <div className="checkout-line">
              <span>Items in cart</span>
              <strong>{itemCount}</strong>
            </div>

            <div className="checkout-line">
              <span>Cart page</span>
              <strong>Ready to wire</strong>
            </div>

            <div className="checkout-total">
              <span>Checkout</span>
              <strong>Stripe-ready</strong>
            </div>

            <Link className="btn primary product-button" href="/cart">
              View Cart
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}