"use client";
import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    // Signale au garde-fou du layout que React a bien démarré ; sans ce drapeau,
    // il retire `.js-reveal` au bout de trois secondes et réaffiche tout.
    (window as unknown as { __revealReady?: boolean }).__revealReady = true;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in-view");
          // Une fois révélé, l'élément n'a plus rien à apprendre de l'observer.
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".scroll-animate").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
