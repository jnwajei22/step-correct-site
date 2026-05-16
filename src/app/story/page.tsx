import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Story",
  description: "The story behind Step Correct.",
};

export default function StoryPage() {
  return (
    <>
      <Header />

      <main className="site">
        <section className="container page-hero">
          <p className="kicker">The Story</p>

          <h1 className="page-title">
            Stand on who you are. Look good doing it.
          </h1>

          <p className="page-copy">
            Step Correct was built from the idea that how you move matters.
            Confidence, discipline, style, and ambition all show up before you
            even say a word.
          </p>
        </section>

        <section className="container section">
          <div className="story-layout">
            <article className="story-card">
              <p className="kicker">Origin</p>
              <h2>Young, hungry, and intentional.</h2>
              <p>
                Step Correct started with a simple mindset: live fully, move
                with purpose, and carry yourself like your future is already in
                motion. At 21, the founder is building more than a clothing
                brand. He is building a visual language for people who want to
                look sharp while chasing something bigger.
              </p>
              <p>
                The brand is for the people figuring life out in real time:
                working, creating, learning, taking risks, and still making sure
                they step outside looking like they meant to be there.
              </p>
            </article>

            <aside className="story-pullout">
              <span>STEP</span>
              <span>CORRECT</span>
            </aside>
          </div>
        </section>

        <section className="container section">
          <div className="grid">
            <article className="card">
              <p className="card-label">01</p>
              <h3>Move with intent.</h3>
              <p>
                Every step should feel deliberate. The clothes are simple, bold,
                and made to match that energy.
              </p>
            </article>

            <article className="card">
              <p className="card-label">02</p>
              <h3>Look like yourself.</h3>
              <p>
                Step Correct is not about pretending to be somebody else. It is
                about showing up as the best version of who you already are.
              </p>
            </article>

            <article className="card">
              <p className="card-label">03</p>
              <h3>Build the life.</h3>
              <p>
                The brand carries a young energy: ambition, motion, confidence,
                and the belief that your life can actually become what you keep
                saying it will be.
              </p>
            </article>
          </div>
        </section>

        <section className="container section">
          <div className="contact-card">
            <p className="kicker">Brand Rule</p>
            <h2>Do not just dress for the moment. Step into it.</h2>
            <p>
              Step Correct is for the ones who want to live better, look better,
              and move like they have somewhere worth going.
            </p>

            <div className="actions">
              <a className="btn primary" href="/drop">
                Shop the Drop
              </a>

              <a className="btn" href="/">
                Back Home
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}