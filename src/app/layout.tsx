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
  title: "Alan Tchapda | Portfolio",
  description:
    "Développeur Fullstack, Data Scientist & ML Engineer — Portfolio de Tchapda Pieme Alan Chanel",
  keywords: [
    "portfolio",
    "data scientist",
    "fullstack developer",
    "machine learning",
    "data engineer",
    "IA",
  ],
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
