import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Drop", href: "/drop" },
  { label: "Story", href: "/story" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/",
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/",
  },
  {
    label: "Email",
    href: "mailto:stepcorrect@example.com",
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-main">
        <div>
          <Link href="/" className="site-footer-brand">
            STEP CORRECT
          </Link>

          <p className="site-footer-tagline">
            Stand ten toes down. Step correct.
          </p>
        </div>

        <div className="site-footer-links">
          <div>
            <p className="site-footer-heading">Pages</p>

            <div className="site-footer-list">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="site-footer-heading">Social</p>

            <div className="site-footer-list">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noreferrer noopener"
                      : undefined
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="site-footer-bottom">
        <p>© {new Date().getFullYear()} Step Correct. All rights reserved.</p>
        <p>Yellow. Black. White. No excuses.</p>
      </div>
    </footer>
  );
}