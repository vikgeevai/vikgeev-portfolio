import Link from "next/link";
import { MessageCircle, Mail, ExternalLink } from "lucide-react";

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
              href="https://wa.me/6596875688"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full font-medium transition-all duration-200 cursor-pointer"
              style={{ backgroundColor: "#25D366", color: "#fff" }}
            >
              <MessageCircle size={18} />
              +65 9687 5688 on WhatsApp
            </a>
            <a
              href="mailto:hello@vikgeev.com"
              className="inline-flex items-center gap-2 text-sm transition-colors duration-200"
              style={{ color: "var(--muted)" }}
            >
              <Mail size={15} />
              hello@vikgeev.com
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
