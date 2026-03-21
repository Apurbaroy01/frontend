
import About from "./about/page";
import Hero from "./hero/page";
import Stack from "./stack/page";
import ConnectSection from "@/components/ConnectSection";
import EducationSection from "./education/page";
import DatabaseWithRestApi from "@/components/ui/database-with-rest-api";
import ProjectsSection from "@/components/ProjectCard";


export default function Home() {
  return (
    <div >
      <Hero />
      <About />
      <DatabaseWithRestApi  />
      <Stack />
      <ProjectsSection />
      <EducationSection />
      <ConnectSection />
    </div>
  );
}
