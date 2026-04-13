"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff, Lock } from "lucide-react";

function UnlockForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/work";

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push(next);
      } else {
        setError("Incorrect password. Please try again.");
        setPassword("");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div
        className="w-full max-w-sm rounded-2xl p-8"
        style={{ backgroundColor: "var(--card)", border: "1px solid var(--card-border)" }}
      >
        {/* Icon */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
          style={{ backgroundColor: "rgba(37,99,235,0.1)" }}
        >
          <Lock size={18} style={{ color: "var(--accent)" }} />
        </div>

        {/* Heading */}
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-2"
          style={{ color: "var(--accent)" }}
        >
          NDA Protected
        </p>
        <h1
          className="font-bold mb-2"
          style={{
            fontFamily: "var(--font-heading, sans-serif)",
            fontSize: "1.375rem",
            color: "var(--fg)",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
          }}
        >
          Enter password to view case studies
        </h1>
        <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
          These case studies are password protected due to NDA agreements.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              autoFocus
              className="w-full px-4 py-3 rounded-xl text-sm pr-11 outline-none transition-all"
              style={{
                backgroundColor: "var(--bg)",
                border: `1px solid ${error ? "rgba(239,68,68,0.5)" : "var(--border)"}`,
                color: "var(--fg)",
              }}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
              style={{ color: "var(--muted)" }}
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          {error && (
            <p className="text-sm" style={{ color: "#EF4444" }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="w-full py-3 rounded-xl text-sm font-semibold transition-opacity disabled:opacity-50"
            style={{ backgroundColor: "var(--accent)", color: "#fff" }}
          >
            {loading ? "Verifying…" : "View case studies"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function UnlockPage() {
  return (
    <Suspense>
      <UnlockForm />
    </Suspense>
  );
}
