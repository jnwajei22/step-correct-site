const products = [
  { title: "Graphic Tees", text: "Drop-ready shirts with bold front/back graphics and clean product cards." },
  { title: "Sticker Packs", text: "Small-format pieces for laptops, bottles, toolboxes, cars, and wherever else people make questionable adhesive decisions." },
  { title: "Limited Drops", text: "Built around short runs, email capture, Instagram traffic, and simple launch windows." },
];

export default function Home() {
  return <main className="site">
    <header className="header"><div className="container nav"><a className="logo" href="#top">STEP CORRECT</a><nav className="links"><a href="#drop">Drop</a><a href="#lookbook">Lookbook</a><a href="#story">Story</a><a href="#contact">Contact</a></nav><a className="btn primary" href="#contact">Notify Me</a></div></header>
    <section id="top" className="container hero"><div className="kicker">Streetwear • Stickers • Correct Steps Only</div><h1>Move correct. Dress correct.</h1><p>Step Correct is a streetwear and sticker brand built around intent, confidence, and showing up like your next move matters.</p><div className="actions"><a className="btn primary" href="#drop">Preview the Drop</a><a className="btn" href="#contact">Follow / Contact</a></div></section>
    <div className="marquee"><div className="container"><span>Correct Steps Only</span><span>First Drop Coming Soon</span><span>Tees</span><span>Stickers</span><span>Streetwear</span></div></div>
    <section id="drop" className="container section"><div className="kicker">The Drop</div><h2>Built for a first release without pretending the empire is already Nike.</h2><div className="grid">{products.map((p)=><article className="card" key={p.title}><h3>{p.title}</h3><p>{p.text}</p></article>)}</div></section>
    <section id="lookbook" className="container section"><div className="split"><div className="card"><div className="kicker">Lookbook</div><h2>Photo slots ready.</h2><p>Replace these blocks with product photos, mockups, or a simple grid from the first shoot. The layout is intentionally dark and editorial like the personal site, not a contractor page wearing streetwear cosplay.</p></div><div className="card"><h3>Suggested assets</h3><p>Front tee, back tee, close-up texture, sticker sheet, lifestyle shot, and one strong hero image.</p></div></div></section>
    <section id="story" className="container section"><div className="card"><div className="kicker">Brand Story</div><h2>Stand on it. Step correct.</h2><p>Use this section for the founder story, brand rules, drop philosophy, and why the name matters. Keep it short. Streetwear brands die when the About page starts sounding like a freshman philosophy paper.</p></div></section>
    <section id="contact" className="container section"><div className="card"><div className="kicker">Contact</div><h2>First drop coming soon.</h2><p>Replace with the real Instagram, TikTok, email, or Shopify/Stripe link when ready.</p><div className="actions"><a className="btn primary" href="mailto:hello@stepcorrect.com">Email Step Correct</a><a className="btn" href="https://instagram.com/" target="_blank">Instagram</a></div></div></section>
    <footer className="footer"><div className="container">© {new Date().getFullYear()} Step Correct. All rights reserved.</div></footer>
  </main>;
}
