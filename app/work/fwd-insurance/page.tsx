import type { Metadata } from "next";
import { FWDInsuranceContent } from "@/components/fwd-insurance-content";

export const metadata: Metadata = {
  title: "FWD Insurance — Vik Geev",
  description:
    "Case study: Designing the X-SELL initiative at FWD Insurance — a research-led cross-sell experience that reframed insurance questionnaires as something customers actually wanted to complete.",
};

export default function FWDInsurancePage() {
  return <FWDInsuranceContent />;
}
