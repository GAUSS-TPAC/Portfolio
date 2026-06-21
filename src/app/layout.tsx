import type { Metadata } from "next";
import "./globals.css";
import ScrollAnimations from "@/components/ScrollAnimations";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Alan Chanel Tchapda | Ingénieur Fintech · Fullstack · Data",
  description:
    "Portfolio d'Alan Chanel Tchapda Pieme — Ingénieur Fintech, Développeur Fullstack (React, Next.js, Spring Boot, Flutter), Data Scientist & ML Engineer basé à Yaoundé, Cameroun.",
  keywords: [
    "Alan Tchapda",
    "Ingénieur Fintech",
    "Développeur Fullstack",
    "Data Scientist",
    "ML Engineer",
    "Spring Boot",
    "Next.js",
    "Flutter",
    "Django",
    "portfolio",
    "Yaoundé",
    "Cameroun",
  ],
  authors: [{ name: "Alan Chanel Tchapda Pieme" }],
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Alan Chanel Tchapda | Ingénieur Fintech · Fullstack · Data",
    description:
      "Ingénieur logiciel +2 ans d'expérience — APIs sécurisées, pipelines temps réel, applications mobiles & web.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" data-theme="dark">
      <body className="antialiased">
        <Providers>
          <ScrollAnimations />
          {children}
        </Providers>
      </body>
    </html>
  );
}
