import Link from "next/link";
import { Mail, ExternalLink, Download } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto">
      <div className="mx-auto max-w-6xl px-6 pt-16">

        {/* ── CTA card ── */}
        <div
          className="p-10 rounded-2xl text-center mb-16"
          style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)" }}
        >
          <h2
            className="font-heading font-bold mb-3"
            style={{
              fontFamily: "var(--font-heading, sans-serif)",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              color: "var(--fg)",
              letterSpacing: "-0.02em",
            }}
          >
            Let&apos;s build something great
          </h2>
          <p className="text-base mb-8 max-w-md mx-auto" style={{ color: "var(--muted)" }}>
            Open to Head of Design, Principal Designer, and Experience Design Lead roles in Singapore and across Southeast Asia.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="mailto:viknesh.geevan@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium border"
              style={{ borderColor: "var(--border)", color: "var(--fg)" }}>
              <Mail size={17} /> viknesh.geevan@gmail.com
            </a>
            <a href="https://linkedin.com/in/vikneshgeev" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium border"
              style={{ borderColor: "var(--border)", color: "var(--fg)" }}>
              <ExternalLink size={17} /> LinkedIn
            </a>
            <a href="/Viknesh_Geevanantham_Resume.pdf" download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium border"
              style={{ borderColor: "var(--border)", color: "var(--fg)" }}>
              <Download size={17} /> Resume PDF
            </a>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="flex flex-col sm:flex-row justify-between items-center gap-4 pb-8 text-sm"
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: "2rem",
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
