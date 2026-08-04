"use client";
import { useState } from "react";

/* Visuel de projet. Il tente `/projects/<slug>.png` et retombe sur un panneau
   typographique si le fichier n'existe pas encore : les captures peuvent donc
   être déposées une par une, sans toucher au code, et l'absence d'une image ne
   laisse jamais de trou dans la grille.

   Format attendu : 1280 × 720 (16/9), PNG ou JPG. */
export default function ProjectShot({
  slug,
  title,
  className = "",
}: {
  slug: string;
  title: string;
  className?: string;
}) {
  const [missing, setMissing] = useState(false);

  return (
    <div
      className={`relative aspect-video w-full overflow-hidden ${className}`}
      style={{ backgroundColor: "var(--surf)", borderBottom: "1px solid var(--brdr)" }}
    >
      {missing ? (
        <div
          className="absolute inset-0 flex items-center justify-center p-6"
          style={{
            backgroundImage:
              "radial-gradient(60% 70% at 30% 20%, var(--halo), transparent 70%), " +
              "linear-gradient(var(--grid-line) 1px, transparent 1px), " +
              "linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
            backgroundSize: "auto, 28px 28px, 28px 28px",
          }}
        >
          <span className="meta text-center opacity-70">{title}</span>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`/projects/${slug}.png`}
          alt={title}
          loading="lazy"
          onError={() => setMissing(true)}
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
}
