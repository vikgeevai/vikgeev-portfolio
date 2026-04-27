import type { Metadata } from "next";
import { FWDTermLifeContent } from "@/components/fwd-term-life-content";

export const metadata: Metadata = {
  title: "FWD Term Life Insurance Re-Design — Vik Geev",
  description:
    "Case study: Re-designing FWD Term Life's purchase flow — reduced from 14 pages to 6, 14 mins to 9, with 100% task success in usability testing.",
};

export default function FWDTermLifePage() {
  return <FWDTermLifeContent />;
}
