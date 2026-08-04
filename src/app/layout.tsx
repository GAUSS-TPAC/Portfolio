import type { Metadata } from "next";
import "./globals.css";
import ScrollAnimations from "@/components/ScrollAnimations";
import { Providers } from "./providers";
import { SITE_URL } from "@/lib/site";

const TITLE = "Alan Chanel Tchapda | ML & Data Engineer";
const DESCRIPTION =
  "Je construis les chaînes qui amènent la donnée jusqu'au modèle : ingestion, transformation, mise en production. Élève ingénieur à l'ENSP, deux ans de livraison en production sur des API et des plateformes de données.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Alan Tchapda",
    "ML Engineer",
    "Data Engineer",
    "Data Scientist",
    "pipeline de données",
    "machine learning",
    "Python",
    "Spring Boot",
    "Next.js",
    "portfolio",
    "Yaoundé",
    "Cameroun",
  ],
  authors: [{ name: "Alan Chanel Tchapda Pieme" }],
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "profile",
    locale: "fr_FR",
    url: "/",
    siteName: "Alan Chanel Tchapda",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Alan Chanel Tchapda Pieme — ML & Data Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
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
