/* Table unique des logos Simple Icons. Elle existait en trois exemplaires — dans
   Skills, Projects et Experience — avec des clés qui divergeaient déjà
   (« React » vs « React.js », « Django REST » vs « Django REST Framework »), si
   bien qu'un même outil s'affichait avec logo dans une section et sans dans une
   autre. Les deux graphies sont conservées ici pour ne pas avoir à retoucher les
   traductions. */
const TECH_ICON_SLUGS: Record<string, string> = {
  "Java":                  "java",
  "Python":                "python",
  "JavaScript":            "javascript",
  "TypeScript":            "typescript",
  "Dart":                  "dart",
  "React":                 "react",
  "React.js":              "react",
  "Next.js":               "nextdotjs",
  "Flutter":               "flutter",
  "Redux":                 "redux",
  "Tailwind CSS":          "tailwindcss",
  "HTML5":                 "html5",
  "CSS3":                  "css3",
  "Spring Boot":           "springboot",
  "Django REST":           "django",
  "Django REST Framework": "django",
  "Node.js":               "nodedotjs",
  "GraphQL":               "graphql",
  "WebSocket":             "socketdotio",
  "JWT":                   "jsonwebtokens",
  "PostgreSQL":            "postgresql",
  "MySQL":                 "mysql",
  "MongoDB":               "mongodb",
  "Docker":                "docker",
  "CI/CD":                 "githubactions",
  "GitHub Actions":        "githubactions",
  "Linux":                 "linux",
  "Git":                   "git",
  "JUnit":                 "junit5",
  "Jest":                  "jest",
  "Pandas":                "pandas",
  "scikit-learn":          "scikitlearn",
  "Power BI":              "powerbi",
  "Kafka":                 "apachekafka",
  "Redis":                 "redis",
  "Express":               "express",
  "SQLite":                "sqlite",
  "Flask":                 "flask",
  "C":                     "c",
  // Sans logo assumé : NLP, Séries temporelles, RBAC, OAuth2 et Agile ne sont
  // pas des produits. La pastille s'affiche alors en texte seul.
};

/* Marques dont la couleur officielle est quasi noire : sur les cartes sombres,
   leur logo disparaissait purement et simplement, laissant un blanc avant le
   nom. Le CDN accepte une couleur en suffixe — on leur impose donc un gris
   neutre, lisible sur les deux thèmes. */
const DARK_LOGOS = new Set([
  "nextdotjs", "express", "flask", "apachekafka", "django",
  "sqlite", "jsonwebtokens", "socketdotio", "pandas", "railway",
]);
const NEUTRAL = "94a3b8";

export default function TechTag({ name }: { name: string }) {
  const slug = TECH_ICON_SLUGS[name];
  const src = slug
    ? `https://cdn.simpleicons.org/${slug}${DARK_LOGOS.has(slug) ? `/${NEUTRAL}` : ""}`
    : null;

  return (
    <span className="tag">
      {src && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={12}
          height={12}
          /* Simple Icons a retiré certaines marques de son catalogue (Java,
             Power BI…) : la requête échoue et laissait un blanc avant le nom.
             On efface l'image plutôt que de tenir à jour la liste de ce que le
             CDN héberge encore. */
          onError={(e) => { e.currentTarget.style.display = "none"; }}
          className="tech-icon h-3 w-3"
        />
      )}
      {name}
    </span>
  );
}
