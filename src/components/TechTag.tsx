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
};

export default function TechTag({ name }: { name: string }) {
  const slug = TECH_ICON_SLUGS[name];

  return (
    <span className="tag">
      {slug && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://cdn.simpleicons.org/${slug}`}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={12}
          height={12}
          className="tech-icon h-3 w-3"
        />
      )}
      {name}
    </span>
  );
}
