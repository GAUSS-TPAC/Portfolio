import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/* Ordre : ce que j'ai fait, puis où je l'ai fait, puis avec quels outils.
   Les compétences passaient avant les projets, ce qui demandait au lecteur de
   retenir une liste d'outils avant de savoir à quoi ils avaient servi. */
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
