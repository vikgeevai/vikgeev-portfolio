import type { Metadata } from "next";
import { AIPromptEngineeringContent } from "@/components/ai-prompt-engineering-content";

export const metadata: Metadata = {
  title: "Shipping with Claude Code — Vik Geev",
  description:
    "Case study: How I built a production product in weeks — directing Claude as design partner, content writer, and engineer. Plan → Design → Build → Ship → Evaluate.",
};

export default function AIPromptEngineeringPage() {
  return <AIPromptEngineeringContent />;
}
