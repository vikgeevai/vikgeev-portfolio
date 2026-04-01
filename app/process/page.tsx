import type { Metadata } from "next";
import { ProcessPageContent } from "@/components/process-page-content";

export const metadata: Metadata = {
  title: "Process — Vik Geev",
  description:
    "How I approach product design — from discovery and research through to design systems and delivery.",
};

export default function ProcessPage() {
  return <ProcessPageContent />;
}
