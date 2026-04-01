import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vik Geev — Lead Product Designer",
  description:
    "Lead Product Designer with 10+ years designing products that convert, retain, and build trust — across Fintech, Insurtech, and Maritime industries in Singapore.",
  keywords: [
    "product designer",
    "UX designer",
    "UI designer",
    "Singapore",
    "fintech",
    "insurtech",
    "maritime",
  ],
  openGraph: {
    title: "Vik Geev — Lead Product Designer",
    description:
      "Lead Product Designer with 10+ years designing products that convert, retain, and build trust.",
    type: "website",
    locale: "en_SG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${plusJakartaSans.variable}`}
    >
      <body className="min-h-dvh flex flex-col">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
