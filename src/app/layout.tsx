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
      <head>
        {/* Le masquage avant révélation est désormais conditionné à cette classe,
            posée avant le premier rendu pour éviter tout clignotement.
            Auparavant `.scroll-animate` masquait le contenu sans condition : si
            React n'arrivait jamais à s'hydrater, le portfolio se réduisait à son
            hero, sans le moindre indice de ce qui n'allait pas. Le garde-fou à
            trois secondes réaffiche tout si React n'a pas donné signe de vie. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var d=document.documentElement;d.classList.add('js-reveal');" +
              "setTimeout(function(){if(!window.__revealReady)d.classList.remove('js-reveal');},3000);})();",
          }}
        />
      </head>
      <body className="antialiased">
        <Providers>
          <ScrollAnimations />
          {children}
        </Providers>
      </body>
    </html>
  );
}
