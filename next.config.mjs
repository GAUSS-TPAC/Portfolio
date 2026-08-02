/** @type {import('next').NextConfig} */

// Politique de sécurité du contenu.
// 'unsafe-inline' reste nécessaire pour les scripts d'hydratation de Next.js et
// les styles inline de Tailwind : une CSP à nonce imposerait un middleware et
// rendrait toutes les pages dynamiques, ce qui n'a pas de sens pour un site statique.
const csp = [
  "default-src 'self'",
  "img-src 'self' data: https://cdn.simpleicons.org",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
  "connect-src 'self' https://formspree.io",
  "form-action 'self' https://formspree.io",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Décourage l'indexation et l'archivage des CV par les moteurs de recherche.
        source: "/:path*.pdf",
        headers: [{ key: "X-Robots-Tag", value: "noindex, noarchive, nosnippet" }],
      },
    ];
  },
};

export default nextConfig;
