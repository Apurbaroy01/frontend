

import ProjectsSection from "@/components/ProjectCard";
import About from "./about/page";
import Hero from "./hero/page";
import Stack from "./stack/page";


export default function Home() {
  return (
    <div >
      <Hero />
      <About />
      <Stack />
      <ProjectsSection />
      
    </div>
  );
}
