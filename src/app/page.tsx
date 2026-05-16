import Header from "@/components/Header";
import Footer from "@/components/Footer";

const featuredProducts = [
  {
    title: "Graphic Tees",
    text: "Bold front and back graphics built for the first Step Correct release.",
  },
  {
    title: "Sticker Packs",
    text: "Small-format pieces for laptops, bottles, toolboxes, cars, and every other questionable adhesive decision.",
  },
  {
    title: "Limited Drops",
    text: "Short runs, clean launch windows, and pieces that do not sit around begging for attention.",
  },
];

const lookbookItems = [
  "Front tee",
  "Back tee",
  "Sticker sheet",
  "Lifestyle shot",
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="site">
        <section className="container hero" id="top">

          <h1 className="hero-title">
            <span>Stand Ten toes down.</span>
            <span>STEP CORRECT.</span>
          </h1>

          <p className="hero-copy">
            Step Correct is a streetwear and sticker brand built around intent,
            confidence, and showing up like your next move matters.
          </p>

          <div className="actions">
            <a className="btn primary" href="/drop">
              Preview the Drop
            </a>

            <a className="btn" href="/story">
              Read the Story
            </a>
          </div>
        </section>

        <section className="marquee" aria-label="Drop announcement">
          <div className="marquee-track">
            {Array.from({ length: 12 }).map((_, index) => (
              <span key={index}>INAUGURAL DROP COMING SOON</span>
            ))}
          </div>
        </section>

        <section className="container section" id="featured">
          <div className="section-heading">
            <p className="kicker">Featured Drop</p>
            <h2>First pieces. Clean launch. No fake empire cosplay.</h2>
          </div>

          <div className="grid">
            {featuredProducts.map((product) => (
              <article className="card" key={product.title}>
                <p className="card-label">Coming Soon</p>
                <h3>{product.title}</h3>
                <p>{product.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="container section" id="lookbook">
          <div className="split">
            <div className="card card-large">
              <p className="kicker">Lookbook</p>
              <h2>Photo slots ready.</h2>
              <p>
                Replace these blocks with product photos, mockups, or a simple
                grid from the first shoot. The layout should feel dark,
                editorial, and sharp — not a contractor site wearing a tee.
              </p>

              <a className="text-link" href="/drop">
                View the full drop →
              </a>
            </div>

            <div className="lookbook-grid">
              {lookbookItems.map((item) => (
                <div className="lookbook-tile" key={item}>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container section" id="contact">
          <div className="contact-card">
            <p className="kicker">Contact</p>
            <h2>First drop coming soon.</h2>
            <p>
              Follow the launch, watch the drop build, or reach out for collabs,
              questions, and wholesale conversations.
            </p>

            <div className="actions">
              <a className="btn primary" href="mailto:hello@stepcorrect.com">
                Email Step Correct
              </a>

              <a
                className="btn"
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Instagram
              </a>

              <a
                className="btn"
                href="https://tiktok.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                TikTok
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}