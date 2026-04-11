import type { Metadata } from "next";
import { SafeVUEContent } from "@/components/safevue-ai-content";

export const metadata: Metadata = {
  title: "SafeVUE.ai — Vik Geev",
  description:
    "Case study: Designing an Industry 4.0 maritime safety platform for SOL-X. 100+ vessels deployed globally, 98% crew satisfaction, 4000 man-hours saved per vessel per year.",
};

export default function SafeVUEPage() {
  return <SafeVUEContent />;
}
