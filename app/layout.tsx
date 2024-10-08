import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import Hero from "@/app/_components/Hero";
import Footer from "@/app/_components/Footer";

import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime Vault",
  description: "Your favorite anime, all in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <main className="mx-auto max-w-7xl bg-[#0F1117]">
          <Hero />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
