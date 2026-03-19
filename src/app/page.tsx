

import ProjectsSection from "@/components/ProjectCard";
import About from "./about/page";
import Hero from "./hero/page";
import Stack from "./stack/page";
import ConnectSection from "@/components/ConnectSection";

export default function Home() {
  return (
    <div >
      <Hero />
      <About />
      <Stack />
      <ProjectsSection />
      <ConnectSection />

    </div>
  );
}
