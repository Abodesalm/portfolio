import Contact from "@/sections/Contact";
import Header from "@/sections/Header";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";

export default function Home({}) {
  return (
    <div className="min-h-[70vh]">
      <Header />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
