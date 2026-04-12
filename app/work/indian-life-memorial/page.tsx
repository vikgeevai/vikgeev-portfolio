import type { Metadata } from "next";
import { IndianLifeMemorialContent } from "@/components/indian-life-memorial-content";

export const metadata: Metadata = {
  title: "Indian Life Memorial — Vik Geev",
  description:
    "Case study: Designing Singapore's first agentic funeral planner — a compassionate digital service for the Indian community, built end-to-end with Claude.",
};

export default function IndianLifeMemorialPage() {
  return <IndianLifeMemorialContent />;
}
