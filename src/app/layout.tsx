import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-[#0a0a0f] text-slate-100 antialiased">{children}</body>
    </html>
  );
}
