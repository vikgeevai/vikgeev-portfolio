import type { Metadata } from "next";
import { UOBMoneyLockContent } from "@/components/uob-money-lock-content";

export const metadata: Metadata = {
  title: "UOB Money Lock 2.0 — Vik Geev",
  description:
    "Case study: Designing a MAS-mandated CASA fund locking feature for UOB TMRW. $3.9B locked in 3 weeks. Product Design Lead.",
};

export default function UOBMoneyLockPage() {
  return <UOBMoneyLockContent />;
}
