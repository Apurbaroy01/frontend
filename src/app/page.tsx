import DatabaseWithRestApi from "@/components/ui/database-with-rest-api";
import About from "./about/page";
import Stack from "./stack/page";
import Educations from "./education/page";
import Hero from "./hero/page";
import Connection from "./connection/page";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import WorkPage from "./work/page";


export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function Home() {
  return (
    <div >
      <Hero />
      <About />
      <DatabaseWithRestApi />
      <Stack />
      <WorkPage />
      <Educations />
      <Connection />
    </div>
  );
}
