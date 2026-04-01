import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about-page-content";

export const metadata: Metadata = {
  title: "About — Vik Geev",
  description:
    "Lead Product Designer with 10+ years experience in Fintech, Insurtech, and Maritime. Based in Singapore.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
