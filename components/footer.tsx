import Link from "next/link";
import { Mail, ExternalLink } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-16 mt-auto"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left */}
          <div>
            <h2
              className="font-heading font-bold mb-3"
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                color: "var(--fg)",
                letterSpacing: "-0.02em",
              }}
            >
              Let&apos;s build something great.
            </h2>
            <p className="text-base leading-relaxed max-w-sm" style={{ color: "var(--muted)" }}>
              Available for senior Product Design roles in Singapore and
              Southeast Asia. Open to remote and hybrid opportunities.
            </p>
          </div>

          {/* Right — contact */}
          <div className="flex flex-col gap-4 md:items-end justify-center">
            <a
              href="mailto:viknesh.geevan@gmail.com"
              className="inline-flex items-center gap-2 text-sm transition-colors duration-200"
              style={{ color: "var(--muted)" }}
            >
              <Mail size={15} />
              viknesh.geevan@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-sm"
          style={{
            borderTop: "1px solid var(--border)",
            color: "var(--muted)",
          }}
        >
          <p>© {year} Vik Geev. All rights reserved.</p>
          <nav className="flex items-center gap-6">
            <Link href="/work" className="hover:opacity-70 transition-opacity">Work</Link>
            <Link href="/about" className="hover:opacity-70 transition-opacity">About</Link>
            <Link href="/process" className="hover:opacity-70 transition-opacity">Process</Link>
            <a
              href="https://www.vikgeev.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Full Portfolio"
              className="hover:opacity-70 transition-opacity"
            >
              <ExternalLink size={16} />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
