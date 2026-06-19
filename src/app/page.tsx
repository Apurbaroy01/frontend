import DatabaseWithRestApi from "@/components/ui/database-with-rest-api";
import About from "./about/page";
import Stack from "./stack/page";
import ProjectsSection from "@/components/ProjectCard";
import Educations from "./education/page";
import Hero from "./hero/page";
import Connection from "./connection/page";

export default function Home() {
  return (
    <div >
      <Hero/>
      <About />
      <DatabaseWithRestApi  />
      <Stack />
      <ProjectsSection />
      <Educations />
      <Connection />
    </div>
  );
}
