import { Metadata } from "next";
import ExperienceSection from "./ExperienceSection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    title: "Experience | " + siteConfig.name,
    description: siteConfig.description,
};

const WorkExperience = () => {
    return (
        <div>
            <ExperienceSection />
        </div>
    );
};

export default WorkExperience;
