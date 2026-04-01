import type { Metadata } from "next";
import { WhyHireContent } from "@/components/why-hire-content";

export const metadata: Metadata = {
  title: "Why Hire Me — Vik Geev",
  description:
    "Domain expertise across Fintech, Insurtech, Maritime, and emerging tech. Why Vik Geev is the right fit for your senior product design role.",
};

export default function WhyHirePage() {
  return <WhyHireContent />;
}
